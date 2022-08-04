import { createElementFromHTML } from "../../../utils/dom/index.js";

export const createTextInput = () => {
  return createElementFromHTML(`<input class="uk-input" type="text"/>`);
};
