import { BaseElement } from "../../../base/index.js";
import { createElementFromHTML } from "../../../../utils/dom/index.js";

const { of, filter, tap } = rxjs;

const Selectors = {
  Root: "irapha-menu-item",
  Icon: "irapha-menu-item__icon",
  Name: "irapha-menu-item__name",
};

function BaseMenuItemComp() {
  return createElementFromHTML(`<dl class="${Selectors.Root}"></dl>`);
}

export class BaseMenuItem extends BaseElement {
  #data;
  #options;

  constructor({ data, options }) {
    super({ $element: new BaseMenuItemComp() });

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

    title &&
      $root.setAttribute(
        "uk-tooltip",
        `title: ${title}; pos: right; offset: 0`
      );

    icon && $root.appendChild(createIconElement(icon));
    name && $root.appendChild(createNameElement(name));
    subMenu && $root.appendChild(subMenu.getEl());
  }

  #initOptions() {
    if (!this.#options) return;

    const {
      outlined = false,
      more = false,
      horizontal = false,
      hidableName = true,
    } = this.#options;

    const $root = this.getEl();
    const $icon = this.#getIconElement();

    of($icon)
      .pipe(
        filter(($icon) => !!$icon),
        tap(($icon) => $icon.setAttribute("outlined", outlined)),
        tap(($icon) => $icon.setAttribute("more", more))
      )
      .subscribe();

    of($root)
      .pipe(
        tap(($root) => $root.setAttribute("layout-horizontal", horizontal)),
        tap(($root) => $root.setAttribute("hidable-name", hidableName))
      )
      .subscribe();
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
