import { createElementFromHTML } from "../../../../../utils/dom/CreateElementFromHTML.js";
import { BaseElement } from "../../../../base/index.js";
import { BaseMenuItem } from "../../../../menus/menu-items/index.js";
import { SubMenu, SubMenuItem } from "../../../../sub-menu/index.js";
import { Selectors as CustomContextMenuSelectors } from "../../../custom-context-menu/index.js";
import { MenuTemplate } from "./common.js";

const Label = "Move";
const Items = [
  "Move to First",
  "Move to Previous",
  "Move to Next",
  "Move to Last",
];

export class ViewboxMoveMenu extends BaseElement {
  constructor() {
    super({ $element: createElementFromHTML(MenuTemplate) });

    this.#init();
  }

  #init() {
    const $root = this.getRootElement();

    const $label = createLabel(Label);
    const subMenuItems = createSubMenuItems();

    const subMenu = new SubMenu({ subMenuItems });
    subMenu.addClassName(CustomContextMenuSelectors.Submenu);

    $root.appendChild($label);
    $root.appendChild(subMenu.getRootElement());
  }
}

const createLabel = (label) => createElementFromHTML(`<p>${label}</p>`);
const createSubMenuItems = () => {
  return Items.map((item) => new MoveMenuItem({ name: item })).map(
    (menuItem) => new SubMenuItem({ menuItem })
  );
};

// Move Menu Item
class MoveMenuItem extends BaseMenuItem {
  constructor({ name }) {
    super({
      data: { name },
      options: { horizontal: true },
    });
  }
}
