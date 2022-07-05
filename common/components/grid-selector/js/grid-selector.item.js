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
  #root;

  #isActive$;

  constructor(element) {
    this.#root = element;

    this.#initStates();
  }

  // private
  #initStates() {
    const isActive$ = new rx.BehaviorSubject();
    isActive$.subscribe((isActive) => this.#handleIsActiveChange(isActive));
    this.#isActive$ = isActive$;
  }

  #active() {
    this.#root.setAttribute(
      Attributes.GridSelector.key,
      Attributes.GridSelector.active
    );
  }

  #inactive() {
    this.#root.setAttribute(Attributes.GridSelector.key, null);
  }

  // handler
  #handleIsActiveChange(isActive) {
    if (!isActive) return this.#inactive();

    return this.#active();
  }

  // public
  // 원시 객체 (DOM) 생성
  static createGridSelectorItemElement({ row, col }) {
    const gridItem = document.createElement("div");
    gridItem.classList.add(Selectors.GridSelectorItem);
    gridItem.setAttribute(Attributes.Row, row);
    gridItem.setAttribute(Attributes.Column, col);

    return gridItem;
  }

  getRow() {
    return this.#root.getAttribute(Attributes.Row);
  }

  getCol() {
    return this.#root.getAttribute(Attributes.Column);
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
    rx.fromEvent(this.#root, "mouseenter").subscribe(callback);
  }

  setOnMouseLeaveListener({ callback }) {
    rx.fromEvent(this.#root, "mouseleave").subscribe(callback);
  }

  setOnClickListener({ callback }) {
    rx.fromEvent(this.#root, "click").subscribe(callback);
  }
}
