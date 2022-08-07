import { ToolboxMenu } from "../menu/menu.js";
import { MenusDivider } from "./menus-divider.js";

import { createElementFromHTML } from "../../../../utils/dom/index.js";
import { BaseElement } from "../../../base/base-element.js";
import { HideAttr, LayoutAttr, Selectors } from "../../common/index.js";
import { getFirstMenus, getSecondMenus } from "../menu/get-menus.js";

const { tap } = rxjs;

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

export class ToolboxMenusContainer extends BaseElement {
  #states;

  constructor({ states }) {
    super({ $element: new ToolboxMenusContainerComp() });
    this.#states = states;

    this.#init();
  }

  // private
  #init() {
    this.#initChilds();
    this.#initStates();
  }

  #initChilds() {
    const $root = this.getEl();
    const { isLayoutColumn$, isHideIconName$ } = this.#states;

    const $firstMenu = new ToolboxMenu({
      states: {
        isLayoutColumnTwo$: isLayoutColumn$,
        isHideIconName$,
      },
      items: getFirstMenus(),
    }).getEl();

    const $secondMenu = new ToolboxMenu({
      states: {
        isLayoutColumnTwo$: isLayoutColumn$,
        isHideIconName$,
      },
      items: getSecondMenus(),
    }).getEl();

    const $menusDivider = new MenusDivider({
      states: {
        isLayoutColumn$,
        isAlignSelfCenter$: isHideIconName$,
      },
    }).getEl();

    $root.append(...[$firstMenu, $menusDivider, $secondMenu]);
  }

  #initStates() {
    const $root = this.getEl();
    const { isLayoutColumn$, shrinkDirection$ } = this.#states;

    isLayoutColumn$
      .pipe(
        tap((isLayoutColumn = false) =>
          isLayoutColumn
            ? $root.setAttribute(LayoutAttr.Key, LayoutAttr.Column)
            : $root.removeAttribute(LayoutAttr.Key)
        )
      )
      .subscribe();

    shrinkDirection$
      .pipe(
        tap((shrinkDirection) =>
          shrinkDirection
            ? $root.setAttribute(HideAttr.Key, true)
            : $root.removeAttribute(HideAttr.Key)
        )
      )
      .subscribe();
  }
}

function ToolboxMenusContainerComp() {
  return createElementFromHTML(
    `<div class="${Selectors.MenusContainer}"></div>`
  );
}
