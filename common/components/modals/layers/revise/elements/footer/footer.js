import { createElementFromHTML } from "../../../../../../utils/dom/index.js";
import { Selectors } from "../../common/index.js";

const { fromEvent } = rxjs;

export const createFooter = ({ onCancel, onSubmit }) => {
  const $footer = createElementFromHTML(`
  <div class="${Selectors.Footer}">
    <button class="${Selectors.CancelButton}">Cancel</button>
    <button class="${Selectors.SubmitButton}">Save</button>
  </div>
  `);
  const $cancelButton = $footer.querySelector(`.${Selectors.CancelButton}`);
  const $submitButton = $footer.querySelector(`.${Selectors.SubmitButton}`);

  fromEvent($cancelButton, "click").subscribe((e) => onCancel(e));
  fromEvent($submitButton, "click").subscribe((e) => onSubmit(e));

  return $footer;
};
