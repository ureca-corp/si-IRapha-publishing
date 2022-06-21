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
  }

  initFoldingBtn() {
    this._foldingToggleBtn = new FoldingToggleButton(
      this._element.querySelector(".irm-folding-toggle-button")
    );

    const foldingBtn = this._foldingToggleBtn;
    foldingBtn.init();

    foldingBtn.getDomElement().addEventListener("click", () => {
      if (foldingBtn.isExpand()) {
        this.shrink();
      } else {
        this.expand();
      }
    });
  }

  initMenuContainer() {
    this._menuContainer = new MenuContainer(
      this._element.querySelector(".irm-toolbox__menu-container")
    );
  }

  initLogo() {
    this._logo = new Logo();

    const logo = this._logo;
    logo.init();
  }

  // actions
  shrink() {
    this._foldingToggleBtn.shrink();
    this._menuContainer.visible();
    this._logo.visible();
    this._element.classList.remove("is-state--shrink");
  }

  expand() {
    this._foldingToggleBtn.expand();
    this._menuContainer.hide();
    this._logo.hide();
    this._element.classList.add("is-state--shrink");
  }
}
