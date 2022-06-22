import { FoldingToggleButton } from "./folding.toggle-button.js";
import { MenuContainer } from "./menu.container.js";
import { Logo } from "/common/components/logo/models/index.js";

export class Toolbox {
  constructor() {
    this._element = document.querySelector(".irm-toolbox");
  }

  init() {
    this.initFoldingBtn();
    this.initMenuContainer();
    this.initLogo();

    this._subscribeHover();
    this._subscribeHoverExit();
  }

  initFoldingBtn() {
    this._foldingToggleBtn = new FoldingToggleButton(
      this._element.querySelector(".irm-folding-toggle-button")
    );

    const foldingBtn = this._foldingToggleBtn;
    foldingBtn.init();

    foldingBtn.getDomElement().addEventListener("click", () => {
      if (foldingBtn.isIconExpand()) return this.shrink();

      return this.expand();
    });
  }

  initMenuContainer() {
    this._menuContainer = new MenuContainer(
      this._element.querySelector(".irm-toolbox__menu-container")
    );
  }

  initLogo() {
    this._logo = new Logo();

    this._logo.init();
  }

  _subscribeHover() {
    this._element.addEventListener("mouseover", () => {
      if (!this.isExpand()) this._shrinkWithoutState();
    });
  }

  _subscribeHoverExit() {
    this._element.addEventListener("mouseout", () => {
      if (!this.isExpand()) this._expandWithoutState();
    });
  }

  isExpand() {
    return !this._foldingToggleBtn.isIconExpand();
  }

  _shrinkWithoutState() {
    this._menuContainer.visible();
    this._logo.visible();
    this._element.classList.remove("is-state--shrink");
  }

  _expandWithoutState() {
    this._menuContainer.hide();
    this._logo.hide();
    this._element.classList.add("is-state--shrink");
  }

  // actions
  shrink() {
    this._foldingToggleBtn.setIconShrink();
    this._shrinkWithoutState();
  }

  expand() {
    this._foldingToggleBtn.setIconExpand();
    this._expandWithoutState();
  }
}
