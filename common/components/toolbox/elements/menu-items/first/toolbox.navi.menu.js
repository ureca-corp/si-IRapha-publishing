import { BaseElement } from "../../../../base/base-element.js";
import {
  NaviMenu,
  NaviScoutLineMenu,
  NaviCrossLinkMenu,
  NaviInterStudyMenu,
} from "../../../../menus/menu-items/index.js";
import { SubMenu, SubMenuItem } from "../../../../sub-menu/index.js";

export class ToolboxNaviMenu extends BaseElement {
  constructor() {
    super({ $element: document.createElement("div") });

    this.#init();
  }

  #init() {
    const $root = this.getEl();

    const menu = new NaviMenu();

    const subMenuItems = [
      new NaviScoutLineMenu(),
      new NaviCrossLinkMenu(),
      new NaviInterStudyMenu(),
    ].map((it) => new SubMenuItem({ menuItem: it }));

    const subMenu = new SubMenu({ subMenuItems, options: { modal: true } });

    $root.appendChild(menu.getEl());
    $root.appendChild(subMenu.getEl());
  }
}
