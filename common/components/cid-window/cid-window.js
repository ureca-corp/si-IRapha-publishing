import { createElementFromHTML } from "../../utils/dom/index.js";
import { BaseElement } from "../base/index.js";
import { createCheckBox, createLabelWith } from "../kit/index.js";
import { PopupAppbar } from "../layer-popup/base/index.js";
import { Tabs } from "../tabs2/index.js";
import { getViewModel } from "./cid-window.vm.js";
import { Content } from "./elements/content/content.js";
import { TabInner } from "./elements/tab-inner/tab-inner.js";

const rx = rxjs;

const Selectors = {
  Root: "irapha-cid-window",
  AppbarWrapper: "irapha-cid-window__appbar-wrapper",
  ContentContainer: "irapha-cid-window__content-container",
  Footer: "irapha-cid-window__footer",
  CancleButton: "irapha-cid-window__cancle-btn",
};

const Template = `
<div class="${Selectors.Root}">
  <div class="${Selectors.AppbarWrapper}"></div>
  <div class="${Selectors.ContentContainer}"></div>
  <div class="${Selectors.Footer}"></div>
</div>
`;

export class CidWindow extends BaseElement {
  #viewModel = getViewModel();

  constructor() {
    super({ $element: createElementFromHTML(Template) });

    this.#init();
  }

  // private
  #init() {
    this.#initPopupAppbar();
    this.#initContent();
    this.#initFooter();
  }

  #initPopupAppbar() {
    const { appbarModel$ } = this.#viewModel;

    const $appbarWrapper = this.getElementByClassName(Selectors.AppbarWrapper);

    appbarModel$
      .pipe(
        rx.tap(() => ($appbarWrapper.innerHTML = "")),
        rx.map(({ title }) =>
          new PopupAppbar({
            title,
            onClose: () => window.close(),
          }).getEl()
        )
      )
      .subscribe(($appbar) => $appbarWrapper.prepend($appbar));
  }

  #initContent() {
    const $contentContainer = this.getElementByClassName(
      Selectors.ContentContainer
    );

    this.#initTabs({ $contentContainer });

    $contentContainer.appendChild(new Content().getEl());
  }

  #initTabs({ $contentContainer }) {
    const { tabsModels$ } = this.#viewModel;

    tabsModels$
      .pipe(
        rx.map((models) => models.map((model) => new TabInner(model).getEl())),
        rx.map(($tabInners) => new Tabs({ $items: $tabInners }).getEl())
      )
      .subscribe(($tabs) => $contentContainer.appendChild($tabs));
  }

  #initFooter() {
    const $footer = this.getElementByClassName(Selectors.Footer);
    const $cancleButton = createElementFromHTML(`
    <button class="${Selectors.CancleButton}">Cancle</button>
    `);
    const { $label: $autoNextLabel } = createLabelWith({
      title: "Auto Next",
      $input: createCheckBox(),
    });

    $footer.append(...[$cancleButton, $autoNextLabel]);
  }
}
