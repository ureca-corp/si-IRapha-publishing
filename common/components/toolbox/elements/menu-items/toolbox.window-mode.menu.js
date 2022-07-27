import { BaseElement } from "../../../base/base-element.js";
import { WindowModeMenu } from "../../../menus/menu-items/index.js";

export class ToolboxWindowModeMenu extends BaseElement {
  constructor() {
    super({ $element: document.createElement("div") });

    this.#init();
  }

  #init() {
    const $root = this.getRootElement();

    const menu = new WindowModeMenu();

    $root.appendChild(menu.getRootElement());
  }
}
