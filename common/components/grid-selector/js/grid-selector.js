import { GridSelectorItem } from "./grid-selector.item.js";

const SelectorClasses = {
  GridSelector: ".irapha-grid-selector",
};

const MatrixSize = 5;

export class GridSelector {
  #gridContainer;
  #gridItems;

  constructor() {
    this.#init();
  }

  // private
  #init() {
    this.#gridContainer = document.querySelector(SelectorClasses.GridSelector);
    this.#initGridItems();
  }

  #initGridItems() {
    const row = Array.from({ length: MatrixSize }, (_, index) => index + 1);

    const gridItems = row
      .map((_row) => row.map((_, index) => ({ row: _row, col: index + 1 })))
      .flat()
      .map((it) => GridSelectorItem.createGridSelectorItemElement(it))
      .map((it) => this.#appendChildToGridContainer(it))
      .map((it) => new GridSelectorItem(it));
    this.#gridItems = gridItems;

    this.#initGridItemsEventListener();
  }

  #initGridItemsEventListener() {
    this.#gridItems.forEach((it) => {
      it.setOnMouseEnterListener({
        callback: () => this.#activeGridItems(it.getRowCol()),
      });

      it.setOnMouseLeaveListener({ callback: () => this.#resetAllGridItems() });

      it.setOnClickListener({
        callback: () => this.#handleGridItemClick(it.getRowCol()),
      });
    });
  }

  #activeGridItems({ row, col }) {
    this.#gridItems
      .filter((it) => it.isTargetToBeActivated({ row, col }))
      .forEach((it) => it.setActive(true));
  }

  #appendChildToGridContainer(element) {
    this.#gridContainer.appendChild(element);
    return element;
  }

  #resetAllGridItems() {
    this.#gridItems.forEach((it) => it.setActive(false));
  }

  // handler
  #handleGridItemClick({ row, col }) {
    console.log(`${row},${col}`);
  }
}
