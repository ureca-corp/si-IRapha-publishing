const ShrinkDirection = {
  Vertical: "vertical",
  Horizontal: "horizontal",
};

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
    if (shrinkDirection === ShrinkDirection.Horizontal)
      return this.#shrinkVertical();

    return this.#resetShrinkState();
  }
}
