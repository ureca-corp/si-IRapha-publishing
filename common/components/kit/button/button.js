import { createElementFromHTML } from "../../../utils/dom/index.js";

const { fromEvent } = rxjs;

export function Button({ label = "", variant = "", onClick = () => {} }) {
  const $button = createElementFromHTML(
    `<button 
      class="irapha-button" 
      variant="${variant}"
    >
      ${label}
    </button>`
  );

  fromEvent($button, "click").subscribe(() => onClick());

  return $button;
}
