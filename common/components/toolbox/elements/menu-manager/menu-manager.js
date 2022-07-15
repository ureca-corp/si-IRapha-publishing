import { ToolboxMenuItemsController } from "../menu-items-controller/index.js";
import { ToolboxMenu } from "../menu/menu.js";

import {
  Selectors,
  LayoutClassType,
  AlignClassType,
  HideClassType,
  LayoutType,
} from "../../common/index.js";

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
    this.#root.classList.add(LayoutClassType.Column);

    this.#setMenusLayout(LayoutType.ColumnTwo);
    this.#setDividerLayout(true);
  }

  #removeLayoutColumn() {
    this.#root.classList.remove(LayoutClassType.Column);

    this.#setDividerLayout(null);
    this.#setMenusLayout(null);
  }

  #hide() {
    this.#root.classList.add(HideClassType.Hide);
  }

  #visible() {
    this.#root.classList.remove(HideClassType.Hide);
  }

  // divider control
  #setDividerLayout(isLayoutColumn) {
    if (isLayoutColumn) {
      return this.#divider.classList.add(LayoutClassType.Column);
    }

    return this.#divider.classList.remove(LayoutClassType.Column);
  }

  #setDividerAlignSelfCenter(isAlignSelfCenter) {
    if (isAlignSelfCenter)
      return this.#divider.classList.add(AlignClassType.SelfCenter);

    return this.#divider.classList.remove(AlignClassType.SelfCenter);
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
