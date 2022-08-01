import { BaseElement } from "../../../../base/base-element.js";
import { RotateLeftMenu } from "../../../../menus/menu-items/index.js";

export class ToolboxRotateLeftMenu extends BaseElement {
  constructor() {
    super({ $element: document.createElement("div") });

    this.#init();
  }

  #init() {
    const $root = this.getEl();

    const menu = new RotateLeftMenu();

    $root.appendChild(menu.getEl());
  }
}
