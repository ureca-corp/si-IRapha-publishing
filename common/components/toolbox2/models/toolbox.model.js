import { FoldingToggleButton } from "./folding.toggle-button.js";
import { MenuContainer } from "./menu.container.js";
import { Logo } from "/common/components/logo/models/index.js";

const rx = rxjs;

const ClassSelectors = {
  Toolbox: ".irm-toolbox",
  DragPoint: ".irm-toolbox__drag-point",
  FoldingToggleButton: ".irm-folding-toggle-button",
  MenuContainer: ".irm-toolbox__menu-container",
};

export class Toolbox {
  constructor() {
    this._element = document.querySelector(ClassSelectors.Toolbox);
  }

  init() {
    this._initDragPoint();
    this._initFoldingBtn();
    this._initMenuContainer();
    this._initLogo();

    const isExpanded$ = new rx.BehaviorSubject(
      !this._foldingToggleBtn.isExpanded()
    );
    isExpanded$.subscribe((isExpanded) =>
      this._handleIsExpandedChange(isExpanded)
    );
    this._isExpanded$ = isExpanded$;

    this._subscribeHover();
    this._subscribeHoverExit();
  }

  // private
  _initDragPoint() {
    const dragPoint = this._element.querySelector(ClassSelectors.DragPoint);

    if (this.isLayoutColumn())
      dragPoint.classList.add("is-direction--horizontal");

    this._dragPoint = dragPoint;
  }

  _initFoldingBtn() {
    const foldingBtn = new FoldingToggleButton(
      this._element.querySelector(ClassSelectors.FoldingToggleButton)
    );

    foldingBtn.init();

    rx.fromEvent(foldingBtn.getDomElement(), "click").subscribe(() => {
      const oldState = this._isExpanded$.getValue();
      this._isExpanded$.next(!oldState);
    });

    this._foldingToggleBtn = foldingBtn;
  }

  _initMenuContainer() {
    const menuContainer = new MenuContainer(
      this._element.querySelector(ClassSelectors.MenuContainer)
    );

    this._menuContainer = menuContainer;
  }

  _initLogo() {
    const logo = new Logo();
    logo.init();

    this._logo = logo;
  }

  // handler
  _handleIsExpandedChange(isExpanded) {
    if (isExpanded) {
      this._logo.setShrinkDirection(null);
      this._foldingToggleBtn.setExpand(false);

      this._element.classList.remove("is-state--shrink");

      return;
    }

    this._logo.setShrinkDirection("vertical");
    this._foldingToggleBtn.setExpand(true);

    this._element.classList.add("is-state--shrink");
  }

  ////////////////////////////////////////////////////////////////////////////////
  _subscribeHover() {
    // this._element.addEventListener("mouseover", () => {
    //   if (!this.isExpand()) this._shrinkWithoutState();
    // });
  }

  _subscribeHoverExit() {
    // this._element.addEventListener("mouseout", () => {
    //   if (!this.isExpand()) this._expandWithoutState();
    // });
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
    this._element.classList.remove("is-state--shrink");
  }

  _shrinkHorizontalWithoutState() {
    this._menuContainer.visible();
    this._element.classList.remove("is-state--shrink-horizontal");
  }

  _expandWithoutState() {
    if (this.isLayoutColumn()) return this._expandHorizontalWithoutState();

    return this._expandVerticalWithoutState();
  }

  _expandVerticalWithoutState() {
    this._menuContainer.hide();

    this._element.classList.add("is-state--shrink");
  }

  _expandHorizontalWithoutState() {
    this._menuContainer.hide();

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
    this._foldingToggleBtn.setExpand(false);
    this._shrinkVerticalWithoutState();
  }

  expandVertical() {
    this._foldingToggleBtn.setExpand(true);
    this._expandVerticalWithoutState();
  }

  shrinkHorizontal() {
    this._foldingToggleBtn.setExpand(false);
    this._shrinkHorizontalWithoutState();
  }

  expandHorizontal() {
    this._foldingToggleBtn.setExpand(true);
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
