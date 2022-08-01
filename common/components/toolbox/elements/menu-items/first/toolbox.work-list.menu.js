import { BaseElement } from "../../../../base/base-element.js";
import { WorkListMenu } from "../../../../menus/menu-items/index.js";

export class ToolboxWorkListMenu extends BaseElement {
  constructor() {
    super({ $element: document.createElement("div") });

    this.#init();
  }

  #init() {
    const $root = this.getEl();

    const worklistMenu = new WorkListMenu();

    $root.appendChild(worklistMenu.getEl());
  }
}
