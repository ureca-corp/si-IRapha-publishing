import { BaseElement } from "../../../../base/base-element.js";
import { AngleMenu } from "../../../../menus/menu-items/index.js";

export class ToolboxAngleMenu extends BaseElement {
  constructor() {
    super({ $element: document.createElement("div") });

    this.#init();
  }

  #init() {
    const $root = this.getEl();

    const menu = new AngleMenu();

    $root.appendChild(menu.getEl());
  }
}
