import { BaseElement } from "../../../../base/base-element.js";
import {
  UtilityMenu,
  UtilityResetMenu,
  UtilityDicomMenu,
  UtilityCopyMenu,
  UtilitySettingMenu,
} from "../../../../menus/menu-items/index.js";
import { SubMenu, SubMenuItem } from "../../../../sub-menu/index.js";

export class ToolboxUtilityMenu extends BaseElement {
  constructor() {
    super({ $element: document.createElement("div") });

    this.#init();
  }

  #init() {
    const $root = this.getRootElement();

    const menu = new UtilityMenu();

    const subMenuItems = [
      new UtilityResetMenu(),
      new UtilityDicomMenu(),
      new UtilityCopyMenu(),
      new UtilitySettingMenu(),
    ].map((it) => new SubMenuItem({ menuItem: it }));

    const subMenu = new SubMenu({ subMenuItems });
    UIkit.drop(subMenu.getRootElement());

    $root.appendChild(menu.getRootElement());
    $root.appendChild(subMenu.getRootElement());
  }
}
