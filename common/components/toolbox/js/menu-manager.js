import { ToolboxMenuItemsController } from "./menu-items/index.js";
import { ToolboxMenu } from "./menu.js";

const Selectors = {
  Menu: "irapha-toolbox__menu",
  Divider: "irapha-toolbox__divider",

  dividerLayoutColumn: "--layout--column",
  dividerAlignSelfCenter: "--align--self-center",
};

export class ToolboxMenusManager {
  #menus;
  #divider;

  constructor({ isLayoutColumn$, isHideIconName$ }) {
    this.#init();
    this.#initMenuItemsController();

    isLayoutColumn$.subscribe((isLayoutColumn) =>
      this.#handleLayoutChange(isLayoutColumn)
    );

    isHideIconName$.subscribe((isHideIconName) =>
      this.#handleHideIconNameChange(isHideIconName)
    );
  }

  // private
  #init() {
    const menus = [...document.querySelectorAll(`.${Selectors.Menu}`)].map(
      (it) => new ToolboxMenu(it)
    );
    this.#menus = menus;

    this.#divider = document.querySelector(`.${Selectors.Divider}`);
  }

  #initMenuItemsController() {
    new ToolboxMenuItemsController();
  }

  #setMenusLayout(layout) {
    this.#menus.forEach((it) => it.setLayout(layout));
  }

  #setDividerLayout(isLayoutColumn) {
    if (isLayoutColumn) {
      return this.#divider.classList.add(Selectors.dividerLayoutColumn);
    }

    return this.#divider.classList.remove(Selectors.dividerLayoutColumn);
  }

  #setDividerAlignSelfCenter(isAlignSelfCenter) {
    if (isAlignSelfCenter)
      return this.#divider.classList.add(Selectors.dividerAlignSelfCenter);

    return this.#divider.classList.remove(Selectors.dividerAlignSelfCenter);
  }

  #setHideIconName(isHideIconName) {
    this.#menus.forEach((it) => it.setHideIconName(isHideIconName));
  }

  // handler
  #handleLayoutChange(isLayoutColumn) {
    if (isLayoutColumn) return this.setLayoutColumn(true);

    return this.setLayoutColumn(null);
  }

  #handleHideIconNameChange(isHideIconName) {
    this.#setHideIconName(isHideIconName);
    this.#setDividerAlignSelfCenter(isHideIconName);
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
}
