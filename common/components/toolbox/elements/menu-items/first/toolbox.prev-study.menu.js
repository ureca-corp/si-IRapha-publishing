import { BaseElement } from "../../../../base/base-element.js";
import { PrevStudyMenu } from "../../../../menus/menu-items/index.js";

export class ToolboxPrevStudyMenu extends BaseElement {
  constructor() {
    super({ $element: document.createElement("div") });

    this.#init();
  }

  #init() {
    const $root = this.getRootElement();

    const menu = new PrevStudyMenu();

    $root.appendChild(menu.getRootElement());
  }
}
