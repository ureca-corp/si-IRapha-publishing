import { BaseElement } from "../../../../base/index.js";
import {
  DisplayLayoutConfigMenu,
  DisplayLayoutMenu,
  DisplayLayoutOneByOneMenu,
  DisplayLayoutOneByTwoMenu,
  DisplayLayoutTwoByOneMenu,
  DisplayLayoutTwoByTwoMenu,
} from "../../../../menus/menu-items/index.js";
import { SubMenuItem, SubMenu } from "../../../../sub-menu/index.js";

export class ToolboxDisplayLayoutMenu extends BaseElement {
  constructor() {
    super({ $element: document.createElement("div") });

    this.#init();
  }

  #init() {
    const $root = this.getRootElement();

    const displayLayoutMenu = new DisplayLayoutMenu();

    const subMenuItems = [
      new DisplayLayoutOneByOneMenu(),
      new DisplayLayoutOneByTwoMenu(),
      new DisplayLayoutTwoByOneMenu(),
      new DisplayLayoutTwoByTwoMenu(),
      new DisplayLayoutConfigMenu(),
    ].map((it) => new SubMenuItem({ menuItem: it }));

    const subMenu = new SubMenu({ subMenuItems });
    UIkit.drop(subMenu.getRootElement());

    $root.appendChild(displayLayoutMenu.getRootElement());
    $root.appendChild(subMenu.getRootElement());
  }
}
