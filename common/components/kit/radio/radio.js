import { createElementFromHTML } from "../../../utils/dom/index.js";

export const createRadioButton = ({ name }) => {
  return createElementFromHTML(
    `<input class="uk-radio" type="radio" name="${name}" />`
  );
};
