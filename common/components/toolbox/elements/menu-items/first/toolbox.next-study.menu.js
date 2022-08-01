import { BaseElement } from "../../../../base/base-element.js";
import { NextStudyMenu } from "../../../../menus/menu-items/index.js";

export class ToolboxNextStudyMenu extends BaseElement {
  constructor() {
    super({ $element: document.createElement("div") });

    this.#init();
  }

  #init() {
    const $root = this.getEl();

    const menu = new NextStudyMenu();

    $root.appendChild(menu.getEl());
  }
}
