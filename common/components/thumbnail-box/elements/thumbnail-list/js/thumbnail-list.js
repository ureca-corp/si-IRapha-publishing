import { ThumbnailItem } from "./thumbnail-item.js";
import { Selectors, LayoutClassType } from "../../../common/index.js";
import { BaseElement } from "../../../../base/base-element.js";
import { createElementFromHTML } from "../../../../../utils/dom/CreateElementFromHTML.js";

/**
 * Constructor types
 *
 * @type models: {
 *   topLeft: string[],
 *   topRight: string[],
 *   bottomLeft: string[],
 * }[]
 *
 * @type isLayoutColumn$: BehaviorSubject<boolean>
 * 레이아웃 세로형 여부
 *
 * @type isHide$: BehaviorSubject<boolean>
 * 폴딩 여부
 */
export class ThumbnailList extends BaseElement {
  static template = `
  <ul class="${Selectors.ThumbnailList}"></ul>
  `;

  constructor({ models, isLayoutColumn$, isHide$ }) {
    super({ $element: createElementFromHTML(ThumbnailList.template) });

    this.#initThumbnailItems({ models });

    isLayoutColumn$.subscribe((isLayoutColumn) =>
      this.#handleLayoutChange(isLayoutColumn)
    );

    isHide$.subscribe((isHide) => this.#handleVisibilityChange(isHide));
  }

  // private
  #initThumbnailItems({ models }) {
    const items = models.map((model) => new ThumbnailItem({ model }));
    const $items = items.map((it) => it.getRootElement());

    this.getRootElement().append(...$items);
  }

  // handler
  #handleLayoutChange(isLayoutColumn) {
    const rootClassList = this.getRootElement().classList;

    if (isLayoutColumn) return rootClassList.add(LayoutClassType.Column);

    return rootClassList.remove(LayoutClassType.Column);
  }

  #handleVisibilityChange(isHide) {
    const style = this.getRootElement().style;

    if (isHide) return (style.display = "none");

    return (style.display = "flex");
  }
}
