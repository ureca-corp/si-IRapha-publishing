import "../../store/store.js";

import { BaseElement } from "../../../components/base/base-element.js";
import { ThumbnailList } from "../../../components/thumbnail-box/index.js";
import { createElementFromHTML } from "../../../utils/dom/index.js";
import { MobileAppbarWithMenu } from "../../components/appbar/with-menu.js";

const Selectors = {
  Root: "irapha-mobile__viewer__root",
  HeaderWrapper: "irapha-mobile__viewer__header-wrapper",
  Content: "irapha-mobile__viewer__content",
  StudyInfoWrapper: "irapha-mobile__viewer__study-info-wrapper",
  ThumbnailListWrapper: "irapha-mobile__viewer__thumbnail-list-wrapper",
  ViewBoxWrapper: "irapha-mobile__viewer__viewbox-wrapper",
  BottomWrapper: "irapha-mobile__viewer__bottom-wrapper",
};

export class MobileViewerPage extends BaseElement {
  constructor() {
    super({ $element: new MobileViewerPageComp() });

    this.#init();
  }

  #init() {
    this.#initHeader();
    this.#initThumbnailBox();
  }

  #initHeader() {
    const { $headerWrapper } = this.#getElements();

    $headerWrapper.appendChild(
      new MobileAppbarWithMenu({ title: "Patient Name" })
    );
  }

  #initThumbnailBox() {
    const { $content } = this.#getElements();

    const $thumbnailBox = new ThumbnailList({
      models: Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        topLeft: ["S:0", "#1"],
        topRight: ["US"],
        bottomLeft: ["Cardiology"],
      })),
    }).getEl();

    $content.appendChild($thumbnailBox);
  }

  #getElements() {
    const $headerWrapper = this.getElementByClassName(Selectors.HeaderWrapper);
    const $content = this.getElementByClassName(Selectors.Content);
    const $studyInfoWrapper = this.getElementByClassName(
      Selectors.StudyInfoWrapper
    );
    const $thumbnailListWrapper = this.getElementByClassName(
      Selectors.ThumbnailListWrapper
    );
    const $viewBoxWrapper = this.getElementByClassName(
      Selectors.ViewBoxWrapper
    );
    const $bottomWrapper = this.getElementByClassName(Selectors.BottomWrapper);

    return {
      $headerWrapper,
      $content,
      $studyInfoWrapper,
      $thumbnailListWrapper,
      $viewBoxWrapper,
      $bottomWrapper,
    };
  }
}

function MobileViewerPageComp() {
  return createElementFromHTML(`
  <div class="${Selectors.Root}">
    <header class="${Selectors.HeaderWrapper}"></header>

    <div class="${Selectors.Content}">
      <div class="${Selectors.StudyInfoWrapper}"></div>
      <div class="${Selectors.ThumbnailListWrapper}"></div>
      <div class="${Selectors.ViewBoxWrapper}"></div>
      <div class="${Selectors.BottomWrapper}"></div>
    </div>
  </div>`);
}
