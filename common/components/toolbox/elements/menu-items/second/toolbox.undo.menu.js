import { BaseElement } from "../../../../base/base-element.js";
import { UndoMenu } from "../../../../menus/menu-items/index.js";

export class ToolboxUndoMenu extends BaseElement {
  constructor() {
    super({ $element: document.createElement("div") });

    this.#init();
  }

  #init() {
    const $root = this.getEl();

    const menu = new UndoMenu();

    $root.appendChild(menu.getEl());
  }
}
