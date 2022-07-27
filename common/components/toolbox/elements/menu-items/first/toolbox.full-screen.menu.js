import { BaseElement } from "../../../../base/base-element.js";
import { FullScreenMenu } from "../../../../menus/menu-items/index.js";

export class ToolboxFullScreenMenu extends BaseElement {
  constructor() {
    super({ $element: document.createElement("div") });

    this.#init();
  }

  #init() {
    const $root = this.getRootElement();

    const menu = new FullScreenMenu();

    $root.appendChild(menu.getRootElement());
  }
}
