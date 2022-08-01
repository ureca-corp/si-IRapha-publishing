import { createElementFromHTML } from "../../../../../utils/dom/CreateElementFromHTML.js";
import { BaseElement } from "../../../../base/index.js";
import {
  VirtualLayoutHorizontalMenu,
  VirtualLayoutNormalMenu,
  VirtualLayoutVerticalMenu,
} from "../../../../menus/menu-items/index.js";
import { SubMenu, SubMenuItem } from "../../../../sub-menu/index.js";
import { Selectors as CustomContextMenuSelectors } from "../../../custom-context-menu/index.js";
import { MenuTemplate } from "./common.js";

export class ViewboxVirtualLayoutMenu extends BaseElement {
  constructor() {
    super({ $element: createElementFromHTML(MenuTemplate) });

    this.#init();
  }

  #init() {
    const $root = this.getEl();

    const $label = createLabel("VL");
    const subMenuItems = createSubMenuItems();

    const subMenu = new SubMenu({ subMenuItems });
    subMenu.addClassName(CustomContextMenuSelectors.Submenu);

    $root.appendChild($label);
    $root.appendChild(subMenu.getEl());
  }
}

const createLabel = (label) => createElementFromHTML(`<p>${label}</p>`);

const createSubMenuItems = () => {
  return [
    new VirtualLayoutNormalMenu(),
    new VirtualLayoutVerticalMenu(),
    new VirtualLayoutHorizontalMenu(),
  ].map((it) => new SubMenuItem({ menuItem: it }));
};
