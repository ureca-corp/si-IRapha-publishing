import { TabItem } from "../tabs-item/tabs-item.js";
import { Selectors } from "../../common/index.js";

const rx = rxjs;

export class Tabs {
  #$root;

  #selectedTabIndex$ = new rx.BehaviorSubject(0);

  constructor({ $element }) {
    this.#$root = $element;

    this.#initTabItems();
  }

  #initTabItems() {
    [...this.#$root.querySelectorAll(`.${Selectors.TabItem}`)].map(
      ($element, index) => {
        const isActive$ = new rx.BehaviorSubject(false);
        this.#selectedTabIndex$.subscribe((tabIndex) =>
          isActive$.next(tabIndex === index)
        );

        return new TabItem({
          $element,
          isActive$,
          onClick: () => this.#selectedTabIndex$.next(index),
        });
      }
    );
  }
}
