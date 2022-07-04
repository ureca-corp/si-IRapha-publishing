import { ToolboxMenuItemsController } from "./menu-items/index.js";
import { ToolboxMenu } from "./menu.js";

const Selectors = {
  Menu: "irapha-toolbox__menu",
  Divider: "irapha-toolbox__divider",

  LayoutColumn: "--layout--column",
  Hide: "--hide",
  DividerAlignSelfCenter: "--align--self-center",
};

export class ToolboxMenusManager {
  #root;
  #menus;
  #divider;

  constructor({ element, isLayoutColumn$, isHideIconName$, shrinkDirection$ }) {
    this.#root = element;

    this.#init();
    this.#initMenuItemsController();

    isLayoutColumn$.subscribe((isLayoutColumn) =>
      this.#handleLayoutChange(isLayoutColumn)
    );

    isHideIconName$.subscribe((isHideIconName) =>
      this.#handleHideIconNameChange(isHideIconName)
    );

    shrinkDirection$.subscribe((shrinkDirection) =>
      this.#handleShrinkDirectionChange(shrinkDirection)
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

  #setLayoutColumn() {
    this.#root.classList.add(Selectors.LayoutColumn);

    this.#setMenusLayout("columnTwo");
    this.#setDividerLayout(true);
  }

  #removeLayoutColumn() {
    this.#root.classList.remove(Selectors.LayoutColumn);

    this.#setDividerLayout(null);
    this.#setMenusLayout(null);
  }

  #hide() {
    this.#root.classList.add(Selectors.Hide);
  }

  #visible() {
    this.#root.classList.remove(Selectors.Hide);
  }

  // divider control
  #setDividerLayout(isLayoutColumn) {
    if (isLayoutColumn) {
      return this.#divider.classList.add(Selectors.LayoutColumn);
    }

    return this.#divider.classList.remove(Selectors.LayoutColumn);
  }

  #setDividerAlignSelfCenter(isAlignSelfCenter) {
    if (isAlignSelfCenter)
      return this.#divider.classList.add(Selectors.DividerAlignSelfCenter);

    return this.#divider.classList.remove(Selectors.DividerAlignSelfCenter);
  }

  // menus control
  #setMenusLayout(layout) {
    this.#menus.forEach((it) => it.setLayout(layout));
  }

  #setHideIconName(isHideIconName) {
    this.#menus.forEach((it) => it.setHideIconName(isHideIconName));
  }

  // handler
  #handleLayoutChange(isLayoutColumn) {
    if (isLayoutColumn) return this.#setLayoutColumn();

    return this.#removeLayoutColumn();
  }

  #handleHideIconNameChange(isHideIconName) {
    this.#setHideIconName(isHideIconName);
    this.#setDividerAlignSelfCenter(isHideIconName);
  }

  #handleShrinkDirectionChange(shrinkDirection) {
    if (!shrinkDirection) return this.#visible();

    return this.#hide();
  }
}
