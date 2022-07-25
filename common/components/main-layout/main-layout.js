import { createElementFromHTML } from "../../utils/dom/index.js";
import { BaseElement } from "../base/index.js";
import { DicomViewBox } from "../dicom-viewbox/index.js";
import { DicomWindow } from "../dicom-window/index.js";
import { Tabs } from "../tabs/index.js";

const Selectors = {
  MainLayout: "irapha-main-layout",
};

export class MainLayout extends BaseElement {
  static template = `
    <div class="${Selectors.MainLayout}"></div>
    `;

  #data;

  constructor({ data }) {
    super({ $element: createElementFromHTML(MainLayout.template) });
    this.#data = data;

    const { tabsData, windowData } = data;

    this.#initTabs({ tabsData });
    this.#initDicomWindow({ windowData });
  }

  // private
  #initTabs({ tabsData }) {
    const tabs = new Tabs({ data: tabsData });

    this.getRootElement().appendChild(tabs.getRootElement());
  }

  #initDicomWindow({ windowData }) {
    const viewBoxes = windowData.map(
      ({ descItems, hasController }) =>
        new DicomViewBox({
          descItems,
          hasController,
        })
    );

    const dicomWindow = new DicomWindow({
      items: viewBoxes.map((it) => it.getRootElement()),
      layout$: window.store.dicomWindowLayout$,
    });

    this.getRootElement().appendChild(dicomWindow.getRootElement());
  }

  // public
  clone() {
    return new MainLayout({ data: this.#data });
  }
}
