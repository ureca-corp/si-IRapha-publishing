import { ToolboxMenuItemsController } from "../menu-items-controller/index.js";
import { ToolboxMenu } from "../menu/menu.js";
import { MenusDivider } from "./menus-divider.js";

import {
  HideClassType,
  LayoutClassType,
  Selectors,
} from "../../common/index.js";
import { getFirstMenus } from "../menu/get-menus.js";

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
export class ToolboxMenusContainer {
  #$root;

  constructor({
    $element,
    isLayoutColumn$,
    isHideIconName$,
    shrinkDirection$,
  }) {
    this.#$root = $element;
    this.#init({ isLayoutColumn$, isHideIconName$ });

    isLayoutColumn$.subscribe((isLayoutColumn) =>
      this.#handleLayoutChange(isLayoutColumn)
    );

    shrinkDirection$.subscribe((shrinkDirection) =>
      this.#handleShrinkDirectionChange(shrinkDirection)
    );
  }

  // private
  #init({ isLayoutColumn$, isHideIconName$ }) {
    const firstMenu = new ToolboxMenu({
      states: {
        isLayoutColumnTwo$: isLayoutColumn$,
        isHideIconName$,
      },
      items: getFirstMenus(),
    });

    const menusDivider = new MenusDivider({
      states: {
        isLayoutColumn$,
        isAlignSelfCenter$: isHideIconName$,
      },
    });

    this.#$root.append(
      ...[firstMenu.getRootElement(), menusDivider.getRootElement()]
    );
  }

  // handler
  #handleLayoutChange(isLayoutColumn) {
    const rootClassList = this.#$root.classList;

    if (isLayoutColumn) return rootClassList.add(LayoutClassType.Column);
    return rootClassList.remove(LayoutClassType.Column);
  }

  #handleShrinkDirectionChange(shrinkDirection) {
    const rootClassList = this.#$root.classList;

    if (!shrinkDirection) return rootClassList.remove(HideClassType.Hide);
    return rootClassList.add(HideClassType.Hide);
  }
}
