import { createElementFromHTML } from "../../../utils/dom/index.js";

const { fromEvent } = rxjs;

export const createTextInput = ({ onChange, onClick }) => {
  const $input = createElementFromHTML(`<input class="uk-input" type="text"/>`);

  fromEvent($input, "change").subscribe((e) => onChange(e));
  onClick && fromEvent($input, "click").subscribe((e) => onClick(e));

  return $input;
};
