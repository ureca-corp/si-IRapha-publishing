import { createElementFromHTML } from "../../../../../utils/dom/index.js";
import { BaseElement } from "../../../../base/base-element.js";
import { useCustomContextMenu } from "../../../../modals/index.js";
import { Selectors, TextPositionClassType } from "../../../common/index.js";

/**
 * Constructor types
 *
 * @type model: {
 *   topLeft: string[],
 *   topRight: string[],
 *   bottomLeft: string[],
 * }
 */
export class ThumbnailItem extends BaseElement {
  static template = `
  <li class="${Selectors.ThumbnailListItem}">
    <div class="${Selectors.ThumbnailListItemText} ${TextPositionClassType.TopLeft}"></div>
    <div class="${Selectors.ThumbnailListItemText} ${TextPositionClassType.TopRight}"></div>
    <div class="${Selectors.ThumbnailListItemText} ${TextPositionClassType.BottomLeft}"></div>
    <canvas class="${Selectors.ThumbnailListItemCanvas}"></canvas>
  </li>
  `;

  #model;

  constructor({ model }) {
    super({ $element: createElementFromHTML(ThumbnailItem.template) });
    this.#model = model;

    this.#initModel();

    useCustomContextMenu({
      $emitter: this.getEl(),
      contextMenuOpen$: window.store.thumbnailContextMenuOpen$,
    });
  }

  #initModel() {
    const $topLeft = this.#getTopLeft();
    const $topRight = this.#getTopRight();
    const $bottomLeft = this.#getBottomLeft();

    const { topLeft, topRight, bottomLeft } = this.#model;
    $topLeft.innerHTML = topLeft;
    $topRight.innerHTML = topRight;
    $bottomLeft.innerHTML = bottomLeft;
  }

  #getTopLeft() {
    return this.getElementByClassName(
      `${Selectors.ThumbnailListItemText}.${TextPositionClassType.TopLeft}`
    );
  }

  #getTopRight() {
    return this.getElementByClassName(
      `${Selectors.ThumbnailListItemText}.${TextPositionClassType.TopRight}`
    );
  }

  #getBottomLeft() {
    return this.getElementByClassName(
      `${Selectors.ThumbnailListItemText}.${TextPositionClassType.BottomLeft}`
    );
  }
}
