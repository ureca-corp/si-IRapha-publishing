import { BaseElement } from "../../../../base/base-element.js";
import { ApplyAllMenu } from "../../../../menus/menu-items/index.js";

export class ToolboxApplyAllMenu extends BaseElement {
  constructor() {
    super({ $element: document.createElement("div") });

    this.#init();
  }

  #init() {
    const $root = this.getEl();

    const menu = new ApplyAllMenu();

    $root.appendChild(menu.getEl());
  }
}
