import { BaseElement } from "../../../../base/base-element.js";
import { ZoomMenu } from "../../../../menus/menu-items/index.js";

export class ToolboxZoomMenu extends BaseElement {
  constructor() {
    super({ $element: document.createElement("div") });

    this.#init();
  }

  #init() {
    const $root = this.getEl();

    const menu = new ZoomMenu();

    $root.appendChild(menu.getEl());
  }
}
