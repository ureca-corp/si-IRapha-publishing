import { createElementFromHTML } from "../../../../../utils/dom/index.js";
import { BaseElement } from "../../../../base/base-element.js";
import { useCustomContextMenu } from "../../../../modals/index.js";
import { Selectors, TextPositionAttr } from "../../../common/index.js";

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
    const $root = this.getEl();

    const $topLeft = $root.querySelector(
      `[${TextPositionAttr.Key}=${TextPositionAttr.TopLeft}]`
    );

    const $topRight = $root.querySelector(
      `[${TextPositionAttr.Key}=${TextPositionAttr.TopRight}]`
    );

    const $bottomLeft = $root.querySelector(
      `[${TextPositionAttr.Key}=${TextPositionAttr.BottomLeft}]`
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
    <div 
      class="${Selectors.ThumbnailListItemText}" 
      ${TextPositionAttr.Key}=${TextPositionAttr.TopLeft}
    ></div>
    <div 
      class="${Selectors.ThumbnailListItemText}"
      ${TextPositionAttr.Key}=${TextPositionAttr.TopRight}
    ></div>
    <div 
      class="${Selectors.ThumbnailListItemText}"
      ${TextPositionAttr.Key}=${TextPositionAttr.BottomLeft}
    ></div>
    <canvas class="${Selectors.ThumbnailListItemCanvas}"></canvas>
  </li>
  `);
}
