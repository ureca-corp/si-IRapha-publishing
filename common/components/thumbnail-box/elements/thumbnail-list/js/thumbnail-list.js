import { ThumbnailItem } from "./thumbnail-item.js";
import { LayoutClassType } from "../../../types/index.js";

const Selectors = {
  Item: "irapha-thumbnail-list__item",
};

export class ThumbnailList {
  #root;

  #thumbnails;

  constructor({ element, isLayoutColumn$, isHide$ }) {
    this.#root = element;

    this.#thumbnails = [...element.querySelectorAll(`.${Selectors.Item}`)].map(
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
