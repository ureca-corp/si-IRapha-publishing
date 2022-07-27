import { createElementFromHTML } from "../../utils/dom/index.js";
import { BaseElement } from "../base/index.js";

const Template = `
<li class="irapha-sub-menu__item"></li>
`;

export class SubMenuItem extends BaseElement {
  constructor({ menuItem }) {
    super({ $element: createElementFromHTML(Template) });

    this.getRootElement().appendChild(menuItem.getRootElement());
  }
}
