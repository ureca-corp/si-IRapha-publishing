import { createElementFromHTML } from "../../utils/dom/index.js";
import { BaseElement } from "../base/index.js";

const Selectors = {
  Root: "irapha-sub-menu",
  Container: "irapha-sub-menu__container",
  ContainerInner: "irapha-sub-menu__container__inner",
};

export const Template = `
<div class="${Selectors.Root}">
  <div class="${Selectors.Container}">
    <ul class="${Selectors.ContainerInner}"></ul>
  </div>
</div>
`;

export class SubMenu extends BaseElement {
  #options;

  constructor({ subMenuItems, options }) {
    super({ $element: createElementFromHTML(Template) });
    this.#options = options;

    this.#initOptions();

    this.#getContainerInnerElement().append(
      ...subMenuItems.map((it) => it.getEl())
    );
  }

  #initOptions() {
    if (!this.#options) return;

    const { padding, isLayoutColumnTwo } = this.#options;

    const $root = this.getEl();
    const $inner = this.#getContainerInnerElement();

    if (padding != undefined) $inner.style.padding = padding;
    if (isLayoutColumnTwo) $root.classList.add("--layout-column-two");
  }

  #getContainerInnerElement() {
    return this.getElementByClassName(Selectors.ContainerInner);
  }
}
