import { createElementFromHTML } from "../../../utils/dom/index.js";

export const createAccordion = (models) => {
  const $accordion = createElementFromHTML(
    `<ul uk-accordion="collapsible: false"></ul>`
  );

  const $items = models.map(({ $title, $content }) =>
    createAccordionItem({ $title, $content })
  );

  $accordion.append(...$items);

  return $accordion;
};

const createAccordionItem = ({ $title, $content }) => {
  const $template = createElementFromHTML(
    `
    <li>
      <a class="uk-accordion-title" href="#"></a>
      <div class="uk-accordion-content"></div>
    </li>
    `
  );

  const $titleWrapper = $template.querySelector(".uk-accordion-title");
  const $contentWrapper = $template.querySelector(".uk-accordion-content");

  $titleWrapper.appendChild($title);
  $contentWrapper.appendChild($content);

  return $template;
};
