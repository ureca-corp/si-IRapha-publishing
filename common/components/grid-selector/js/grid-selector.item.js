const rx = rxjs;

const Selectors = {
  GridSelectorItem: "irapha-grid-selector__item",
};

const Attributes = {
  Row: "row",
  Column: "col",
  GridSelector: {
    key: "irapha-grid-selector",
    active: "active: true;",
  },
};

export class GridSelectorItem {
  #element;

  #isActive$;

  constructor(element) {
    this.#element = element;

    this.#initStates();
  }

  // private
  #initStates() {
    const isActive$ = new rx.BehaviorSubject();
    isActive$.subscribe((isActive) => this.#handleIsActiveChange(isActive));
    this.#isActive$ = isActive$;
  }

  #active() {
    this.#element.setAttribute(
      Attributes.GridSelector.key,
      Attributes.GridSelector.active
    );
  }

  #inactive() {
    this.#element.setAttribute(Attributes.GridSelector.key, null);
  }

  // handler
  #handleIsActiveChange(isActive) {
    if (!isActive) return this.#inactive();

    return this.#active();
  }

  // public
  // 원시 객체 (Dom) 생성
  static createGridSelectorItemElement({ row, col }) {
    const gridItem = document.createElement("div");
    gridItem.classList.add(Selectors.GridSelectorItem);
    gridItem.setAttribute(Attributes.Row, row);
    gridItem.setAttribute(Attributes.Column, col);

    return gridItem;
  }

  getRow() {
    return this.#element.getAttribute(Attributes.Row);
  }

  getCol() {
    return this.#element.getAttribute(Attributes.Column);
  }

  getRowCol() {
    return {
      row: this.getRow(),
      col: this.getCol(),
    };
  }

  isTargetToBeActivated({ row, col }) {
    return this.getRow() <= +row && this.getCol() <= +col;
  }

  setActive(isActive) {
    this.#isActive$.next(isActive);
  }

  // set event listener
  setOnMouseEnterListener({ callback }) {
    rx.fromEvent(this.#element, "mouseenter").subscribe(callback);
  }

  setOnMouseLeaveListener({ callback }) {
    rx.fromEvent(this.#element, "mouseleave").subscribe(callback);
  }

  setOnClickListener({ callback }) {
    rx.fromEvent(this.#element, "click").subscribe(callback);
  }
}
