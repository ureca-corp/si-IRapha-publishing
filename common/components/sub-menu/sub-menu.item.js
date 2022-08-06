import { createElementFromHTML } from "../../utils/dom/index.js";
import { BaseElement } from "../base/index.js";
import { Selectors } from "./selectors.js";

function SubMenuItemComp() {
  return createElementFromHTML(`<li class="${Selectors.SubMenuItem}"></li>`);
}

export class SubMenuItem extends BaseElement {
  constructor({ menuItem }) {
    super({ $element: new SubMenuItemComp() });

    this.getEl().appendChild(menuItem.getEl());
  }
}
