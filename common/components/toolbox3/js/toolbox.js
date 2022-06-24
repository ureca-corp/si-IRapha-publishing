import { Logo } from "/common/components/logo/index.js";
import { ToggleExpandIcon } from "/common/components/toggle-expand-icon/index.js";

const rx = rxjs;

const SelectorClasses = {
  Toolbox: ".irm-toolbox",
};

const MutationClasses = {
  LayoutColumn: "is-layout--column",
  ShrinkHorizontal: "is-shrink--horizontal",
  ShrinkVertical: "is-shrink--vertical",
};

const ShrinkDirection = {
  vertical: "vertical",
  horizontal: "horizontal",
};

export class Toolbox {
  constructor() {
    this._element = document.querySelector(SelectorClasses.Toolbox);
    this._initLogo();
    this._initToggleExpandButton();

    this._initStates();

    //
    this._element.addEventListener("mouseover", () => {
      if (this._isExpanded$.getValue()) return this._resetShrinkState();
    });

    this._element.addEventListener("mouseout", () => {
      const isExpanded = this._isExpanded$.getValue();

      if (isExpanded) return this.setExpand(isExpanded);
    });
  }

  // private
  _initLogo() {
    this._logo = new Logo();
  }

  _initToggleExpandButton() {
    this._toggleExpandButton = new ToggleExpandIcon(() => {
      const old = this._isExpanded$.getValue();
      this.setExpand(!old);
    });

    // rx.fromEvent(this._toggleExpandButton, "click").subscribe((e) => {
    //   const old = this._isExpanded$.getValue();
    //   this._isExpanded$.next(!old);
    // });
  }

  _initStates() {
    const isLayoutColumn$ = new rx.BehaviorSubject();
    isLayoutColumn$.subscribe((isLayoutColumn) =>
      this._handleLayoutChange(isLayoutColumn)
    );
    this._isLayoutColumn$ = isLayoutColumn$;

    const isExpanded$ = new rx.BehaviorSubject();
    isExpanded$.subscribe((isExpanded) => this._handleExpanded(isExpanded));
    this._isExpanded$ = isExpanded$;

    const shrinkDirection$ = new rx.BehaviorSubject();
    shrinkDirection$.subscribe((shrinkDirection) =>
      this._handleShrinkDirectionChange(shrinkDirection)
    );
    this._shrinkDirection$ = shrinkDirection$;
  }

  _setShrinkDirection(shrinkDirection) {
    this._shrinkDirection$.next(shrinkDirection);
  }

  // actions
  _shrinkVertical() {
    this._logo.setShrinkDirection("vertical");
    this._element.classList.add(MutationClasses.ShrinkVertical);
  }

  _shrinkHorizontal() {
    this._logo.setShrinkDirection("horizontal");
    this._element.classList.add(MutationClasses.ShrinkHorizontal);
  }

  _resetShrinkState() {
    this._element.classList.remove(MutationClasses.ShrinkVertical);
    this._element.classList.remove(MutationClasses.ShrinkHorizontal);
  }

  // handler
  _handleLayoutChange(isLayoutColumn) {
    if (isLayoutColumn) {
      return this._element.classList.add(MutationClasses.LayoutColumn);
    }

    return this._element.classList.remove(MutationClasses.LayoutColumn);
  }

  _handleExpanded(isExpanded) {
    if (!isExpanded) {
      this._toggleExpandButton.setExpandIcon();
      return this._resetShrinkState();
    }

    this._toggleExpandButton.setShrinkIcon();
    if (!this._isLayoutColumn$.getValue())
      return this._setShrinkDirection("vertical");

    return this._setShrinkDirection("horizontal");
  }

  _handleShrinkDirectionChange(shrinkDirection) {
    if (shrinkDirection === ShrinkDirection.vertical)
      return this._shrinkVertical();

    if (shrinkDirection === ShrinkDirection.horizontal)
      return this._shrinkHorizontal();

    return this._resetShrinkState();
  }

  // public
  setLayoutColumn(isLayoutColumn) {
    this._isLayoutColumn$.next(isLayoutColumn);
  }

  setExpand(isExpanded) {
    this._isExpanded$.next(isExpanded);
  }
}
