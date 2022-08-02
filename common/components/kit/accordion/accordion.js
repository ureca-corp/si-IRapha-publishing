import { createElementFromHTML } from "../../../utils/dom/index.js";

const Template = `
<ul uk-accordion="collapsible: false"></ul>
`;

export const createAccordion = (models) => {
  const $accordion = createElementFromHTML(Template);

  // const models = [
  //   {
  //     $title: createElementFromHTML("<div>t1</div>"),
  //     $content: createElementFromHTML("<div>d1</div>"),
  //   },
  //   {
  //     $title: createElementFromHTML("<div>t1</div>"),
  //     $content: createElementFromHTML("<div>d1</div>"),
  //   },
  //   {
  //     $title: createElementFromHTML("<div>t1</div>"),
  //     $content: createElementFromHTML("<div>d1</div>"),
  //   },
  //   {
  //     $title: createElementFromHTML("<div>t1</div>"),
  //     $content: createElementFromHTML("<div>d1</div>"),
  //   },
  // ];

  const $items = models.map((model) =>
    createAccordionItem({ $title: model.$title, $content: model.$content })
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
