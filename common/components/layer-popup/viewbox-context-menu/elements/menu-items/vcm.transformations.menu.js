import { createElementFromHTML } from "../../../../../utils/dom/index.js";
import { BaseElement } from "../../../../base/index.js";
import {
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
import { Selectors as CustomContextMenuSelectors } from "../../../custom-context-menu/index.js";
import { MenuTemplate } from "./common.js";

export class ViewboxTransformationsMenu extends BaseElement {
  constructor() {
    super({ $element: createElementFromHTML(MenuTemplate) });

    this.#init();
  }

  #init() {
    const $root = this.getEl();

    const $label = createLabel("Transformations");
    const subMenuItems = createSubMenuItems();

    const subMenu = new SubMenu({
      subMenuItems,
      options: { isLayoutColumnTwo: true },
    });
    subMenu.addClassName(CustomContextMenuSelectors.Submenu);

    $root.appendChild($label);
    $root.appendChild(subMenu.getEl());
  }
}

const createLabel = (label) => createElementFromHTML(`<p>${label}</p>`);

const createSubMenuItems = () => {
  return [
    new TransformationsReverseMenu(),
    new TransformationsFlipMenu(),
    new TransformationsRotateLeftMenu(),
    new TransformationsRotateRightMenu(),
    new TransformationsInvertMenu(),
    new TransformationsSharpeningMenu(),
    new TransformationsSmoothingMenu(),
    new TransformationsPseudoColorMenu(),
  ].map((it) => new SubMenuItem({ menuItem: it }));
};
