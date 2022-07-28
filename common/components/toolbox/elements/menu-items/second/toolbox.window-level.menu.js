import { BaseElement } from "../../../../base/base-element.js";
import { WindowLevelMenu } from "../../../../menus/menu-items/index.js";

export class ToolboxWindowLevelMenu extends BaseElement {
  constructor() {
    super({ $element: document.createElement("div") });

    this.#init();
  }

  #init() {
    const $root = this.getRootElement();

    const menu = new WindowLevelMenu();

    $root.appendChild(menu.getRootElement());
  }
}
