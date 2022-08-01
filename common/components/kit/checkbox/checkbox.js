import { createElementFromHTML } from "../../../utils/dom/index.js";

export const createCheckBox = () => {
  const template = `
  <input 
    class="uk-checkbox" 
    type="checkbox" 
  />
  `;

  const $checkBox = createElementFromHTML(template);

  return $checkBox;
};
