import { createElementFromHTML } from "../../../utils/dom/index.js";

export const createTextInput = () => {
  const template = `
  <input class="uk-input" type="text"/>
  `;

  return createElementFromHTML(template);
};
