import { createElementFromHTML } from "../../utils/dom/index.js";
import { BaseElement } from "../base/index.js";
import { DicomViewBox } from "../dicom-viewbox/index.js";
import { DicomWindow, DicomWindowTabContent } from "../dicom-window/index.js";
import { Tabs } from "../tabs2/index.js";
import { getViewModel } from "./main-layout.vm.js";

const { map, tap } = rxjs;

const Selectors = {
  MainLayout: "irapha-main-layout",
  TabsWrapper: "irapha-main-layout__tabs-wrapper",
  DicomWindowWrapper: "irapha-main-layout__dicom-window-wrapper",
};

function MainLayoutComp() {
  return createElementFromHTML(`
  <div class="${Selectors.MainLayout}">
    <div class="${Selectors.TabsWrapper}"></div>
    <div class="${Selectors.DicomWindowWrapper}"></div>
  </div>
  `);
}

export class MainLayout extends BaseElement {
  #vm = getViewModel();

  constructor() {
    super({ $element: new MainLayoutComp() });

    this.#initTabs();
    this.#initDicomWindow();
  }

  // private
  #initTabs() {
    const { $tabsWrapper } = this.#getElements();
    const { tabsModels$ } = this.#vm;

    tabsModels$
      .pipe(
        map((models) =>
          models.map((model) => new DicomWindowTabContent({ model }).getEl())
        ),
        map(($tabContents) => new Tabs({ $items: $tabContents }).getEl()),
        tap(($tabs) => $tabsWrapper.appendChild($tabs))
      )
      .subscribe();
  }

  #initDicomWindow() {
    const { $dicomWindowWrapper } = this.#getElements();
    const { windowModels$ } = this.#vm;

    windowModels$
      .pipe(
        map((models) =>
          models.map(({ viewBoxModel, hasController }) =>
            new DicomViewBox(viewBoxModel, undefined, {
              hasController,
              onClick: () => {
                console.log("view-box clicked");
              },
            }).getEl()
          )
        ),
        map(($viewBoxes) =>
          new DicomWindow({
            $viewBoxes: $viewBoxes,
            layout$: window.store.dicomWindowLayoutMode$,
          }).getEl()
        )
      )
      .subscribe(($dicomWindow) =>
        $dicomWindowWrapper.appendChild($dicomWindow)
      );
  }

  #getElements() {
    const $root = this.getEl();

    const $tabsWrapper = $root.querySelector(`.${Selectors.TabsWrapper}`);
    const $dicomWindowWrapper = $root.querySelector(
      `.${Selectors.DicomWindowWrapper}`
    );

    return {
      $tabsWrapper,
      $dicomWindowWrapper,
    };
  }

  // public
  clone() {
    return new MainLayout();
  }
}
