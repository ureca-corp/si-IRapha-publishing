import { createElementFromHTML } from "../../utils/dom/index.js";
import { BaseElement } from "../base/index.js";
import { Selectors } from "./selectors.js";

function SubMenuComp() {
  return createElementFromHTML(`
  <div class="${Selectors.Root}">
    <div class="${Selectors.Container}">
      <ul class="${Selectors.ContainerInner}"></ul>
    </div>
  </div>
  `);
}

export class SubMenu extends BaseElement {
  #options;

  constructor({ subMenuItems, options }) {
    super({ $element: new SubMenuComp() });
    this.#options = options;

    this.#initOptions();

    this.#getContainerInnerEl().append(...subMenuItems.map((it) => it.getEl()));
  }

  #initOptions() {
    if (!this.#options) return;

    const { padding, isLayoutColumnTwo, modal } = this.#options;

    const $root = this.getEl();
    const $inner = this.#getContainerInnerEl();

    if (padding != undefined) $inner.style.padding = padding;
    if (isLayoutColumnTwo) $root.setAttribute("layout", "column-two");
    if (modal) UIkit.drop($root, { offset: 0 });
  }

  #getContainerInnerEl() {
    return this.getElementByClassName(Selectors.ContainerInner);
  }
}
