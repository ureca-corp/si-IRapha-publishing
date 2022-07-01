const rx = rxjs;

const Selectors = {
  LayoutColumnTwo: "--layout--column-two",
  HideIconName: "--name-hide",
};

const LayoutTypes = {
  ColumnTwo: "columnTwo",
};

export class ToolboxMenu {
  #element;

  #layout$;
  #isHideIconName$;

  constructor(element) {
    this.#element = element;

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
    this.#element.classList.add(Selectors.LayoutColumnTwo);
  }

  #resetLayout() {
    this.#element.classList.remove(Selectors.LayoutColumnTwo);
  }

  // handler
  #handleLayoutChange(layout) {
    if (layout === LayoutTypes.ColumnTwo) return this.#setLayoutColumnTwo();

    return this.#resetLayout();
  }

  #handleHideIconNameChange(isHideIconName) {
    if (isHideIconName)
      return this.#element.classList.add(Selectors.HideIconName);

    return this.#element.classList.remove(Selectors.HideIconName);
  }

  // public
  setLayout(layout) {
    this.#layout$.next(layout);
  }

  setHideIconName(isHideIconName) {
    this.#isHideIconName$.next(isHideIconName);
  }
}
