import { BaseElement } from "../../../../base/base-element.js";
import { ReviseMenu } from "../../../../menus/menu-items/index.js";

export class ToolboxReviseMenu extends BaseElement {
  constructor() {
    super({ $element: document.createElement("div") });

    this.#init();
  }

  #init() {
    const $root = this.getRootElement();

    const menu = new ReviseMenu();

    $root.appendChild(menu.getRootElement());
  }
}
