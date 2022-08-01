import { createElementFromHTML } from "../../utils/dom/index.js";
import { BaseElement } from "../base/index.js";

const Selectors = {
  VirtualLayout: "irapha-virtual-layout",
  VirtualLayoutItem: "irapha-virtual-layout__item",
};

export class VirtualLayout extends BaseElement {
  static template = `
  <div class="${Selectors.VirtualLayout}"></div>
  `;

  #children;

  constructor({ layout$, children }) {
    super({ $element: createElementFromHTML(VirtualLayout.template) });
    this.#children = children;

    const $item = this.#createItemAndSetChildren({ children });
    this.getEl().appendChild($item);

    layout$.subscribe(({ layout }) => this.#handleLayoutChange(layout));
  }

  #handleLayoutChange(layout) {
    const $root = this.getEl();
    $root.setAttribute("layout", layout);

    this.#resetLayoutChildren();

    const isLayoutNotNormal = layout !== "normal";
    if (isLayoutNotNormal) {
      const cloned = this.#children.clone();
      const $item = this.#createItemAndSetChildren({ children: cloned });

      $root.appendChild($item);
    }
  }

  #resetLayoutChildren() {
    const $root = this.getEl();
    const $items = $root.querySelectorAll(`.${Selectors.VirtualLayoutItem}`);

    if ($items.length > 1) {
      const $firstChild = $root.children[0];
      $root.innerHTML = "";
      $root.appendChild($firstChild);
    }
  }

  #createItemAndSetChildren({ children }) {
    const $item = createVirtualLayoutItem();
    $item.appendChild(children.getEl());

    return $item;
  }
}

// =============================================================
const createVirtualLayoutItem = () => {
  const template = `
    <div class="${Selectors.VirtualLayoutItem}"></div>
    `;

  return createElementFromHTML(template);
};
