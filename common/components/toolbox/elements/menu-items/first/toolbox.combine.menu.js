import { BaseElement } from "../../../../base/base-element.js";
import { CombineMenu } from "../../../../menus/menu-items/index.js";

export class ToolboxCombineMenu extends BaseElement {
  constructor() {
    super({ $element: document.createElement("div") });

    this.#init();
  }

  #init() {
    const $root = this.getRootElement();

    const menu = new CombineMenu();

    $root.appendChild(menu.getRootElement());
  }
}
