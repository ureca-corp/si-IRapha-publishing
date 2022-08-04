import { createElementFromHTML } from "../../../../../utils/dom/index.js";
import { BaseElement } from "../../../../base/index.js";
import { MenuTemplate } from "./common.js";

export class ViewboxSelectMenu extends BaseElement {
  constructor() {
    super({ $element: createElementFromHTML(MenuTemplate) });

    this.#init();
  }

  #init() {
    const $root = this.getEl();

    const $label = createLabel("Select");

    $root.appendChild($label);
  }
}

const createLabel = (label) => createElementFromHTML(`<p>${label}</p>`);
