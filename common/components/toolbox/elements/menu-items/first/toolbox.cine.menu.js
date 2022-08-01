import { BaseElement } from "../../../../base/base-element.js";
import { CineMenu } from "../../../../menus/menu-items/index.js";

export class ToolboxCineMenu extends BaseElement {
  constructor() {
    super({ $element: document.createElement("div") });

    this.#init();
  }

  #init() {
    const $root = this.getEl();

    const menu = new CineMenu();

    $root.appendChild(menu.getEl());
  }
}
