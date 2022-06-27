import { ToolboxMenu } from "./menu.js";
import { VirtualLayoutController } from "./menu-items/index.js";

const SelectorClasses = {
  Menu: ".irapha-toolbox__menu",
  Divider: ".irapha-toolbox__divider",
};

const MutationClasses = {
  dividerLayoutColumn: "is-layout--column",
  dividerAlignSelfCenter: "is-state--align-self-center",
};

export class ToolboxMenusManager {
  constructor() {
    this._init();
    this._initMenu();
  }

  // private
  _init() {
    const menus = [...document.querySelectorAll(SelectorClasses.Menu)].map(
      (it) => new ToolboxMenu(it)
    );
    this._menus = menus;

    this._divider = document.querySelector(SelectorClasses.Divider);
  }

  _initMenu() {
    new VirtualLayoutController();
  }

  _setMenusLayout(layout) {
    this._menus.forEach((it) => it.setLayout(layout));
  }

  _setDividerLayout(isLayoutColumn) {
    if (isLayoutColumn) {
      return this._divider.classList.add(MutationClasses.dividerLayoutColumn);
    }

    return this._divider.classList.remove(MutationClasses.dividerLayoutColumn);
  }

  _setDividerAlignSelfCenter(isAlignSelfCenter) {
    if (isAlignSelfCenter)
      return this._divider.classList.add(
        MutationClasses.dividerAlignSelfCenter
      );

    return this._divider.classList.remove(
      MutationClasses.dividerAlignSelfCenter
    );
  }

  _setHideIconName(isHideIconName) {
    this._menus.forEach((it) => it.setHideIconName(isHideIconName));
  }

  // public
  setLayoutColumn(isLayoutColumn) {
    if (isLayoutColumn) {
      this._setDividerLayout(true);
      return this._setMenusLayout("columnTwo");
    }

    this._setDividerLayout(null);
    return this._setMenusLayout(null);
  }

  setHideIconName(isHideIconName) {
    this._setHideIconName(isHideIconName);
    this._setDividerAlignSelfCenter(isHideIconName);
  }
}
