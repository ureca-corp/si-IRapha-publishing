import { KinSelector } from "../../../selectors/index.js";
import { ThumbnailBoxNav } from "../nav/nav.js";
import { ThumbnailBoxPaginationInfo } from "../pagination-info/pagination-info.js";

import { Selectors, LayoutClassType } from "../../common/index.js";

export class ThumbnailBoxControls {
  #root;

  constructor({ element, isLayoutColumn$, shrinkDirection$ }) {
    this.#root = element;

    new KinSelector({
      element: this.#root.querySelector(`#${Selectors.KinSelector}`),
      isHide$: shrinkDirection$,
    });

    new ThumbnailBoxNav({
      element: this.#root.querySelector(`.${Selectors.ThumbnailNav}`),
      shrinkDirection$,
    });

    new ThumbnailBoxPaginationInfo({
      element: this.#root.querySelector(`.${Selectors.PaginationInfo}`),
      isHide$: shrinkDirection$,
    });

    isLayoutColumn$.subscribe((isLayoutColumn) =>
      this.#handleLayoutChange(isLayoutColumn)
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

  // handler
  #handleLayoutChange(isLayoutColumn) {
    if (isLayoutColumn) return this.#layoutColumn();

    return this.#resetLayout();
  }
}
