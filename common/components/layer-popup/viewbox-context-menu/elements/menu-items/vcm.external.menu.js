import { createElementFromHTML } from "../../../../../utils/dom/CreateElementFromHTML.js";
import { BaseElement } from "../../../../base/index.js";
import { BaseMenuItem } from "../../../../menus/menu-items/index.js";
import { SubMenu, SubMenuItem } from "../../../../sub-menu/index.js";
import { Selectors as CustomContextMenuSelectors } from "../../../custom-context-menu/index.js";
import { MenuTemplate } from "./common.js";

const Label = "External";
const Items = ["Best Image", "Sample", "Setting"];

export class ViewboxExternalMenu extends BaseElement {
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
  return Items.map((item) => new ExternalMenuItem({ name: item })).map(
    (menuItem) => new SubMenuItem({ menuItem })
  );
};

// External Menu Item
class ExternalMenuItem extends BaseMenuItem {
  constructor({ name }) {
    super({
      data: { name },
      options: { horizontal: true },
    });
  }
}
