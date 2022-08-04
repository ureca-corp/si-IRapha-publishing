import { createElementFromHTML } from "../../../../../utils/dom/index.js";
import { BaseElement } from "../../../../base/index.js";
import { MenuTemplate } from "./common.js";

export class ViewboxUndoMenu extends BaseElement {
  constructor() {
    super({ $element: createElementFromHTML(MenuTemplate) });

    this.#init();
  }

  #init() {
    const $root = this.getEl();

    const $label = createLabel("Undo");

    $root.appendChild($label);
  }
}

const createLabel = (label) => createElementFromHTML(`<p>${label}</p>`);
