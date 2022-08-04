import { createElementFromHTML } from "../../../../../utils/dom/index.js";
import { Selectors } from "../../common/index.js";

export const createDeleteSection = () => {
  const $section = createElementFromHTML(`
  <div class="${Selectors.ContentSection}">
    <div class="${Selectors.ContentTitle}">Delete</div>
    <label>
      <input class="uk-checkbox" type="checkbox" />
      Delete original image
    </label>
  </div>
  `);

  return {
    $section,
  };
};
