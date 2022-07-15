import { ShrinkType } from "../../common/index.js";

export class ThumbnailBoxNav {
  #root;

  constructor({ element, shrinkDirection$ }) {
    this.#root = element;

    shrinkDirection$.subscribe((shrinkDirection) =>
      this.#handleShrinkDirectionChange(shrinkDirection)
    );
  }

  // shrink control
  #shrinkVertical() {
    this.#root.style.display = "none";
  }
  #resetShrinkState() {
    this.#root.style.display = "flex";
  }

  #handleShrinkDirectionChange(shrinkDirection) {
    if (shrinkDirection === ShrinkType.Horizontal)
      return this.#shrinkVertical();

    return this.#resetShrinkState();
  }
}
