import { BaseElement } from "../../../../base/base-element.js";
import { RefreshMenu } from "../../../../menus/menu-items/index.js";

export class ToolboxRefreshMenu extends BaseElement {
  constructor() {
    super({ $element: document.createElement("div") });

    this.#init();
  }

  #init() {
    const $root = this.getRootElement();

    const menu = new RefreshMenu();

    $root.appendChild(menu.getRootElement());
  }
}
