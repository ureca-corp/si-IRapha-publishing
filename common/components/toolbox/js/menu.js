const rx = rxjs;

const MutationClasses = {
  LayoutColumnTwo: "is-layout--column-two",
  HideIconName: "is-state--name-hide",
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
    this.#element.classList.add(MutationClasses.LayoutColumnTwo);
  }

  #resetLayout() {
    this.#element.classList.remove(MutationClasses.LayoutColumnTwo);
  }

  // handler
  #handleLayoutChange(layout) {
    if (layout === LayoutTypes.ColumnTwo) return this.#setLayoutColumnTwo();

    return this.#resetLayout();
  }

  #handleHideIconNameChange(isHideIconName) {
    if (isHideIconName)
      return this.#element.classList.add(MutationClasses.HideIconName);

    return this.#element.classList.remove(MutationClasses.HideIconName);
  }

  // public
  setLayout(layout) {
    this.#layout$.next(layout);
  }

  setHideIconName(isHideIconName) {
    this.#isHideIconName$.next(isHideIconName);
  }
}
