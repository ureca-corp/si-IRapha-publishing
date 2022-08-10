import { createElementFromHTML } from "../../../../../utils/dom/index.js";
import { BaseElement } from "../../../../base/base-element.js";
import { LayoutColumnAttr, Selectors } from "../../../common/index.js";
import { ThumbnailItem } from "./thumbnail-item.js";

const { map, tap, BehaviorSubject } = rxjs;

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
  constructor({
    models,
    isLayoutColumn$ = new BehaviorSubject(false),
    isHide$ = new BehaviorSubject(false),
  }) {
    super({ $element: new ThumbnailListComp() });
    const $root = this.getEl();

    this.#initThumbnailItems({ models });

    isLayoutColumn$.subscribe((isLayoutColumn) =>
      $root.setAttribute(LayoutColumnAttr.Key, isLayoutColumn)
    );

    isHide$
      .pipe(
        map((isHide) => ({ isHide, rootStyle: $root.style })),
        tap(({ isHide, rootStyle }) =>
          isHide ? (rootStyle.display = "none") : (rootStyle.display = "flex")
        )
      )
      .subscribe();
  }

  // private
  #initThumbnailItems({ models }) {
    const $items = models.map((model) => new ThumbnailItem({ model }).getEl());

    this.getEl().append(...$items);
  }
}

function ThumbnailListComp() {
  return createElementFromHTML(`<ul class="${Selectors.ThumbnailList}"></ul>`);
}
