import { GridSelectorItem } from "../item/grid-selector.item.js";
import { LayoutAttributeType } from "../../../../dicom-window/common/index.js";
import { BaseElement } from "../../../../base/index.js";
import { createElementFromHTML } from "../../../../../utils/dom/index.js";

const MatrixSize = 5;

function GridSelectorComp() {
  return createElementFromHTML(`<div class="irapha-grid-selector"></div>`);
}

export class GridSelector extends BaseElement {
  #gridItems;

  constructor() {
    super({ $element: new GridSelectorComp() });

    this.#initGridItems();
  }

  // private
  #initGridItems() {
    const row = Array.from({ length: MatrixSize }, (_, index) => index + 1);

    const gridItems = row
      .map((_row) => row.map((_, index) => ({ row: _row, col: index + 1 })))
      .flat()
      .map((matrix) => GridSelectorItem.create(matrix))
      .map(($gridItem) => this.#appendChildToGridContainer($gridItem))
      .map(($element) => new GridSelectorItem({ $element }));
    this.#gridItems = gridItems;

    this.#initGridItemsEventListener();
  }

  #initGridItemsEventListener() {
    this.#gridItems.forEach((it) => {
      it.setOnMouseEnterListener({
        callback: () => this.#activeGridMatrix(it.getRowCol()),
      });

      it.setOnMouseLeaveListener({ callback: () => this.#resetGridMatrix() });

      it.setOnClickListener({
        callback: () => this.#handleGridItemClick(it.getRowCol()),
      });
    });
  }

  #activeGridMatrix({ row, col }) {
    this.#gridItems
      .filter((it) => it.isTargetTobeActivated({ row, col }))
      .forEach((it) => it.setActive(true));
  }

  #appendChildToGridContainer(element) {
    this.getEl().appendChild(element);
    return element;
  }

  #resetGridMatrix() {
    this.#gridItems.forEach((it) => it.setActive(false));
  }

  // handler
  #handleGridItemClick({ row, col }) {
    this.#mutateDicomWindowLayout({ row, col });
  }

  #mutateDicomWindowLayout({ row, col }) {
    // dicom window layout mode 전역 상태 변경하기
    window.store.dicomWindowLayoutMode$.next({
      layout: LayoutAttributeType.Custom,
      grid: {
        row,
        col,
      },
    });
  }
}
