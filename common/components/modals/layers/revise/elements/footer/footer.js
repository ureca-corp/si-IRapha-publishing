import { createElementFromHTML } from "../../../../../../utils/dom/index.js";
import { Button } from "../../../../../kit/index.js";
import { Selectors } from "../../common/index.js";

const { fromEvent } = rxjs;

export const createFooter = ({ onCancel, onSubmit }) => {
  const $footer = createElementFromHTML(`
  <div class="${Selectors.Footer}"></div>
  `);
  const $cancelButton = new Button({
    label: "Cancel",
    variant: "outlined",
    onClick: onCancel,
  });

  const $submitButton = new Button({
    label: "Save",
    variant: "contained",
    onClick: onSubmit,
  });

  $footer.append(...[$cancelButton, $submitButton]);

  return $footer;
};
