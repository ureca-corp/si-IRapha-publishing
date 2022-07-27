import { BaseElement } from "../../../../base/base-element.js";
import { ReportMenu } from "../../../../menus/menu-items/index.js";

export class ToolboxReportMenu extends BaseElement {
  constructor() {
    super({ $element: document.createElement("div") });

    this.#init();
  }

  #init() {
    const $root = this.getRootElement();

    const menu = new ReportMenu();

    $root.appendChild(menu.getRootElement());
  }
}
