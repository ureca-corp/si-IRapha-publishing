import { BaseElement } from "../../../../base/base-element.js";
import { FitMenu } from "../../../../menus/menu-items/index.js";

export class ToolboxFitMenu extends BaseElement {
  constructor() {
    super({ $element: document.createElement("div") });

    this.#init();
  }

  #init() {
    const $root = this.getRootElement();

    const menu = new FitMenu();

    $root.appendChild(menu.getRootElement());
  }
}
