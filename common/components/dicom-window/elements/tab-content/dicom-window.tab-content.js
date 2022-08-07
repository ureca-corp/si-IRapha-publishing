import { createElementFromHTML } from "../../../../utils/dom/CreateElementFromHTML.js";
import { BaseElement } from "../../../base/index.js";
import { TabMenus } from "../tab-menus/tab-menus.js";

const Selectors = {
  Root: "irapha-dicom-window__tab-content__root",
  TitleContainer: "irapha-dicom-window__tab-content__title-container",
  Title: "irapha-dicom-window__tab-content__title",
  MenuWrapper: "irapha-dicom-window__tab-content__menu-wrapper",
  DescContainer: "irapha-dicom-window__tab-content__desc-container",
  Desc: "irapha-dicom-window__tab-content__desc",
};

export class DicomWindowTabContent extends BaseElement {
  constructor({ model }) {
    super({ $element: new DicomWindowTabContentComp() });

    this.#init();
  }

  #init() {
    this.#initMenus();
  }

  #initMenus() {
    const { $menuWrapper } = this.#getElements();
    const $tabMenus = new TabMenus().getEl();

    $menuWrapper.appendChild($tabMenus);
  }

  #getElements() {
    const $root = this.getEl();

    const $menuWrapper = $root.querySelector(`.${Selectors.MenuWrapper}`);

    return { $menuWrapper };
  }
}

// =================================================================
function DicomWindowTabContentComp() {
  return createElementFromHTML(`
  <div class="${Selectors.Root}">
    <div class="${Selectors.TitleContainer}">
      <p class="${Selectors.Title}">Patient Name 1</p>
      <div class="${Selectors.MenuWrapper}"></div>
    </div>

    <div class="${Selectors.DescContainer}">
      <p class="${Selectors.Desc}" index="1">Patient ID / Age / Sex</p>
      <p class="${Selectors.Desc}" index="2">Study Date / Modality / Study description</p>
    </div>
  </div>
  `);
}
