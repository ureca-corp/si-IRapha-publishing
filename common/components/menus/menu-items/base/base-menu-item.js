import { BaseElement } from "../../../base/index.js";
import { createElementFromHTML } from "../../../../utils/dom/index.js";

const Selectors = {
  Root: "irapha-menu-item",
  Icon: "irapha-menu-item__icon",
  Name: "irapha-menu-item__name",
};

const Template = `
<dl class="${Selectors.Root}"></dl>
`;

export class BaseMenuItem extends BaseElement {
  #data;
  #options;

  constructor({ data, options }) {
    super({ $element: createElementFromHTML(Template) });

    this.#data = data;
    this.#options = options;

    this.#init();
  }

  // private
  #init() {
    this.#initData();
    this.#initOptions();
  }

  #initData() {
    const $root = this.getEl();

    const { title, name, icon, subMenu } = this.#data;

    $root.setAttribute("title", title);

    icon && $root.appendChild(createIconElement(icon));
    name && $root.appendChild(createNameElement(name));
    subMenu && $root.appendChild(subMenu.getEl());
  }

  #initOptions() {
    if (!this.#options) return;

    const { outlined, more, horizontal, hidableName = true } = this.#options;

    const $root = this.getEl();
    const $icon = this.#getIconElement();

    if (outlined) $icon.classList.add("--oulined");
    if (more) $icon.classList.add("--more");
    if (horizontal) $root.classList.add("--horizontal");

    $root.setAttribute("hidable-name", hidableName);
  }

  #getIconElement() {
    return this.getElementByClassName(Selectors.Icon);
  }
}

//
const createNameElement = (name) => {
  const template = `<dd class="${Selectors.Name}">${name}</dd>`;
  return createElementFromHTML(template);
};

const createIconElement = (icon) => {
  const template = `<dt class="${Selectors.Icon}">${icon}</dt>`;
  return createElementFromHTML(template);
};
