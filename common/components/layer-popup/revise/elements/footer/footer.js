import { createElementFromHTML } from "../../../../../utils/dom/CreateElementFromHTML.js";
import { Selectors } from "../../common/index.js";

const rx = rxjs;

export const createFooter = ({ onCancle, onSubmit }) => {
  const template = `
  <div class="${Selectors.Footer}">
    <button class="${Selectors.CancleButton}">Cancel</button>
    <button class="${Selectors.SubmitButton}">Save</button>
  </div>
  `;

  const $footer = createElementFromHTML(template);
  const $cancelButton = $footer.querySelector(`.${Selectors.CancleButton}`);
  const $submitButton = $footer.querySelector(`.${Selectors.SubmitButton}`);

  rx.fromEvent($cancelButton, "click").subscribe((e) => onCancle(e));
  rx.fromEvent($submitButton, "click").subscribe((e) => onSubmit(e));

  return $footer;
};
