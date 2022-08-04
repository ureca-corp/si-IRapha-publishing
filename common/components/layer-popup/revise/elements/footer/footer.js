import { createElementFromHTML } from "../../../../../utils/dom/CreateElementFromHTML.js";
import { Selectors } from "../../common/index.js";

const { fromEvent } = rxjs;

export const createFooter = ({ onCancle, onSubmit }) => {
  const $footer = createElementFromHTML(`
  <div class="${Selectors.Footer}">
    <button class="${Selectors.CancleButton}">Cancel</button>
    <button class="${Selectors.SubmitButton}">Save</button>
  </div>
  `);
  const $cancelButton = $footer.querySelector(`.${Selectors.CancleButton}`);
  const $submitButton = $footer.querySelector(`.${Selectors.SubmitButton}`);

  fromEvent($cancelButton, "click").subscribe((e) => onCancle(e));
  fromEvent($submitButton, "click").subscribe((e) => onSubmit(e));

  return $footer;
};
