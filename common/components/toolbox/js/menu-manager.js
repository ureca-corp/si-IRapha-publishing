import { ToolboxMenuItemsController } from "./menu-items/index.js";
import { ToolboxMenu } from "./menu.js";

const SelectorClasses = {
  Menu: ".irapha-toolbox__menu",
  Divider: ".irapha-toolbox__divider",
};

const MutationClasses = {
  dividerLayoutColumn: "is-layout--column",
  dividerAlignSelfCenter: "is-state--align-self-center",
};

export class ToolboxMenusManager {
  #menus;
  #divider;

  constructor() {
    this.#init();
    this.#initMenuItemsController();
  }

  // private
  #init() {
    const menus = [...document.querySelectorAll(SelectorClasses.Menu)].map(
      (it) => new ToolboxMenu(it)
    );
    this.#menus = menus;

    this.#divider = document.querySelector(SelectorClasses.Divider);
  }

  #initMenuItemsController() {
    new ToolboxMenuItemsController();
  }

  #setMenusLayout(layout) {
    this.#menus.forEach((it) => it.setLayout(layout));
  }

  #setDividerLayout(isLayoutColumn) {
    if (isLayoutColumn) {
      return this.#divider.classList.add(MutationClasses.dividerLayoutColumn);
    }

    return this.#divider.classList.remove(MutationClasses.dividerLayoutColumn);
  }

  #setDividerAlignSelfCenter(isAlignSelfCenter) {
    if (isAlignSelfCenter)
      return this.#divider.classList.add(
        MutationClasses.dividerAlignSelfCenter
      );

    return this.#divider.classList.remove(
      MutationClasses.dividerAlignSelfCenter
    );
  }

  #setHideIconName(isHideIconName) {
    this.#menus.forEach((it) => it.setHideIconName(isHideIconName));
  }

  // public
  setLayoutColumn(isLayoutColumn) {
    if (isLayoutColumn) {
      this.#setDividerLayout(true);
      return this.#setMenusLayout("columnTwo");
    }

    this.#setDividerLayout(null);
    return this.#setMenusLayout(null);
  }

  setHideIconName(isHideIconName) {
    this.#setHideIconName(isHideIconName);
    this.#setDividerAlignSelfCenter(isHideIconName);
  }
}
