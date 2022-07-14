import { ThumbnailItem } from "./thumbnail-item.js";

import { Selectors, LayoutClassType } from "../../../common/index.js";

export class ThumbnailList {
  #root;

  constructor({ element, isLayoutColumn$, isHide$ }) {
    this.#root = element;

    [...element.querySelectorAll(`.${Selectors.ThumbnailListItem}`)].map(
      (it) => new ThumbnailItem({ element: it, isLayoutColumn$ })
    );

    isLayoutColumn$.subscribe((isLayoutColumn) =>
      this.#handleLayoutChange(isLayoutColumn)
    );

    isHide$.subscribe((isHide) => this.#handleVisibilityChange(isHide));
  }

  // handler
  #handleLayoutChange(isLayoutColumn) {
    if (isLayoutColumn) return this.#layoutColumn();

    return this.#resetLayout();
  }

  #handleVisibilityChange(isHide) {
    if (isHide) return this.#hide();

    return this.#visible();
  }

  // layout control
  #layoutColumn() {
    this.#root.classList.add(LayoutClassType.Column);
  }

  #resetLayout() {
    this.#root.classList.remove(LayoutClassType.Column);
  }

  // visibility control
  #hide() {
    this.#root.style.display = "none";
  }

  #visible() {
    this.#root.style.display = "flex";
  }
}
