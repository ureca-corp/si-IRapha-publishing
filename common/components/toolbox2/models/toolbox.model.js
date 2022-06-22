import { FoldingToggleButton } from "./folding.toggle-button.js";
import { MenuContainer } from "./menu.container.js";
import { Logo } from "/common/components/logo/models/index.js";

export class Toolbox {
  constructor() {
    this._element = document.querySelector(".irm-toolbox");
  }

  init() {
    this.initDragPoint();
    this.initFoldingBtn();
    this.initMenuContainer();
    this.initLogo();

    this._subscribeHover();
    this._subscribeHoverExit();
  }

  initDragPoint() {
    const className = ".irm-toolbox__drag-point";

    const dragPoint = this._element.querySelector(className);

    if (this.isLayoutColumn())
      dragPoint.classList.add("is-direction--horizontal");

    this._dragPoint = dragPoint;
  }

  initFoldingBtn() {
    this._foldingToggleBtn = new FoldingToggleButton(
      this._element.querySelector(".irm-folding-toggle-button")
    );

    const foldingBtn = this._foldingToggleBtn;
    foldingBtn.init();

    foldingBtn.getDomElement().addEventListener("click", () => {
      if (foldingBtn.isExpanded()) return this.shrink();

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

  isLayoutColumn() {
    return this._element.classList.contains("is-layout--column");
  }

  isExpand() {
    return !this._foldingToggleBtn.isExpanded();
  }

  _shrinkWithoutState() {
    if (this.isLayoutColumn()) return this._shrinkHorizontalWithoutState();

    return this._shrinkVerticalWithoutState();
  }

  _shrinkVerticalWithoutState() {
    this._menuContainer.visible();
    this._logo.visible();
    this._element.classList.remove("is-state--shrink");
  }

  _shrinkHorizontalWithoutState() {
    this._menuContainer.visible();
    this._logo.removeShrinkHorizontal();
    this._element.classList.remove("is-state--shrink-horizontal");
  }

  _expandWithoutState() {
    if (this.isLayoutColumn()) return this._expandHorizontalWithoutState();

    return this._expandVerticalWithoutState();
  }

  _expandVerticalWithoutState() {
    this._menuContainer.hide();
    this._logo.hide();

    this._element.classList.add("is-state--shrink");
  }

  _expandHorizontalWithoutState() {
    this._menuContainer.hide();
    this._logo.setShrinkHorizontal();

    this._element.classList.add("is-state--shrink-horizontal");
  }

  // actions
  shrink() {
    if (this.isLayoutColumn()) return this.shrinkHorizontal();

    return this.shrinkVertical();
  }

  expand() {
    if (this.isLayoutColumn()) return this.expandHorizontal();

    return this.expandVertical();
  }

  shrinkVertical() {
    this._foldingToggleBtn.setIconShrink();
    this._shrinkVerticalWithoutState();
  }

  expandVertical() {
    this._foldingToggleBtn.setIconExpand();
    this._expandVerticalWithoutState();
  }

  shrinkHorizontal() {
    this._foldingToggleBtn.setIconShrink();
    this._shrinkHorizontalWithoutState();
  }

  expandHorizontal() {
    this._foldingToggleBtn.setIconExpand();
    this._expandHorizontalWithoutState();
  }

  // 툴박스 배치 레이아웃 - 세로형
  replaceLayoutColumn() {
    this._element.classList.add("is-layout--column");
    this._dragPoint.classList.add("is-direction--horizontal");

    this._menuContainer.replaceLayoutColumn();
    this._menuContainer.replaceAllMenuLayoutColumnTwo();
  }
}
