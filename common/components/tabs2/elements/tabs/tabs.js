import { TabItem } from "../tabs-item/tabs-item.js";
import { Selectors } from "../../common/index.js";
import { BaseElement } from "../../../base/base-element.js";
import { createElementFromHTML } from "../../../../utils/dom/index.js";

const rx = rxjs;

/**
 * Constructor types
 *
 * @type data: {
 *   id: string,
 *   title: string,
 *   topDesc: string,
 *   bottomDesc: string
 * }[]
 *
 */
export class Tabs extends BaseElement {
  static template = `
  <div class="${Selectors.Tabs}">
    <ul class="${Selectors.TabsList}"></ul>
  </div>
  `;

  #selectedTabIndex$ = new rx.BehaviorSubject(0);

  constructor({ $items }) {
    super({
      $element: createElementFromHTML(Tabs.template),
    });

    this.#initTabItems({ $items });
  }

  #initTabItems({ $items }) {
    const tabItems = $items.map(($el, index) => {
      const isActive$ = new rx.BehaviorSubject(false);
      this.#selectedTabIndex$.subscribe((tabIndex) =>
        isActive$.next(tabIndex === index)
      );

      return new TabItem({
        $children: $el,
        isActive$,
        onClick: () => this.#selectedTabIndex$.next(index),
      });
    });

    this.#getTabsList().append(...tabItems.map((it) => it.getEl()));
  }

  // Elements
  #getTabsList() {
    return this.getElementByClassName(Selectors.TabsList);
  }
}
