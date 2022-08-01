import { createElementFromHTML } from "../../../utils/dom/index.js";

export const createRadioButton = ({ name }) => {
  const template = `
  <input 
    class="uk-radio" 
    type="radio" 
    name="${name}" 
  />
  `;

  const $radioInput = createElementFromHTML(template);

  return $radioInput;
};
