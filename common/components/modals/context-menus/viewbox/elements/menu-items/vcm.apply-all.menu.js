import { createElementFromHTML } from "../../../../../../utils/dom/index.js";
import { BaseElement } from "../../../../../base/index.js";
import { MenuTemplate } from "./common.js";

export class ViewboxApplyAllMenu extends BaseElement {
  constructor() {
    super({ $element: createElementFromHTML(MenuTemplate) });

    this.#init();
  }

  #init() {
    const $root = this.getEl();

    const $label = createLabel("ApplyAll");
    const $checkbox = createCheckbox();

    $root.appendChild($label);
    $root.appendChild($checkbox);
  }
}

const createLabel = (label) => createElementFromHTML(`<p>${label}</p>`);
const createCheckbox = () =>
  createElementFromHTML(`<input class="uk-checkbox" type="checkbox" />`);
