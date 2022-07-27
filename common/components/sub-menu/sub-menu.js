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
  constructor({ subMenuItems }) {
    super({ $element: createElementFromHTML(Template) });

    this.#getContainerInnerElement().append(
      ...subMenuItems.map((it) => it.getRootElement())
    );
  }

  #getContainerInnerElement() {
    return this.getElementByClassName(Selectors.ContainerInner);
  }
}
