import { createElementFromHTML } from "../../utils/dom/index.js";
import { BaseElement } from "../base/index.js";
import { Button, createCheckBox, createLabelWith } from "../kit/index.js";
import { PopupAppbar } from "../modals/index.js";
import { Tabs } from "../tabs/index.js";
import { getViewModel } from "./cid-window.vm.js";
import { Content } from "./elements/content/content.js";
import { TabInner } from "./elements/tab-inner/tab-inner.js";

const { tap, map } = rxjs;

const Selectors = {
  Root: "irapha-cid-window",
  AppbarWrapper: "irapha-cid-window__appbar-wrapper",
  ContentContainer: "irapha-cid-window__content-container",
  Footer: "irapha-cid-window__footer",
  CancelButton: "irapha-cid-window__cancel-btn",
};

function CidWindowComp() {
  return createElementFromHTML(`
  <div class="${Selectors.Root}">
    <div class="${Selectors.AppbarWrapper}"></div>
    <div class="${Selectors.ContentContainer}"></div>
    <div class="${Selectors.Footer}"></div>
  </div>
  `);
}

export class CidWindow extends BaseElement {
  #viewModel = getViewModel();

  constructor() {
    super({ $element: new CidWindowComp() });

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
        tap(() => ($appbarWrapper.innerHTML = "")),
        map(({ title }) =>
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
        map((models) => models.map((model) => new TabInner(model).getEl())),
        map(($tabInners) => new Tabs({ $items: $tabInners }).getEl())
      )
      .subscribe(($tabs) => $contentContainer.appendChild($tabs));
  }

  #initFooter() {
    const $footer = this.getElementByClassName(Selectors.Footer);

    const $cancelButton = new Button({
      label: "Cancel",
      variant: "outlined",
      onClick: () => window.close(),
    });

    const $autoNextLabel = createLabelWith({
      title: "Auto Next",
      $input: createCheckBox({
        onChange: () => alert("Todo Checkbox Change"),
      }),
    });

    $footer.append(...[$cancelButton, $autoNextLabel]);
  }
}
