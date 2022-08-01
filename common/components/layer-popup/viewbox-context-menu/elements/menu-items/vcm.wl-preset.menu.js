import { createElementFromHTML } from "../../../../../utils/dom/CreateElementFromHTML.js";
import { BaseElement } from "../../../../base/index.js";
import { MenuTemplate } from "./common.js";
import { SubMenu, SubMenuItem } from "../../../../sub-menu/index.js";
import { Selectors as CustomContextMenuSelectors } from "../../../custom-context-menu/index.js";
import { Selectors as SubmenuSelectors } from "../../../../sub-menu/index.js";

export class ViewboxWLPresetMenu extends BaseElement {
  constructor() {
    super({ $element: createElementFromHTML(MenuTemplate) });

    this.#init();
  }

  #init() {
    const $root = this.getEl();

    const $label = createLabel("W/L Preset");
    const subMenuItems = createSubMenuItems();

    const subMenu = new SubMenu({ subMenuItems });
    subMenu.addClassName(CustomContextMenuSelectors.Submenu);

    $root.appendChild($label);
    $root.appendChild(subMenu.getEl());
  }
}

const createLabel = (label) => createElementFromHTML(`<p>${label}</p>`);
const createSubMenuItems = () => {
  return [
    new WlPresetMenuItem({ title: "Bone", name: "100/120" }),
    new WlPresetMenuItem({ title: "Brain", name: "80/40" }),
    new WlPresetMenuItem({ title: "Lungs", name: "1500/-600" }),
    new WlPresetMenuItem({ title: "Liver", name: "150/30" }),
  ].map((it) => new SubMenuItem({ menuItem: it }));
};

// W/L Preset Menu Item
class WlPresetMenuItem extends BaseElement {
  constructor({ title, name }) {
    super({ $element: createWlPresetMenuItem({ title, name }) });
  }
}

const createWlPresetMenuItem = ({ title, name }) => {
  const template = `
  <dl class="${SubmenuSelectors.DL}" title="${title}">
    <dt class="${SubmenuSelectors.Name}">${title}</dt>

    <dd class="${SubmenuSelectors.Name}">${name}</dd>
  </dl>
  `;

  return createElementFromHTML(template);
};
