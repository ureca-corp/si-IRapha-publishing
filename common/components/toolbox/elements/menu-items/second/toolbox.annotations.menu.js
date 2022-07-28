import { BaseElement } from "../../../../base/base-element.js";
import {
  AnnotationsMenu,
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

export class ToolboxAnnotationsMenu extends BaseElement {
  constructor() {
    super({ $element: document.createElement("div") });

    this.#init();
  }

  #init() {
    const $root = this.getRootElement();

    const menu = new AnnotationsMenu();

    const subMenuItems = [
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

    const subMenu = new SubMenu({
      subMenuItems,
      options: { isLayoutColumnTwo: true },
    });
    UIkit.drop(subMenu.getRootElement());

    $root.appendChild(menu.getRootElement());
    $root.appendChild(subMenu.getRootElement());
  }
}
