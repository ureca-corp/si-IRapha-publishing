import { BaseElement } from "../../../components/base/index.js";
import {
  PanningIcon,
  ReportIcon,
  WindowLevelIcon,
} from "../../../components/icons/index.js";
import { Tabs } from "../../../components/tabs/index.js";
import { createElementFromHTML } from "../../../utils/dom/index.js";

const Selectors = {
  Root: "irapha-mobile__viewer__bottom__root",
  MenuContainer: "irapha-mobile__viewer__bottom__menu-container",
  MenuLeft: "irapha-mobile__viewer__bottom__menu__left",
  MenuRight: "irapha-mobile__viewer__bottom__menu__right",
  ContentContainer: "irapha-mobile__viewer__bottom__content-container",
  ContentTabsWrapper: "irapha-mobile__viewer__bottom__content-tabs-wrapper",
  ContentWrapper: "irapha-mobile__viewer__bottom__content-wrapper",

  TabInner: "irapha-mobile__viewer__bottom__content-tab-inner",
};

export class MobileViewerBottom extends BaseElement {
  #isVisibleContent$;

  #onReportClick;

  constructor({ onReportClick, isVisibleContent$ }) {
    super({ $element: new MobileViewerBottomComp() });
    this.#onReportClick = onReportClick;
    this.#isVisibleContent$ = isVisibleContent$;

    this.#init();
  }

  #init() {
    this.#initMenus();
    this.#initTabs();
    this.#initContent();
  }

  #initMenus() {
    const { $left, $right } = this.#getElements();

    $left.append(
      ...[
        new PanningIcon({
          options: {
            events: {
              onClick: () => alert("Todo Panning"),
            },
          },
        }).getEl(),
        new WindowLevelIcon({
          options: {
            events: {
              onClick: () => alert("Todo Window Level"),
            },
          },
        }).getEl(),
      ]
    );

    $right.appendChild(
      new ReportIcon({
        options: {
          events: {
            onClick: () => this.#onReportClick(),
          },
        },
      }).getEl()
    );
  }

  #initTabs() {
    const items = [
      "Tab Name1",
      "Tab Name2",
      "Tab Name3",
      "Tab Name4",
      "Tab Name5",
      "Tab Name6",
    ];
    const $items = items.map((it) => new TabInner(it));

    const { $tabsWrapper } = this.#getElements();
    $tabsWrapper.appendChild(new Tabs({ $items }).getEl());
  }

  #initContent() {
    const { $contentContainer } = this.#getElements();
    const isVisibleContent$ = this.#isVisibleContent$;

    isVisibleContent$.subscribe((isVisibleContent) => {
      isVisibleContent
        ? $contentContainer.setAttribute("visible", true)
        : $contentContainer.removeAttribute("visible");
    });
  }

  #getElements() {
    const $left = this.getElementByClassName(Selectors.MenuLeft);
    const $right = this.getElementByClassName(Selectors.MenuRight);

    const $contentContainer = this.getElementByClassName(
      Selectors.ContentContainer
    );
    const $tabsWrapper = this.getElementByClassName(
      Selectors.ContentTabsWrapper
    );
    const $contentWrapper = this.getElementByClassName(
      Selectors.ContentWrapper
    );

    return {
      $left,
      $right,
      $contentContainer,
      $tabsWrapper,
      $contentWrapper,
    };
  }
}

// =================================================================
function MobileViewerBottomComp() {
  return createElementFromHTML(`
  <div class="${Selectors.Root}">
    <div class="${Selectors.MenuContainer}">
      <div class="${Selectors.MenuLeft}"></div>
      <div class="${Selectors.MenuRight}"></div>
    </div>

    <div class="${Selectors.ContentContainer}">
      <div class="${Selectors.ContentTabsWrapper}"></div>
      <div class="${Selectors.ContentWrapper}"></div>
    </div>
  </div>
  `);
}

function TabInner(children) {
  return createElementFromHTML(
    `<div class="${Selectors.TabInner}">${children}</div>`
  );
}
