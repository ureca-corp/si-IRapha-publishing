import { BaseElement } from "../../../base/index.js";
import { createElementFromHTML } from "../../../../utils/dom/index.js";

const Selectors = {
  Root: "irapha-menu-item",
  Icon: "irapha-menu-item__icon",
  Name: "irapha-menu-item__name",
};

const Template = `
<dl class="${Selectors.Root}">
  <dt class="${Selectors.Icon}"></dt>
  <dd class="${Selectors.Name}"></dd>
</dl>
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
    const $root = this.getRootElement();
    const $name = this.#getNameElement();
    const $icon = this.#getIconElement();

    const { title, name, icon, subMenu } = this.#data;

    $root.setAttribute("title", title);
    $name.innerHTML = name;
    $icon.innerHTML = icon;

    if (subMenu) $root.appendChild(subMenu.getRootElement());
  }

  #getNameElement() {
    return this.getElementByClassName(Selectors.Name);
  }

  #initOptions() {
    if (!this.#options) return;

    const { outlined, more, horizontal, hidableName = true } = this.#options;

    const $root = this.getRootElement();
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
