import { createElementFromHTML } from "../../../../../../utils/dom/index.js";
import { BaseElement } from "../../../../../base/index.js";
import { BaseMenuItem } from "../../../../../menus/menu-items/index.js";
import { SubMenu, SubMenuItem } from "../../../../../sub-menu/index.js";
import { CustomContextMenuSelectors } from "../../../../context-menus/index.js";
import { MenuTemplate } from "./common.js";

const Label = "Save";
const Items = ["Save Annotations", "Save As"];

export class ViewboxSaveMenu extends BaseElement {
  constructor() {
    super({ $element: createElementFromHTML(MenuTemplate) });

    this.#init();
  }

  #init() {
    const $root = this.getEl();

    const $label = createLabel(Label);
    const subMenuItems = createSubMenuItems();

    const subMenu = new SubMenu({ subMenuItems });
    subMenu.addClassName(CustomContextMenuSelectors.Submenu);

    $root.appendChild($label);
    $root.appendChild(subMenu.getEl());
  }
}

const createLabel = (label) => createElementFromHTML(`<p>${label}</p>`);
const createSubMenuItems = () => {
  return Items.map((item) => new SaveMenuItem({ name: item })).map(
    (menuItem) => new SubMenuItem({ menuItem })
  );
};

// Save Menu Item
class SaveMenuItem extends BaseMenuItem {
  constructor({ name }) {
    super({
      data: { name },
      options: { horizontal: true },
    });
  }
}
