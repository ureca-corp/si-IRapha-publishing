import { createElementFromHTML } from "../../../../../utils/dom/CreateElementFromHTML.js";
import { BaseElement } from "../../../../base/index.js";
import {
  AnnotationsLineMenu,
  AnnotationsArrowLineMenu,
  AnnotationsCurveMenu,
  AnnotationsArrowCurveMenu,
  AnnotationsFreeLineMenu,
  AnnotationsClosedShapeMenu,
  AnnotationsCircleMenu,
  AnnotationsEllipseMenu,
  AnnotationsRectangleMenu,
  AnnotationsLocalizationMenu,
  AnnotationsTextMenu,
} from "../../../../menus/menu-items/index.js";
import { SubMenu, SubMenuItem } from "../../../../sub-menu/index.js";
import { Selectors as CustomContextMenuSelectors } from "../../../custom-context-menu/index.js";
import { MenuTemplate } from "./common.js";

export class ViewboxAnnotationsMenu extends BaseElement {
  constructor() {
    super({ $element: createElementFromHTML(MenuTemplate) });

    this.#init();
  }

  #init() {
    const $root = this.getEl();

    const $label = createLabel("Annotations");
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
    new AnnotationsLineMenu(),
    new AnnotationsArrowLineMenu(),
    new AnnotationsCurveMenu(),
    new AnnotationsArrowCurveMenu(),
    new AnnotationsFreeLineMenu(),
    new AnnotationsClosedShapeMenu(),
    new AnnotationsCircleMenu(),
    new AnnotationsEllipseMenu(),
    new AnnotationsRectangleMenu(),
    new AnnotationsLocalizationMenu(),
    new AnnotationsTextMenu(),
  ].map((it) => new SubMenuItem({ menuItem: it }));
};
