import { ToolboxMenuItemsController } from "../menu-items-controller/index.js";
import { ToolboxMenu } from "../menu/menu.js";
import { MenusDivider } from "./menus-divider.js";

import {
  HideClassType,
  LayoutClassType,
  Selectors,
} from "../../common/index.js";

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
    [...document.querySelectorAll(`.${Selectors.Menu}`)].map(
      ($element) =>
        new ToolboxMenu({
          $element,
          isLayoutColumnTwo$: isLayoutColumn$,
          isHideIconName$,
        })
    );

    new MenusDivider({
      $element: this.#$root.querySelector(`.${Selectors.Divider}`),
      isLayoutColumn$,
      isAlignSelfCenter$: isHideIconName$,
    });

    new ToolboxMenuItemsController();
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
