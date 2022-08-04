import { createElementFromHTML } from "../../../utils/dom/index.js";

export const createRangeBar = ({
  value = 0,
  min = 0,
  max = 10,
  step = 0.1,
}) => {
  return createElementFromHTML(
    `
    <input 
      class="uk-range" 
      type="range" 
      value="${value}" 
      min="${min}" 
      max="${max}" 
      step="${step}"
    >
  `
  );
};
