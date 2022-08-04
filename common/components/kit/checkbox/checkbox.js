import { createElementFromHTML } from "../../../utils/dom/index.js";

const { fromEvent } = rxjs;

export const createCheckBox = ({ checked, onChange }) => {
  const $checkbox = createElementFromHTML(
    `<input class="uk-checkbox" type="checkbox" />`
  );

  checked && ($checkbox.checked = true);
  onChange && fromEvent($checkbox, "change").subscribe((e) => onChange(e));

  return $checkbox;
};
