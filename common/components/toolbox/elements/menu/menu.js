import { createElementFromHTML } from "../../../../utils/dom/CreateElementFromHTML.js";
import { BaseElement } from "../../../base/base-element.js";
import { HideClassType, LayoutClassType } from "../../common/index.js";

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

const Template = `
<ul class="irapha-toolbox__menu"></ul>
`;

export class ToolboxMenu extends BaseElement {
  #states;
  #items;

  constructor({ states, items }) {
    super({ $element: createElementFromHTML(Template) });
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

    const { isLayoutColumnTwo$, isHideIconName$ } = this.#states;

    isLayoutColumnTwo$?.subscribe((isLayoutColumnTwo) =>
      this.#handleLayoutChange(isLayoutColumnTwo)
    );

    isHideIconName$?.subscribe((isHideIconName) =>
      this.#handleHideIconNameChange(isHideIconName)
    );
  }

  #initItems() {
    if (!this.#items) return;

    const $items = this.#items.map((it) => it.getRootElement());
    this.getRootElement().append(...$items);
  }

  // handler
  #handleLayoutChange(isLayoutColumnTwo) {
    const rootClassList = this.getRootElement().classList;

    if (isLayoutColumnTwo) return rootClassList.add(LayoutClassType.ColumnTwo);
    return rootClassList.remove(LayoutClassType.ColumnTwo);
  }

  #handleHideIconNameChange(isHideIconName) {
    const rootClassList = this.getRootElement().classList;

    if (isHideIconName) return rootClassList.add(HideClassType.HideIconName);
    return rootClassList.remove(HideClassType.HideIconName);
  }
}
