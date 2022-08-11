import { createElementFromHTML } from "../../../utils/dom/index.js";
import { BaseElement } from "../../base/index.js";

const Selectors = {
  Root: "irapha-bottom-sheet__root",
  Inner: "irapha-bottom-sheet__inner",
};

export class BottomSheet extends BaseElement {
  #open$;
  #$children;

  constructor({ $children, open$ }) {
    super({ $element: new BottomSheetComp() });
    this.#open$ = open$;
    this.#$children = $children;

    this.#init();
  }

  #init() {
    this.#initStates();
    this.#initChildren();
  }

  #initStates() {
    const $root = this.getEl();
    const open$ = this.#open$;

    open$.subscribe((open) =>
      open ? $root.setAttribute("open", true) : $root.removeAttribute("open")
    );
  }

  #initChildren() {
    const { $inner } = this.#getElements();
    $inner.appendChild(this.#$children);
  }

  #getElements() {
    const $inner = this.getElementByClassName(Selectors.Inner);

    return {
      $inner,
    };
  }
}

function BottomSheetComp() {
  return createElementFromHTML(`
  <div class="${Selectors.Root}">
    <div class="${Selectors.Inner}"></div>
  </div>
  `);
}
