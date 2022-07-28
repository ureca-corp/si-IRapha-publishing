import { FoldingBar } from "../../../folding-bar/index.js";
import { KinSelector } from "../../../selectors/index.js";
import { ThumbnailList } from "../thumbnail-list/js/thumbnail-list.js";

import { createElementFromHTML } from "../../../../utils/dom/CreateElementFromHTML.js";
import { BaseElement } from "../../../base/base-element.js";
import { PinIcon2 } from "../../../icons/pin.icon.js";
import { LayoutClassType, Selectors, ShrinkType } from "../../common/index.js";

const rx = rxjs;

const Template = `
<div class="${Selectors.ThumbnailBox}" draggable="true" priority="2"></div>
`;

export class ThumbnailBox extends BaseElement {
  #model;

  #isLayoutColumn$;

  #isExpanded$ = new rx.BehaviorSubject();
  #isPreview$ = new rx.BehaviorSubject(false);
  #shrinkDirection$ = new rx.BehaviorSubject();

  constructor({ isLayoutColumn$, model }) {
    super({ $element: createElementFromHTML(Template) });
    this.#isLayoutColumn$ = isLayoutColumn$;
    this.#model = model;

    this.#initStates();
    this.#initChilds();

    this.#isLayoutColumn$.next(true);
  }

  // private
  #initChilds() {
    const { kinModels, thumbnailModels } = this.#model;

    const pinIcon = new PinIcon2({
      options: {
        events: {
          onClick: () => this.#toggle(),
        },
      },
    });

    const kinSelector = new KinSelector({
      items: kinModels,
      isHide$: this.#shrinkDirection$,
    });

    const thumbnailList = new ThumbnailList({
      models: thumbnailModels,
      isLayoutColumn$: this.#isLayoutColumn$,
      isHide$: this.#isExpanded$,
    });

    const foldingbar = new FoldingBar({
      states: {
        isLayoutColumn$: this.#isLayoutColumn$,
        isExpanded$: this.#isExpanded$,
        isPreview$: this.#isPreview$,
        shrinkDirection$: this.#shrinkDirection$,
      },
      $children: createInnerElement({
        $options: createOptionsElement([pinIcon, kinSelector]),
        $thumbnailList: thumbnailList.getRootElement(),
      }),
    });

    this.getRootElement().appendChild(foldingbar.getRootElement());
  }

  #initStates() {
    this.#isLayoutColumn$.subscribe((isLayoutColumn) =>
      this.#handleLayoutChange(isLayoutColumn)
    );

    this.#shrinkDirection$.subscribe((shrinkDirection) =>
      this.#handleShrinkDirectionChange(shrinkDirection)
    );
  }

  // handler
  #handleLayoutChange(isLayoutColumn) {
    const rootClassList = this.getRootElement().classList;

    isLayoutColumn
      ? rootClassList.add(LayoutClassType.Column)
      : rootClassList.remove(LayoutClassType.Column);
  }

  #handleShrinkDirectionChange(shrinkDirection) {
    const { Vertical } = ShrinkType;
    const $root = this.getRootElement();

    shrinkDirection === Vertical.value
      ? $root.classList.add(Vertical.className)
      : $root.classList.remove(Vertical.className);
  }

  #toggle() {
    const isNotPreview = !this.#isPreview$.getValue();
    const isExpanded$ = this.#isExpanded$;

    isNotPreview && isExpanded$.next(!isExpanded$.getValue());

    this.#isPreview$.next(isNotPreview);
  }
}

// =================================================================================================
const createOptionsElement = (items) => {
  const template = `
  <div class="${Selectors.ThumbnailOptions}"></div>
  `;
  const $template = createElementFromHTML(template);

  $template.append(...items.map((it) => it.getRootElement()));

  return $template;
};

const createInnerElement = ({ $options, $thumbnailList }) => {
  const $div = document.createElement("div");
  $div.append(...[$options, $thumbnailList]);

  return $div;
};
