import { createElementFromHTML } from "../../../utils/dom/index.js";

export const createLabelWith = ({ title, $input, disabled }) => {
  const $label = createElementFromHTML(`<label class="irapha-label"></label>`);
  const $title = createElementFromHTML(`<span>${title}</span>`);

  $label.append(...[$input, $title]);

  disabled && ($label.style.pointerEvents = "none");

  return $label;
};
