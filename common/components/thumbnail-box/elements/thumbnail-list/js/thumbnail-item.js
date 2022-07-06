import { LayoutClassType } from "../../../types/index.js";

export class ThumbnailItem {
  #root;

  constructor({ element, isLayoutColumn$ }) {
    this.#root = element;

    // isLayoutColumn$.subscribe((isLayoutColumn) =>
    //   this.#handleLayoutChange(isLayoutColumn)
    // );
  }

  //   // handler
  //   #handleLayoutChange(isLayoutColumn) {
  //     if (isLayoutColumn) return this.#layoutColumn();

  //     return this.#resetLayout();
  //   }

  //   // layout control
  //   #layoutColumn() {
  //     this.#root.classList.add(LayoutClassType.Column);
  //   }

  //   #resetLayout() {
  //     this.#root.classList.remove(LayoutClassType.Column);
  //   }
}
