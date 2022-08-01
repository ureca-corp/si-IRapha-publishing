import { BaseElement } from "../../../../base/base-element.js";
import { LengthMenu } from "../../../../menus/menu-items/index.js";

export class ToolboxLengthMenu extends BaseElement {
  constructor() {
    super({ $element: document.createElement("div") });

    this.#init();
  }

  #init() {
    const $root = this.getEl();

    const menu = new LengthMenu();

    $root.appendChild(menu.getEl());
  }
}
