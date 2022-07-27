import { BaseElement } from "../../../../base/index.js";
import {
  VirtualLayoutMenu,
  VirtualLayoutNormalMenu,
  VirtualLayoutVerticalMenu,
  VirtualLayoutHorizontalMenu,
} from "../../../../menus/menu-items/index.js";
import { SubMenu, SubMenuItem } from "../../../../sub-menu/index.js";

export class ToolboxVirtualLayoutMenu extends BaseElement {
  constructor() {
    super({ $element: document.createElement("div") });

    this.#init();
  }

  #init() {
    const $root = this.getRootElement();

    const virtualLayoutMenu = new VirtualLayoutMenu();

    const subMenuItems = [
      new VirtualLayoutNormalMenu(),
      new VirtualLayoutVerticalMenu(),
      new VirtualLayoutHorizontalMenu(),
    ].map((it) => new SubMenuItem({ menuItem: it }));

    const subMenu = new SubMenu({ subMenuItems });
    UIkit.drop(subMenu.getRootElement());

    $root.appendChild(virtualLayoutMenu.getRootElement());
    $root.appendChild(subMenu.getRootElement());
  }
}
