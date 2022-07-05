import { ThumbnailBoxNav } from "./nav.js";
import { KinSelector } from "../../kin-selector/index.js";

const Selectors = {
  Nav: "irapha-thumbnail-box__nav",
  KinSelector: "irapha-kin-selector",

  LayoutColumn: "--layout-column",
};

const ShrinkDirection = {
  Vertical: "vertical",
  Horizontal: "horizontal",
};

export class ThumbnailBoxControls {
  #root;

  constructor({ element, isLayoutColumn$, shrinkDirection$ }) {
    this.#root = element;

    new KinSelector({
      element: this.#root.querySelector(`#${Selectors.KinSelector}`),
      isHide$: shrinkDirection$,
    });

    new ThumbnailBoxNav({
      element: this.#root.querySelector(`.${Selectors.Nav}`),
      shrinkDirection$,
    });

    isLayoutColumn$.subscribe((isLayoutColumn) =>
      this.#handleLayoutChange(isLayoutColumn)
    );

    shrinkDirection$.subscribe((shrinkDirection) =>
      this.#handleShrinkDirectionChange(shrinkDirection)
    );
  }

  // private
  // layout control
  #layoutColumn() {
    this.#root.classList.add(Selectors.LayoutColumn);
  }

  #resetLayout() {
    this.#root.classList.remove(Selectors.LayoutColumn);
  }

  // shrink control
  #shrinkVertical() {
    console.log("ok");
  }
  #shrinkHorizontal() {}
  #resetShrinkState() {}

  // handler
  #handleLayoutChange(isLayoutColumn) {
    if (isLayoutColumn) return this.#layoutColumn();

    return this.#resetLayout();
  }

  #handleShrinkDirectionChange(shrinkDirection) {
    if (shrinkDirection === ShrinkDirection.Vertical)
      return this.#shrinkVertical();

    if (shrinkDirection === ShrinkDirection.Horizontal)
      return this.#shrinkHorizontal();

    return this.#resetShrinkState();
  }
}
