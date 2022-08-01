import { BaseElement } from "../../../../base/base-element.js";
import { KeyImageNoteMenu } from "../../../../menus/menu-items/index.js";

export class ToolboxKeyImageNoteMenu extends BaseElement {
  constructor() {
    super({ $element: document.createElement("div") });

    this.#init();
  }

  #init() {
    const $root = this.getEl();

    const menu = new KeyImageNoteMenu();

    $root.appendChild(menu.getEl());
  }
}
