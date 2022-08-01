import { BaseElement } from "../../../../base/base-element.js";
import { RotateRightMenu } from "../../../../menus/menu-items/index.js";

export class ToolboxRotateRightMenu extends BaseElement {
  constructor() {
    super({ $element: document.createElement("div") });

    this.#init();
  }

  #init() {
    const $root = this.getEl();

    const menu = new RotateRightMenu();

    $root.appendChild(menu.getEl());
  }
}
