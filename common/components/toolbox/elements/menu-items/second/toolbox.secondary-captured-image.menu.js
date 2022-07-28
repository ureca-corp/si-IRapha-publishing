import { BaseElement } from "../../../../base/base-element.js";
import {
  SecondaryCapturedImageMenu,
  SciCaptureImageMenu,
  SciCaptureLayoutMenu,
  SciCaptureViewerMenu,
} from "../../../../menus/menu-items/index.js";
import { SubMenu, SubMenuItem } from "../../../../sub-menu/index.js";

export class ToolboxSecondaryCapturedImageMenu extends BaseElement {
  constructor() {
    super({ $element: document.createElement("div") });

    this.#init();
  }

  #init() {
    const $root = this.getRootElement();

    const menu = new SecondaryCapturedImageMenu();

    const subMenuItems = [
      new SciCaptureImageMenu(),
      new SciCaptureLayoutMenu(),
      new SciCaptureViewerMenu(),
    ].map((it) => new SubMenuItem({ menuItem: it }));

    const subMenu = new SubMenu({ subMenuItems });
    UIkit.drop(subMenu.getRootElement());

    $root.appendChild(menu.getRootElement());
    $root.appendChild(subMenu.getRootElement());
  }
}