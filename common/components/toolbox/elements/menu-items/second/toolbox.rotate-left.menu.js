import { BaseElement } from "../../../../base/base-element.js";
import { RotateLeftMenu } from "../../../../menus/menu-items/index.js";

export class ToolboxRotateLeftMenu extends BaseElement {
  constructor() {
    super({ $element: document.createElement("div") });

    this.#init();
  }

  #init() {
    const $root = this.getRootElement();

    const menu = new RotateLeftMenu();

    $root.appendChild(menu.getRootElement());
  }
}
