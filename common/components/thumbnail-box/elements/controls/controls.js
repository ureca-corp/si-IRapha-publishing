import { ThumbnailBoxNav } from "../nav/nav.js";
import { KinSelector } from "../../../kin-selector/index.js";
import { ThumbnailBoxPaginationInfo } from "../pagination-info/pagination-info.js";
import { LayoutClassType } from "../../types/index.js";
import { ShrinkType } from "../../types/index.js";

const Selectors = {
  Nav: "irapha-thumbnail-box__nav",
  KinSelector: "irapha-kin-selector",
  PaginationInfo: "irapha-thumbnail-box__pagination-info",
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

    new ThumbnailBoxPaginationInfo({
      element: this.#root.querySelector(`.${Selectors.PaginationInfo}`),
      isHide$: shrinkDirection$,
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
    this.#root.classList.add(LayoutClassType.Column);
  }

  #resetLayout() {
    this.#root.classList.remove(LayoutClassType.Column);
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
    if (shrinkDirection === ShrinkType.Vertical) return this.#shrinkVertical();

    if (shrinkDirection === ShrinkType.Horizontal)
      return this.#shrinkHorizontal();

    return this.#resetShrinkState();
  }
}
