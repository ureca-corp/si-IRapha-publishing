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

/**
 * Constructor Types
 *
 * @type model: {
 *  id: string,
 *  title: string,
 *  topDesc: string,
 *  bottomDesc: string
 * }
 */
export class DicomWindowTabContent extends BaseElement {
  #model;

  constructor({ model }) {
    super({ $element: new DicomWindowTabContentComp() });
    this.#model = model;

    this.#init();
  }

  #init() {
    this.#initMenus();
    this.#initModel();
  }

  #initMenus() {
    const { $menuWrapper } = this.#getElements();
    const $tabMenus = new TabMenus().getEl();

    $menuWrapper.appendChild($tabMenus);
  }

  #initModel() {
    const { title, topDesc, bottomDesc } = this.#model;
    const { $title, $topDesc, $bottomDesc } = this.#getElements();

    $title.innerHTML = title;
    $topDesc.innerHTML = topDesc;
    $bottomDesc.innerHTML = bottomDesc;
  }

  #getElements() {
    const $menuWrapper = this.getElementByClassName(Selectors.MenuWrapper);
    const $title = this.getElementByClassName(Selectors.Title);

    const [$topDesc, $bottomDesc] = this.getElementsByClassName(Selectors.Desc);

    return { $menuWrapper, $title, $topDesc, $bottomDesc };
  }
}

// =================================================================
function DicomWindowTabContentComp() {
  return createElementFromHTML(`
  <div class="${Selectors.Root}">
    <div class="${Selectors.TitleContainer}">
      <p class="${Selectors.Title}">Title</p>
      <div class="${Selectors.MenuWrapper}"></div>
    </div>

    <div class="${Selectors.DescContainer}">
      <p class="${Selectors.Desc}">Desc1</p>
      <p class="${Selectors.Desc}">Desc2</p>
    </div>
  </div>
  `);
}
