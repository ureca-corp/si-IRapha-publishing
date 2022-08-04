import { createElementFromHTML } from "../../../utils/dom/index.js";
import { BaseElement } from "../../base/index.js";

const Selectors = {
  KinSelector: "irapha-kin-selector",

  UkSelect: "uk-select",
};

/**
 * Constructor types
 *
 * @type items: string[]
 *
 * @type isHide$: BehaviorSubject<boolean>
 */
export class KinSelector extends BaseElement {
  static template = `
  <select class="${Selectors.KinSelector} ${Selectors.UkSelect}" title="KIN selector"></select>
  `;

  constructor({ items, isHide$ }) {
    super({ $element: createElementFromHTML(KinSelector.template) });

    const options = items.map((it) => createSelectorItem(it));

    this.getEl().append(...options);

    isHide$.subscribe((isHide) => this.#handleDisplayChange(isHide));
  }

  #handleDisplayChange(isHide) {
    const style = this.getEl().style;

    if (!!isHide) return (style.display = "none");
    return (style.display = "unset");
  }
}

// =================================================================
const createSelectorItem = (children) => {
  const $option = document.createElement("option");
  $option.innerHTML = children;

  return $option;
};
