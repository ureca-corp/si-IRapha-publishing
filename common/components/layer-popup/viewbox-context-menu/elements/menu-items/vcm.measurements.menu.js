import { createElementFromHTML } from "../../../../../utils/dom/CreateElementFromHTML.js";
import { BaseElement } from "../../../../base/index.js";
import {
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
import { Selectors as CustomContextMenuSelectors } from "../../../custom-context-menu/index.js";
import { MenuTemplate } from "./common.js";

export class ViewboxMeasurementsMenu extends BaseElement {
  constructor() {
    super({ $element: createElementFromHTML(MenuTemplate) });

    this.#init();
  }

  #init() {
    const $root = this.getEl();

    const $label = createLabel("Measurements");
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
};
