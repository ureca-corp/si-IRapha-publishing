import { createElementFromHTML } from "../../../../utils/dom/CreateElementFromHTML.js";
import { BaseElement } from "../../../base/index.js";
import { Selectors } from "./selectors.js";

const { fromEvent } = rxjs;

const Template = `
<div class="${Selectors.Appbar}"></div>
`;

export class PopupAppbar extends BaseElement {
  #options;

  constructor(options) {
    super({ $element: createElementFromHTML(Template) });
    this.#options = options;

    this.#init();
  }

  #init() {
    const { title, onClose } = this.#options;

    const $root = this.getEl();
    const $title = createTitle({ label: title });
    const $closeIcon = createCloseIcon({ onClick: onClose });

    $root.append(...[$title, $closeIcon]);
  }
}

// =================================================================
const createTitle = ({ label }) => {
  const $title = createElementFromHTML(
    `<div class="${Selectors.Title}">${label}</div>`
  );

  return $title;
};

const createCloseIcon = ({ onClick }) => {
  const $closeIcon = createElementFromHTML(
    `<button class="${Selectors.Close}" uk-close="true"/>`
  );

  fromEvent($closeIcon, "click").subscribe(onClick);

  return $closeIcon;
};
