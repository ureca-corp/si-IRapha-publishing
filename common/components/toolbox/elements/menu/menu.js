import {
  HideClassType,
  LayoutClassType,
  LayoutType,
} from "../../common/index.js";

const rx = rxjs;

export class ToolboxMenu {
  #root;

  #layout$;
  #isHideIconName$;

  constructor(element) {
    this.#root = element;

    this.#initStates();
  }

  // private
  #initStates() {
    const layout$ = new rx.BehaviorSubject();
    layout$.subscribe((layout) => this.#handleLayoutChange(layout));
    this.#layout$ = layout$;

    const isHideIconName$ = new rx.BehaviorSubject();
    isHideIconName$.subscribe((hide) => this.#handleHideIconNameChange(hide));
    this.#isHideIconName$ = isHideIconName$;
  }

  #setLayoutColumnTwo() {
    this.#root.classList.add(LayoutClassType.ColumnTwo);
  }

  #resetLayout() {
    this.#root.classList.remove(LayoutClassType.ColumnTwo);
  }

  // handler
  #handleLayoutChange(layout) {
    if (layout === LayoutType.ColumnTwo) return this.#setLayoutColumnTwo();

    return this.#resetLayout();
  }

  #handleHideIconNameChange(isHideIconName) {
    if (isHideIconName)
      return this.#root.classList.add(HideClassType.HideIconName);

    return this.#root.classList.remove(HideClassType.HideIconName);
  }

  // public
  setLayout(layout) {
    this.#layout$.next(layout);
  }

  setHideIconName(isHideIconName) {
    this.#isHideIconName$.next(isHideIconName);
  }
}
