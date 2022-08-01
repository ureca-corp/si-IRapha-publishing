import { BaseElement } from "../../../../base/base-element.js";
import { ReviseMenu } from "../../../../menus/menu-items/index.js";

export class ToolboxReviseMenu extends BaseElement {
  constructor() {
    super({ $element: document.createElement("div") });

    this.#init();
  }

  #init() {
    const $root = this.getEl();

    const menu = new ReviseMenu();

    $root.appendChild(menu.getEl());
  }
}
