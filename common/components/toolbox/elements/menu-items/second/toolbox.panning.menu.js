import { BaseElement } from "../../../../base/base-element.js";
import { PanningMenu } from "../../../../menus/menu-items/index.js";

export class ToolboxPanningMenu extends BaseElement {
  constructor() {
    super({ $element: document.createElement("div") });

    this.#init();
  }

  #init() {
    const $root = this.getEl();

    const menu = new PanningMenu();

    $root.appendChild(menu.getEl());
  }
}
