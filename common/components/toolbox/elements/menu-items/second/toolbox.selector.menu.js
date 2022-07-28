import { BaseElement } from "../../../../base/base-element.js";
import { SelectorMenu } from "../../../../menus/menu-items/index.js";

export class ToolboxSelectorMenu extends BaseElement {
  constructor() {
    super({ $element: document.createElement("div") });

    this.#init();
  }

  #init() {
    const $root = this.getRootElement();

    const menu = new SelectorMenu();

    $root.appendChild(menu.getRootElement());
  }
}
