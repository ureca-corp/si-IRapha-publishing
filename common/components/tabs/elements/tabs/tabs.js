import { TabItem } from "../tabs-item/tabs-item.js";

const rx = rxjs;

const Selectors = {
  TabItem: "irapha-tabs__list__item",
};

export class Tabs {
  #root;

  #selectedTabIndex$;

  constructor({ element }) {
    this.#root = element;

    this.#selectedTabIndex$ = new rx.BehaviorSubject(0);

    this.#initTabItems();
  }

  #initTabItems() {
    [...this.#root.querySelectorAll(`.${Selectors.TabItem}`)].map(
      (element, index) => {
        const isActive$ = new rx.BehaviorSubject(false);
        this.#selectedTabIndex$.subscribe((tabIndex) =>
          isActive$.next(tabIndex === index)
        );

        return new TabItem({
          element,
          isActive$,
          onClick: () => this.#selectedTabIndex$.next(index),
        });
      }
    );
  }
}
