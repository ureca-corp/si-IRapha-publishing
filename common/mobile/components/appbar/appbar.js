import { BaseElement } from "../../../components/base/index.js";
import { createElementFromHTML } from "../../../utils/dom/index.js";
import { MobileAppbarContextMenu } from "../appbar-context.menu/appbar-context-menu.js";

const Selectors = {
  Root: "irapha-mobile-appbar",
  Inner: "irapha-mobile-appbar__inner",
  LeftWrapper: "irapha-mobile-appbar__left-wrapper",
  RightWrapper: "irapha-mobile-appbar__right-wrapper",
  Title: "irapha-mobile-appbar__title",
};

export class MobileAppbar extends BaseElement {
  #title;
  #$left;
  #$right;

  constructor({ title, $left, $right }) {
    super({ $element: new MobileAppbarComp() });
    this.#title = title;
    this.#$left = $left;
    this.#$right = $right;

    this.#init();
  }

  #init() {
    const { $leftWrapper, $rightWrapper, $title } = this.#getElements();
    const $left = this.#$left;
    const $right = this.#$right;
    const title = this.#title;

    $left && $leftWrapper.appendChild($left);
    $right && $rightWrapper.appendChild($right);
    title && ($title.innerHTML = title);

    this.#initAppbarContextMenu();
  }

  #initAppbarContextMenu() {
    this.getEl().appendChild(new MobileAppbarContextMenu().getEl());
  }

  #getElements() {
    const $leftWrapper = this.getElementByClassName(Selectors.LeftWrapper);
    const $rightWrapper = this.getElementByClassName(Selectors.RightWrapper);
    const $title = this.getElementByClassName(Selectors.Title);

    return {
      $leftWrapper,
      $rightWrapper,
      $title,
    };
  }
}

function MobileAppbarComp() {
  return createElementFromHTML(`
  <div class="${Selectors.Root}">
    <div class="${Selectors.Inner}">
      <div class="${Selectors.LeftWrapper}"></div>
      <div class="${Selectors.Title}">Study List</div>
      <div class="${Selectors.RightWrapper}"></div>
    </div>
  </div>
  `);
}
