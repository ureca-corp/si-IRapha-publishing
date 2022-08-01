import { ToolboxMenu } from "../menu/menu.js";
import { MenusDivider } from "./menus-divider.js";

import {
  HideClassType,
  LayoutClassType,
  Selectors,
} from "../../common/index.js";
import { getFirstMenus, getSecondMenus } from "../menu/get-menus.js";
import { BaseElement } from "../../../base/base-element.js";
import { createElementFromHTML } from "../../../../utils/dom/CreateElementFromHTML.js";

/**
 * Constructor types
 *
 * @type $element: Element
 *
 * @type isLayoutColumn$: BehaviorSubject<boolean>
 *
 * @type isHideIconName$: BehaviorSubject<boolean>
 *
 * @type shrinkDirection$: BehaviorSubject<Truthy || Falsy>
 */

const Template = `
<div class="${Selectors.MenusContainer}"></div>
`;

export class ToolboxMenusContainer extends BaseElement {
  #states;

  constructor({ states }) {
    super({ $element: createElementFromHTML(Template) });
    this.#states = states;

    this.#init();
  }

  // private
  #init() {
    this.#initChilds();
    this.#initStates();
  }

  #initChilds() {
    const { isLayoutColumn$, isHideIconName$ } = this.#states;

    const firstMenu = new ToolboxMenu({
      states: {
        isLayoutColumnTwo$: isLayoutColumn$,
        isHideIconName$,
      },
      items: getFirstMenus(),
    });

    const secondMenu = new ToolboxMenu({
      states: {
        isLayoutColumnTwo$: isLayoutColumn$,
        isHideIconName$,
      },
      items: getSecondMenus(),
    });

    const menusDivider = new MenusDivider({
      states: {
        isLayoutColumn$,
        isAlignSelfCenter$: isHideIconName$,
      },
    });

    this.getEl().append(
      ...[firstMenu.getEl(), menusDivider.getEl(), secondMenu.getEl()]
    );
  }

  #initStates() {
    const { isLayoutColumn$, shrinkDirection$ } = this.#states;

    isLayoutColumn$.subscribe((isLayoutColumn) =>
      this.#handleLayoutChange(isLayoutColumn)
    );

    shrinkDirection$.subscribe((shrinkDirection) =>
      this.#handleShrinkDirectionChange(shrinkDirection)
    );
  }

  // handler
  #handleLayoutChange(isLayoutColumn) {
    const rootClassList = this.getEl().classList;

    if (isLayoutColumn) return rootClassList.add(LayoutClassType.Column);
    return rootClassList.remove(LayoutClassType.Column);
  }

  #handleShrinkDirectionChange(shrinkDirection) {
    const rootClassList = this.getEl().classList;

    if (!shrinkDirection) return rootClassList.remove(HideClassType.Hide);
    return rootClassList.add(HideClassType.Hide);
  }
}
