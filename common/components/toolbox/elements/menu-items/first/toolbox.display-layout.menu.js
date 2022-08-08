import { BaseElement } from "../../../../base/index.js";
import {
  DisplayExtendLayoutMenu,
  DisplayLayoutConfigMenu,
  DisplayLayoutMenu,
  DisplayLayoutOneByOneMenu,
  DisplayLayoutOneByTwoMenu,
  DisplayLayoutTwoByOneMenu,
  DisplayLayoutTwoByTwoMenu,
} from "../../../../menus/menu-items/index.js";
import { SubMenu, SubMenuItem } from "../../../../sub-menu/index.js";

export class ToolboxDisplayLayoutMenu extends BaseElement {
  constructor() {
    super({ $element: document.createElement("div") });

    this.#init();
  }

  #init() {
    const $root = this.getEl();

    const displayLayoutMenu = new DisplayLayoutMenu();

    const subMenuItems = [
      new DisplayLayoutOneByOneMenu(),
      new DisplayLayoutOneByTwoMenu(),
      new DisplayLayoutTwoByOneMenu(),
      new DisplayLayoutTwoByTwoMenu(),
      new DisplayExtendLayoutMenu(),
      new DisplayLayoutConfigMenu(),
    ].map((it) => new SubMenuItem({ menuItem: it }));

    const $subMenu = new SubMenu({ subMenuItems }).getEl();
    UIkit.drop($subMenu);

    $root.appendChild(displayLayoutMenu.getEl());
    $root.appendChild($subMenu);
  }
}
