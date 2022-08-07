import { createElementFromHTML } from "../../utils/dom/index.js";
import { BaseElement } from "../base/index.js";

const { of, tap, map, filter } = rxjs;

const Selectors = {
  VirtualLayout: "irapha-virtual-layout",
  VirtualLayoutItem: "irapha-virtual-layout__item",
};

export class VirtualLayout extends BaseElement {
  #children;

  constructor({ layout$, children }) {
    super({ $element: new VirtualLayoutComp() });
    this.#children = children;

    this.#init();
    layout$.subscribe(({ layout }) => this.#handleLayoutChange(layout));
  }

  #init() {
    const $root = this.getEl();
    const $children = new VirtualLayoutItem(this.#children.getEl());

    $root.appendChild($children);
  }

  #handleLayoutChange(layout) {
    const $root = this.getEl();

    of(layout)
      .pipe(
        tap((layout) => $root.setAttribute("layout", layout)),
        tap(() => this.#resetLayoutChildren()),
        map((layout) => layout !== "normal")
      )
      .subscribe((isLayoutNotNormal) => {
        if (isLayoutNotNormal) {
          const $cloned = this.#children.clone().getEl();
          const $item = new VirtualLayoutItem($cloned);

          $root.appendChild($item);
        }
      });
  }

  #resetLayoutChildren() {
    const $root = this.getEl();
    const $items = this.getElementsByClassName(Selectors.VirtualLayoutItem);

    of($items)
      .pipe(
        filter(($items) => $items.length > 1),
        map(() => $root.children[0]),
        tap(() => ($root.innerHTML = "")),
        tap(($firstChild) => $root.appendChild($firstChild))
      )
      .subscribe();
  }
}

// =============================================================
function VirtualLayoutComp() {
  return createElementFromHTML(
    `<div class="${Selectors.VirtualLayout}"></div>`
  );
}

function VirtualLayoutItem($children) {
  const $virutalLayoutItem = createElementFromHTML(
    `<div class="${Selectors.VirtualLayoutItem}"></div>`
  );

  $virutalLayoutItem.appendChild($children);

  return $virutalLayoutItem;
}
