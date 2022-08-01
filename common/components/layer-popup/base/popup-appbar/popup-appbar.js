import { createElementFromHTML } from "../../../../utils/dom/CreateElementFromHTML.js";
import { BaseElement } from "../../../base/index.js";
import { Selectors } from "./selectors.js";

const rx = rxjs;

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
  const template = `
  <div class="${Selectors.Title}">${label}</div>
  `;
  const $title = createElementFromHTML(template);

  return $title;
};

const createCloseIcon = ({ onClick }) => {
  const template = `
  <button class="${Selectors.Close}" uk-close="true"/>
  `;
  const $closeIcon = createElementFromHTML(template);

  rx.fromEvent($closeIcon, "click").subscribe((e) => onClick(e));

  return $closeIcon;
};
