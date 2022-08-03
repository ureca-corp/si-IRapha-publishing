import { createElementFromHTML } from "../../../../utils/dom/index.js";
import { BaseElement } from "../../../base/index.js";

const Selectors = {
  Root: "irapha-cid-window__tab-inner",
  Title: "irapha-cid-window__tab-inner__title",
  Desc: "irapha-cid-window__tab-inner__desc",
};

const Template = `
<div class="${Selectors.Root}">
  <div class="${Selectors.Title}"></div>
  <div class="${Selectors.Desc}"></div>
</div>
`;

/**
 * Constructor types
 *
 * @type model: { title: string, desc: string }
 */
export class TabInner extends BaseElement {
  #$title = this.getElementByClassName(Selectors.Title);
  #$desc = this.getElementByClassName(Selectors.Desc);

  #model;

  constructor(model) {
    super({ $element: createElementFromHTML(Template) });
    this.#model = model;

    this.#init();
  }

  #init() {
    this.#initData();
  }

  #initData() {
    if (!this.#model) return;

    const { title, desc } = this.#model;
    this.#$title.innerHTML = title;
    this.#$desc.innerHTML = desc;
  }
}
