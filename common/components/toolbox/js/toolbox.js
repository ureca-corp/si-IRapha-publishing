import { Logo } from "../../logo/index.js";
import { ToggleExpandIcon } from "../../toggle-expand-icon/index.js";
import { ToolboxMenusManager } from "./menu-manager.js";

const rx = rxjs;

const SelectorClasses = {
  Toolbox: ".irapha-toolbox",
  Menu: ".irapha-toolbox__menu",
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
    this._initMenusManager();

    this._initStates();
    this._initMouseEvent();
  }

  // private
  _initLogo() {
    this._logo = new Logo();
  }

  _initToggleExpandButton() {
    this._toggleExpandButton = new ToggleExpandIcon(() => this._toggleExpand());
  }

  _initMenusManager() {
    this._menusManager = new ToolboxMenusManager();
    this._menusManager.setHideIconName(true);
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

  _initMouseEvent() {
    // 마우스 호버 시 임시로 보이기
    rx.fromEvent(this._element, "mouseover").subscribe(() => {
      if (this._isExpanded$.getValue()) return this._resetShrinkState();
    });

    // 마우스 호버 벗어나면 원상태 복귀
    rx.fromEvent(this._element, "mouseout").subscribe(() => {
      const isExpanded = this._isExpanded$.getValue();

      if (isExpanded) return this.setExpand(isExpanded);
    });
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
    this._logo.setShrinkDirection(null);
    this._element.classList.remove(MutationClasses.ShrinkVertical);
    this._element.classList.remove(MutationClasses.ShrinkHorizontal);
  }

  _toggleExpand() {
    const old = this._isExpanded$.getValue();
    this.setExpand(!old);
  }

  // handler
  _handleLayoutChange(isLayoutColumn) {
    if (isLayoutColumn) {
      this._menusManager.setLayoutColumn(true);
      return this._element.classList.add(MutationClasses.LayoutColumn);
    }

    this._menusManager.setLayoutColumn(null);
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

  setHideIconName(isHideIconName) {
    this._menusManager.setHideIconName(isHideIconName);
  }
}
