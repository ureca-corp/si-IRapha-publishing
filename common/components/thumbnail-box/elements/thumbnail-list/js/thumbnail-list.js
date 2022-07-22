import { ThumbnailItem } from "./thumbnail-item.js";
import { Selectors, LayoutClassType } from "../../../common/index.js";

/**
 * Constructor types
 *
 * @type $element: Element
 *
 * @type isLayoutColumn$: BehaviorSubject<boolean>
 * 레이아웃 세로형 여부
 *
 * @type isHide$: BehaviorSubject<boolean>
 * 폴딩 여부
 */
export class ThumbnailList {
  #$root;

  constructor({ $element, isLayoutColumn$, isHide$ }) {
    this.#$root = $element;

    this.#initThumbnailItems({ isLayoutColumn$ });

    isLayoutColumn$.subscribe((isLayoutColumn) =>
      this.#handleLayoutChange(isLayoutColumn)
    );

    isHide$.subscribe((isHide) => this.#handleVisibilityChange(isHide));
  }

  // private
  #initThumbnailItems({ isLayoutColumn$ }) {
    const $items = [
      ...this.#$root.querySelectorAll(`.${Selectors.ThumbnailListItem}`),
    ];
    $items.map(($element) => new ThumbnailItem({ $element, isLayoutColumn$ }));
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
    this.#$root.classList.add(LayoutClassType.Column);
  }

  #resetLayout() {
    this.#$root.classList.remove(LayoutClassType.Column);
  }

  // visibility control
  #hide() {
    this.#$root.style.display = "none";
  }

  #visible() {
    this.#$root.style.display = "flex";
  }
}
