import { createElementFromHTML } from "../../../../utils/dom/index.js";
import { BaseElement } from "../../../base/base-element.js";
import { AlignAttr, LayoutAttr, Selectors } from "../../common/index.js";

const { tap } = rxjs;

/**
 * Constructor types
 *
 * @type isLayoutColumn$: BehaviorSubject<boolean>
 *
 * @type isAlignSelfCenter$: BehaviorSubject<boolean>
 */
export class MenusDivider extends BaseElement {
  #states;

  constructor({ states }) {
    super({ $element: new MenusDividerComp() });
    this.#states = states;

    this.#initStates();
  }

  #initStates() {
    if (!this.#states) return;

    const $root = this.getEl();
    const { isLayoutColumn$, isAlignSelfCenter$ } = this.#states;

    isLayoutColumn$
      .pipe(
        tap((isLayoutColumn = false) =>
          isLayoutColumn
            ? $root.setAttribute(LayoutAttr.Key, LayoutAttr.Column)
            : $root.removeAttribute(LayoutAttr.Key)
        )
      )
      .subscribe();

    isAlignSelfCenter$
      .pipe(
        tap((isAlignSelfCenter) =>
          isAlignSelfCenter
            ? $root.setAttribute(AlignAttr.Key, AlignAttr.SelfCenter)
            : $root.removeAttribute(AlignAttr.Key)
        )
      )
      .subscribe();
  }
}

// =================================================================
function MenusDividerComp() {
  return createElementFromHTML(`<div class="${Selectors.MenusDivider}"></div>`);
}
