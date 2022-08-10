import { createElementFromHTML } from "../../../utils/dom/index.js";
import { BaseElement } from "../../base/index.js";

const Selectors = {
  Root: "irapha-custom-table",
  Head: "irapha-custom-table__head",
  Body: "irapha-custom-table__body",
};

export class CustomTable extends BaseElement {
  constructor({ $theadChildren, $tbodyChildren }) {
    super({ $element: new CustomTableComp() });

    const { $head, $body } = this.#getElements();
    $head.appendChild($theadChildren);
    $body.appendChild($tbodyChildren);
  }

  #getElements() {
    const $head = this.getElementByClassName(Selectors.Head);
    const $body = this.getElementByClassName(Selectors.Body);

    return {
      $head,
      $body,
    };
  }
}

function CustomTableComp() {
  return createElementFromHTML(`
  <div class="${Selectors.Root}">
    <div class="${Selectors.Head}"></div>
    <div class="${Selectors.Body}"></div>
  </div>
  `);
}

export function Tr($items) {
  const $tr = createElementFromHTML(
    `<div class="irapha-custom-table__tr"></div>`
  );

  $tr.append(...$items);

  return $tr;
}

export function Th(text) {
  return createElementFromHTML(
    `<div class="irapha-custom-table__th">${text}</div>`
  );
}

export function Td(text) {
  return createElementFromHTML(
    `<div class="irapha-custom-table__td">${text}</div>`
  );
}
