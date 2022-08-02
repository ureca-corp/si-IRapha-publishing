import { createElementFromHTML } from "../../../../utils/dom/index.js";
import { BaseElement } from "../../../base/index.js";
import { ClipBoardCopyIcon } from "../../../icons/index.js";
import { getViewModel } from "../../cid-window.vm.js";

const Selectors = {
  Root: "irapha-cid-window__content-header",
  Left: "irapha-cid-window__content-header__left",
  Right: "irapha-cid-window__content-header__right",
  Title: "irapha-cid-window__content-header__title",
  Cid: "irapha-cid-window__content-header__cid",
  CopyIcon: "irapha-cid-window__content-header__copy-icon",
  CreatedAt: "irapha-cid-window__content-header__created-at",
  Author: "irapha-cid-window__content-header__author",
};

const Template = `
<div class="${Selectors.Root}">
  <div class="${Selectors.Left}">
    <div class="${Selectors.Title}"></div>
    <div class="${Selectors.Cid}"></div>
  </div>

  <div class="${Selectors.Right}">
    <div class="${Selectors.CopyIcon}"></div>
    <div class="${Selectors.CreatedAt}"></div>
    <div class="${Selectors.Author}"></div>
  </div>
</div>
`;

export class ContentHeader extends BaseElement {
  #$title = this.getElementByClassName(Selectors.Title);
  #$cid = this.getElementByClassName(Selectors.Cid);
  #$copyIcon = this.getElementByClassName(Selectors.CopyIcon);
  #$createdAt = this.getElementByClassName(Selectors.CreatedAt);
  #$author = this.getElementByClassName(Selectors.Author);

  #viewModel = getViewModel();

  constructor() {
    super({ $element: createElementFromHTML(Template) });

    this.#init();
  }

  #init() {
    const $clipboardCopy = new ClipBoardCopyIcon({
      options: {
        events: {
          onClick: () => {
            alert("Todo Copy");
          },
        },
      },
    }).getEl();
    const $copyIcon = this.#$copyIcon;
    $copyIcon.appendChild($clipboardCopy);

    this.#initModel();
  }

  #initModel() {
    const { contentHeaderModel$ } = this.#viewModel;

    const $title = this.#$title;
    const $cid = this.#$cid;
    const $createdAt = this.#$createdAt;
    const $author = this.#$author;

    contentHeaderModel$.subscribe((model) => {
      $title.innerHTML = model.title;
      $cid.innerHTML = model.cid;
      $createdAt.innerHTML = model.createdAt;
      $author.innerHTML = model.author;
    });
  }
}
