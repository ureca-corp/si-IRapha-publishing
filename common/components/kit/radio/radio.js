import { createElementFromHTML } from "../../../utils/dom/index.js";

const { fromEvent } = rxjs;

export const createRadioButton = ({ name, value, checked, onChange }) => {
  const $radio = createElementFromHTML(
    `<input class="uk-radio" type="radio" value="${value}" name="${name}" />`
  );

  onChange && fromEvent($radio, "change").subscribe((e) => onChange(e));
  checked && ($radio.checked = checked);

  return $radio;
};
