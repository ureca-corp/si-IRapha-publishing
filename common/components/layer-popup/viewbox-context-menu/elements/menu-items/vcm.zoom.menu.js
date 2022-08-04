import { createElementFromHTML } from "../../../../../utils/dom/index.js";
import { BaseElement } from "../../../../base/index.js";
import { MenuTemplate } from "./common.js";

export class ViewboxZoomMenu extends BaseElement {
  constructor() {
    super({ $element: createElementFromHTML(MenuTemplate) });

    this.#init();
  }

  #init() {
    const $root = this.getEl();

    const $label = createLabel("Zoom (%)");
    const $input = createInput();

    $root.append(...[$label, $input]);
  }
}

const createLabel = (label) => createElementFromHTML(`<p>${label}</p>`);
const createInput = () => {
  const template = `
  <input type="number" class="irapha-viewbox-cm__menu-zoom"/>
  `;

  const $input = createElementFromHTML(template);

  return $input;
};
