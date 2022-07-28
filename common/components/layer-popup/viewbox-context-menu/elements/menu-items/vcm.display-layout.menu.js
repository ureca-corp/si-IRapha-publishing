import { createElementFromHTML } from "../../../../../utils/dom/CreateElementFromHTML.js";
import { BaseElement } from "../../../../base/index.js";
import {
  DisplayLayoutConfigMenu,
  DisplayLayoutOneByOneMenu,
  DisplayLayoutOneByTwoMenu,
  DisplayLayoutTwoByOneMenu,
  DisplayLayoutTwoByTwoMenu,
} from "../../../../menus/menu-items/index.js";
import { SubMenu, SubMenuItem } from "../../../../sub-menu/index.js";
import { Selectors as CustomContextMenuSelectors } from "../../../custom-context-menu/index.js";
import { MenuTemplate } from "./common.js";

export class ViewboxDisplayLayoutMenu extends BaseElement {
  constructor() {
    super({ $element: createElementFromHTML(MenuTemplate) });

    this.#init();
  }

  #init() {
    const $root = this.getRootElement();

    const $label = createLabel("Layout");
    const subMenuItems = createSubMenuItems();

    const subMenu = new SubMenu({ subMenuItems });
    subMenu.addClassName(CustomContextMenuSelectors.Submenu);

    $root.appendChild($label);
    $root.appendChild(subMenu.getRootElement());
  }
}

const createLabel = (label) => createElementFromHTML(`<p>${label}</p>`);

const createSubMenuItems = () => {
  return [
    new DisplayLayoutOneByOneMenu(),
    new DisplayLayoutOneByTwoMenu(),
    new DisplayLayoutTwoByOneMenu(),
    new DisplayLayoutTwoByTwoMenu(),
    new DisplayLayoutConfigMenu(),
  ].map((it) => new SubMenuItem({ menuItem: it }));
};
