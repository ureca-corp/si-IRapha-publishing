import { createElementFromHTML } from "../../../../utils/dom/index.js";
import { BaseElement } from "../../../base/index.js";
import { createAccordion } from "../../../kit/index.js";
import { getViewModel } from "../../cid-window.vm.js";
import { ContentHeader } from "../content-header/content-header.js";

const { tap, map } = rxjs;

const Selectors = {
  Root: "irapha-cid-window__content",
  HeaderWrapper: "irapha-cid-window__content-header__wrapper",
  ContentListWrapper: "irapha-cid-window__content-list",
  ContentListItemTitleContainer:
    "irapha-cid-window__content-list__title-container",
  ContentListItemTitle: "irapha-cid-window__content-list__title",
  ContentListItemContent: "irapha-cid-window__content-list__content",
};

const Template = `
<div class="${Selectors.Root}">
  <div class="${Selectors.HeaderWrapper}"></div>
  <div class="${Selectors.ContentListWrapper}"></div>
</div>
`;

export class Content extends BaseElement {
  #viewModel = getViewModel();

  constructor() {
    super({ $element: createElementFromHTML(Template) });

    this.#init();
  }

  #init() {
    this.#initHeader();
    this.#initModels();
  }

  #initHeader() {
    const $headerWrapper = this.getElementByClassName(Selectors.HeaderWrapper);
    $headerWrapper.appendChild(new ContentHeader().getEl());
  }

  #initModels() {
    const { contentItemModels$ } = this.#viewModel;

    const $contentList = this.getElementByClassName(
      Selectors.ContentListWrapper
    );
    const clearList = () => ($contentList.innerHTML = "");

    contentItemModels$
      .pipe(
        tap(() => clearList()),
        map((models) =>
          models.map((model, index) => ({
            $title: createTitle({ title: model.question, index: index + 1 }),
            $content: createContent(model.answer),
          }))
        ),
        map((accordionItemModels) => createAccordion(accordionItemModels))
      )
      .subscribe(($accordion) => $contentList.appendChild($accordion));
  }
}

// =================================================================
const createTitle = ({ title, index }) => {
  return createElementFromHTML(
    `<div class="${Selectors.ContentListItemTitleContainer}">
      <div class="${Selectors.ContentListItemTitle}">Q${index}.</div>
      <div class="${Selectors.ContentListItemTitle}">${title}</div>
    </div>`
  );
};

const createContent = (content) => {
  return createElementFromHTML(
    `<div class="${Selectors.ContentListItemContent}">${content}</div>`
  );
};
