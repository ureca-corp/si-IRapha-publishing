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
  #model;

  constructor({ model }) {
    super({ $element: new ThumbnailItemComp() });
    this.#model = model;

    this.#initModel();

    useCustomContextMenu({
      $emitter: this.getEl(),
      contextMenuOpen$: window.store.thumbnailContextMenuOpen$,
    });
  }

  #initModel() {
    const { $topLeft, $topRight, $bottomLeft } = this.#getElements();

    const { topLeft, topRight, bottomLeft } = this.#model;
    $topLeft.innerHTML = topLeft;
    $topRight.innerHTML = topRight;
    $bottomLeft.innerHTML = bottomLeft;
  }

  #getElements() {
    const $topLeft = this.getElementByClassName(
      `${Selectors.ThumbnailListItemText}.${TextPositionClassType.TopLeft}`
    );

    const $topRight = this.getElementByClassName(
      `${Selectors.ThumbnailListItemText}.${TextPositionClassType.TopRight}`
    );

    const $bottomLeft = this.getElementByClassName(
      `${Selectors.ThumbnailListItemText}.${TextPositionClassType.BottomLeft}`
    );

    return {
      $topLeft,
      $topRight,
      $bottomLeft,
    };
  }
}

function ThumbnailItemComp() {
  return createElementFromHTML(`
  <li class="${Selectors.ThumbnailListItem}">
    <div class="${Selectors.ThumbnailListItemText} ${TextPositionClassType.TopLeft}"></div>
    <div class="${Selectors.ThumbnailListItemText} ${TextPositionClassType.TopRight}"></div>
    <div class="${Selectors.ThumbnailListItemText} ${TextPositionClassType.BottomLeft}"></div>
    <canvas class="${Selectors.ThumbnailListItemCanvas}"></canvas>
  </li>
  `);
}
