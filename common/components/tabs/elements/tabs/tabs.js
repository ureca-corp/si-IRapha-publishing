import { TabItem } from "../tabs-item/tabs-item.js";
import { Selectors } from "../../common/index.js";
import { BaseElement } from "../../../base/base-element.js";
import { createElementFromHTML } from "../../../../utils/dom/index.js";

const { BehaviorSubject, of, map, tap } = rxjs;

function TabsComp() {
  return createElementFromHTML(`
  <div class="${Selectors.Tabs}">
    <ul class="${Selectors.TabsList}"></ul>
  </div>
  `);
}

export class Tabs extends BaseElement {
  constructor({ $items }) {
    super({ $element: new TabsComp() });

    this.#initTabItems({ $items });
  }

  #initTabItems({ $items }) {
    const $tabsList = this.#getTabsList();

    const selectedTabIndex$ = new BehaviorSubject(0);
    const setTabIndex = (index) => selectedTabIndex$.next(index);

    of(...$items)
      .pipe(
        map(($el, index) => ({
          $el,
          isActive$: new BehaviorSubject(false),
          onClick: () => setTabIndex(index),
          index,
        })),
        tap(({ isActive$, index }) =>
          selectedTabIndex$.subscribe((tabIndex) =>
            isActive$.next(tabIndex === index)
          )
        ),
        map(({ $el: $children, isActive$, onClick }) =>
          new TabItem({ $children, isActive$, onClick }).getEl()
        )
      )
      .subscribe(($tabItem) => $tabsList.appendChild($tabItem));
  }

  // Elements
  #getTabsList() {
    return this.getElementByClassName(Selectors.TabsList);
  }
}
