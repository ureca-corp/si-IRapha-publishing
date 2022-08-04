import { createElementFromHTML } from "../../../utils/dom/index.js";

export const createCheckBox = () => {
  return createElementFromHTML(`<input class="uk-checkbox" type="checkbox" />`);
};
