import { BaseElement } from "../../../../base/base-element.js";
import {
  TransformationsMenu,
  TransformationsReverseMenu,
  TransformationsFlipMenu,
  TransformationsRotateLeftMenu,
  TransformationsRotateRightMenu,
  TransformationsInvertMenu,
  TransformationsSharpeningMenu,
  TransformationsSmoothingMenu,
  TransformationsPseudoColorMenu,
} from "../../../../menus/menu-items/index.js";
import { SubMenu, SubMenuItem } from "../../../../sub-menu/index.js";

export class ToolboxTransformationsMenu extends BaseElement {
  constructor() {
    super({ $element: document.createElement("div") });

    this.#init();
  }

  #init() {
    const $root = this.getRootElement();

    const menu = new TransformationsMenu();

    const subMenuItems = [
      new TransformationsReverseMenu(),
      new TransformationsFlipMenu(),
      new TransformationsRotateLeftMenu(),
      new TransformationsRotateRightMenu(),
      new TransformationsInvertMenu(),
      new TransformationsSharpeningMenu(),
      new TransformationsSmoothingMenu(),
      new TransformationsPseudoColorMenu(),
    ].map((it) => new SubMenuItem({ menuItem: it }));

    const subMenu = new SubMenu({
      subMenuItems,
      options: { isLayoutColumnTwo: true },
    });
    UIkit.drop(subMenu.getRootElement());

    $root.appendChild(menu.getRootElement());
    $root.appendChild(subMenu.getRootElement());
  }
}
