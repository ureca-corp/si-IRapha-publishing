import { BaseElement } from "../../../../base/base-element.js";
import {
  DisplayInfoAnnotationMenu,
  DisplayInfoHideAllMenu,
  DisplayInfoInformationMenu,
  DisplayInfoMeasurementsMenu,
  DisplayInfoMenu,
  DisplayInfoShowAllMenu,
} from "../../../../menus/menu-items/index.js";
import { SubMenu, SubMenuItem } from "../../../../sub-menu/index.js";

export class ToolboxDisplayInfoMenu extends BaseElement {
  constructor() {
    super({ $element: document.createElement("div") });

    this.#init();
  }

  #init() {
    const $root = this.getEl();

    const menu = new DisplayInfoMenu();

    const subMenuItems = [
      new DisplayInfoShowAllMenu(),
      new DisplayInfoHideAllMenu(),
      new DisplayInfoInformationMenu(),
      new DisplayInfoAnnotationMenu(),
      new DisplayInfoMeasurementsMenu(),
    ].map((it) => new SubMenuItem({ menuItem: it }));

    const subMenu = new SubMenu({ subMenuItems });
    UIkit.drop(subMenu.getEl());

    $root.appendChild(menu.getEl());
    $root.appendChild(subMenu.getEl());
  }
}
