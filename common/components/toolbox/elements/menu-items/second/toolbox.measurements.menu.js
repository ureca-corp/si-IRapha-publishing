import { BaseElement } from "../../../../base/base-element.js";
import {
  MeasurementsMenu,
  MeasurementsPolyLineMenu,
  MeasurementsFreeLineMenu,
  MeasurementsCenterLineMenu,
  MeasurementsCurveLineMenu,
  MeasurementsRectangleMenu,
  MeasurementsEllipseMenu,
  MeasurementsAnglePointMenu,
  MeasurementsCobbsAngleMenu,
  MeasurementsCtRatioMenu,
  MeasurementsPixelValueMenu,
  MeasurementsMagnifyingMenu,
} from "../../../../menus/menu-items/index.js";
import { SubMenu, SubMenuItem } from "../../../../sub-menu/index.js";

export class ToolboxMeasurementsMenu extends BaseElement {
  constructor() {
    super({ $element: document.createElement("div") });

    this.#init();
  }

  #init() {
    const $root = this.getRootElement();

    const menu = new MeasurementsMenu();

    const subMenuItems = [
      new MeasurementsPolyLineMenu(),
      new MeasurementsFreeLineMenu(),
      new MeasurementsCenterLineMenu(),
      new MeasurementsCurveLineMenu(),
      new MeasurementsRectangleMenu(),
      new MeasurementsEllipseMenu(),
      new MeasurementsAnglePointMenu(),
      new MeasurementsCobbsAngleMenu(),
      new MeasurementsCtRatioMenu(),
      new MeasurementsPixelValueMenu(),
      new MeasurementsMagnifyingMenu(),
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
