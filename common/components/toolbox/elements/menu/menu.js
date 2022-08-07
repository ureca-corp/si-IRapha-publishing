import { createElementFromHTML } from "../../../../utils/dom/index.js";
import { BaseElement } from "../../../base/base-element.js";
import { LayoutAttr, NameHideAttr, Selectors } from "../../common/index.js";

const { tap } = rxjs;

/**
 * Constructor types
 *
 * @type $element: Element
 *
 * @type isLayoutColumnTwo$: BehaviorSubject<boolean>
 * 레이아웃 모드 2열 배치
 *
 * @type isHideIconName$: BehaviorSubject<boolean>
 */
export class ToolboxMenu extends BaseElement {
  #states;
  #items;

  constructor({ states, items }) {
    super({ $element: new ToolboxMenuComp() });
    this.#states = states;
    this.#items = items;

    this.#init();
  }

  // private
  #init() {
    this.#initStates();
    this.#initItems();
  }

  #initStates() {
    if (!this.#states) return;

    const $root = this.getEl();
    const { isLayoutColumnTwo$, isHideIconName$ } = this.#states;

    isLayoutColumnTwo$
      ?.pipe(
        tap((isLayoutColumnTwo) =>
          isLayoutColumnTwo
            ? $root.setAttribute(LayoutAttr.Key, LayoutAttr.ColumnTwo)
            : $root.removeAttribute(LayoutAttr.Key)
        )
      )
      .subscribe();

    isHideIconName$
      ?.pipe(
        tap((isHideIconName = false) =>
          $root.setAttribute(NameHideAttr.Key, isHideIconName)
        )
      )
      .subscribe();
  }

  #initItems() {
    if (!this.#items) return;

    const $items = this.#items.map((it) => createLI(it.getEl()));
    this.getEl().append(...$items);
  }
}

// =================================================================
function ToolboxMenuComp() {
  return createElementFromHTML(`<ul class="${Selectors.Menu}"></ul>`);
}

const createLI = (children) => {
  const $li = document.createElement("li");
  $li.appendChild(children);

  return $li;
};
