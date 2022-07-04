import { Logo } from "../../logo/index.js";
import { ToggleExpandIcon } from "../../toggle-expand-icon1/index.js";
import { ToolboxMenusManager } from "./menu-manager.js";

const rx = rxjs;

const Selectors = {
  Toolbox: "irapha-toolbox",

  LayoutColumn: "is-layout--column",
  ShrinkHorizontal: "is-shrink--horizontal",
  ShrinkVertical: "is-shrink--vertical",
};

const ShrinkDirection = {
  vertical: "vertical",
  horizontal: "horizontal",
};

export class Toolbox {
  #root;

  #isLayoutColumn$;
  #isExpanded$;
  #shrinkDirection$;
  #isHideIconName$;

  constructor() {
    this.#root = document.querySelector(`.${Selectors.Toolbox}`);

    this.#initStates();

    this.#initLogo();
    this.#initToggleExpandButton();
    this.#initMenusManager();

    this.#initMouseEvent();

    this.setHideIconName(true);
  }

  // private
  #initLogo() {
    new Logo({
      element: this.#root.querySelector(".irapha-logo"),
      shrinkDirection$: this.#shrinkDirection$,
    });
  }

  #initToggleExpandButton() {
    new ToggleExpandIcon({
      element: this.#root.querySelector(".irapha-toggle-expand"),
      isExpanded$: this.#isExpanded$,
      onClick: () => this.#toggle(),
    });
  }

  #initMenusManager() {
    new ToolboxMenusManager({
      isLayoutColumn$: this.#isLayoutColumn$,
      isHideIconName$: this.#isHideIconName$,
    });
  }

  #initStates() {
    const isLayoutColumn$ = new rx.BehaviorSubject();
    isLayoutColumn$.subscribe((isLayoutColumn) =>
      this.#handleLayoutChange(isLayoutColumn)
    );
    this.#isLayoutColumn$ = isLayoutColumn$;

    const shrinkDirection$ = new rx.BehaviorSubject();
    shrinkDirection$.subscribe((shrinkDirection) =>
      this.#handleShrinkDirectionChange(shrinkDirection)
    );
    this.#shrinkDirection$ = shrinkDirection$;

    const isExpanded$ = new rx.BehaviorSubject();
    isExpanded$.subscribe((isExpanded) => this.#handleExpanded(isExpanded));
    this.#isExpanded$ = isExpanded$;

    const isHideIconName$ = new rx.BehaviorSubject();
    this.#isHideIconName$ = isHideIconName$;
  }

  #initMouseEvent() {
    // 마우스 호버 시 임시로 보이기
    rx.fromEvent(this.#root, "mouseover").subscribe(() => {
      if (this.#isExpanded$.getValue()) return this.#handleExpanded(false);
    });

    // 마우스 호버 벗어나면 원상태 복귀
    rx.fromEvent(this.#root, "mouseout").subscribe(() => {
      const isExpanded = this.#isExpanded$.getValue();

      if (isExpanded) return this.setExpand(isExpanded);
    });
  }

  #setShrinkDirection(shrinkDirection) {
    this.#shrinkDirection$.next(shrinkDirection);
  }

  #shrinkVertical() {
    this.#root.classList.add(Selectors.ShrinkVertical);
  }

  #shrinkHorizontal() {
    this.#root.classList.add(Selectors.ShrinkHorizontal);
  }

  #resetShrinkState() {
    this.#root.classList.remove(Selectors.ShrinkVertical);
    this.#root.classList.remove(Selectors.ShrinkHorizontal);
  }

  #toggle() {
    const old = this.#isExpanded$.getValue();
    this.setExpand(!old);
  }

  // handler
  #handleLayoutChange(isLayoutColumn) {
    if (isLayoutColumn) return this.#root.classList.add(Selectors.LayoutColumn);

    return this.#root.classList.remove(Selectors.LayoutColumn);
  }

  #handleExpanded(isExpanded) {
    if (!isExpanded) {
      this.#setShrinkDirection(null);
      return this.#resetShrinkState();
    }

    if (!this.#isLayoutColumn$.getValue())
      return this.#setShrinkDirection("vertical");

    return this.#setShrinkDirection("horizontal");
  }

  #handleShrinkDirectionChange(shrinkDirection) {
    if (shrinkDirection === ShrinkDirection.vertical)
      return this.#shrinkVertical();

    if (shrinkDirection === ShrinkDirection.horizontal)
      return this.#shrinkHorizontal();

    return this.#resetShrinkState();
  }

  // public
  setLayoutColumn(isLayoutColumn) {
    this.#isLayoutColumn$.next(isLayoutColumn);
  }

  setExpand(isExpanded) {
    this.#isExpanded$.next(isExpanded);
  }

  setHideIconName(isHideIconName) {
    this.#isHideIconName$.next(isHideIconName);
  }
}
