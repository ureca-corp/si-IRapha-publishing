import { FoldingBar } from "../../../folding-bar/index.js";
import { KinSelector } from "../../../selectors/index.js";
import { ThumbnailList } from "../thumbnail-list/js/thumbnail-list.js";

import { createElementFromHTML } from "../../../../utils/dom/index.js";
import { BaseElement } from "../../../base/base-element.js";
import { PinIcon } from "../../../icons/pin.icon.js";
import { LayoutColumnAttr, Selectors, ShrinkAttr } from "../../common/index.js";

const { BehaviorSubject, tap, map } = rxjs;

export class ThumbnailBox extends BaseElement {
  #model;

  #isLayoutColumn$;

  #isExpanded$ = new BehaviorSubject();
  #isPreview$ = new BehaviorSubject(false);
  #shrinkDirection$ = new BehaviorSubject();

  constructor({ isLayoutColumn$ = new BehaviorSubject(false), model }) {
    super({ $element: new ThumbnailBoxComp() });
    this.#isLayoutColumn$ = isLayoutColumn$;
    this.#model = model;

    this.#initStates();
    this.#initChilds();
  }

  // private
  #initChilds() {
    const { kinModels, thumbnailModels } = this.#model;

    const $pinIcon = new PinIcon({
      states: { isActive$: this.#shrinkDirection$ },
      options: {
        events: {
          onClick: () => this.#toggle(),
        },
        draggable: true,
      },
    }).getEl();

    const $kinSelector = new KinSelector({
      items: kinModels,
      isHide$: this.#shrinkDirection$,
    }).getEl();

    const $thumbnailList = new ThumbnailList({
      models: thumbnailModels,
      isLayoutColumn$: this.#isLayoutColumn$,
      isHide$: this.#isExpanded$,
    }).getEl();

    const $foldingbar = new FoldingBar({
      states: {
        isLayoutColumn$: this.#isLayoutColumn$,
        isExpanded$: this.#isExpanded$,
        isPreview$: this.#isPreview$,
        shrinkDirection$: this.#shrinkDirection$,
      },
      $children: new InnerElement({
        $options: new OptionsElement([$pinIcon, $kinSelector]),
        $thumbnailList: $thumbnailList,
      }),
    }).getEl();

    this.getEl().appendChild($foldingbar);
  }

  #initStates() {
    const $root = this.getEl();

    this.#isLayoutColumn$
      .pipe(
        tap((isLayoutColumn = false) =>
          $root.setAttribute(LayoutColumnAttr.Key, isLayoutColumn)
        )
      )
      .subscribe();

    this.#shrinkDirection$
      .pipe(
        map((shrinkDirection) => shrinkDirection === ShrinkAttr.Vertical),
        tap((isShrinkVertical) =>
          isShrinkVertical
            ? $root.setAttribute(ShrinkAttr.Key, ShrinkAttr.Vertical)
            : $root.removeAttribute(ShrinkAttr.Key)
        )
      )
      .subscribe();
  }

  #toggle() {
    const isNotPreview = !this.#isPreview$.getValue();
    const isExpanded$ = this.#isExpanded$;

    isNotPreview && isExpanded$.next(!isExpanded$.getValue());

    this.#isPreview$.next(isNotPreview);
  }
}

// =================================================================================================
function ThumbnailBoxComp() {
  return createElementFromHTML(`
  <div 
    class="${Selectors.ThumbnailBox}" 
    draggable-root
    priority="2"
  ></div>
  `);
}

function OptionsElement($items) {
  const $optionsWrapper = createElementFromHTML(
    `<div class="${Selectors.ThumbnailOptions}"></div>`
  );

  $optionsWrapper.append(...$items);

  return $optionsWrapper;
}

function InnerElement({ $options, $thumbnailList }) {
  const $div = document.createElement("div");
  $div.append(...[$options, $thumbnailList]);

  return $div;
}
