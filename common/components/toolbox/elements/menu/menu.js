import { HideClassType, LayoutClassType } from "../../common/index.js";

/**
 * Constructor types
 *
 * @type $element: Element
 *
 * @type isLayoutColumnTwo$: BehaviorSubject<boolean>
 * 레이아웃 모드 2열 배치
 *
 * @type isHideIconName$: BehaviorSubject<boolean>
 */
export class ToolboxMenu {
  #$root;

  constructor({ $element, isLayoutColumnTwo$, isHideIconName$ }) {
    this.#$root = $element;

    isLayoutColumnTwo$.subscribe((isLayoutColumnTwo) =>
      this.#handleLayoutChange(isLayoutColumnTwo)
    );

    isHideIconName$.subscribe((isHideIconName) =>
      this.#handleHideIconNameChange(isHideIconName)
    );
  }

  // handler
  #handleLayoutChange(isLayoutColumnTwo) {
    const rootClassList = this.#$root.classList;

    if (isLayoutColumnTwo) return rootClassList.add(LayoutClassType.ColumnTwo);
    return rootClassList.remove(LayoutClassType.ColumnTwo);
  }

  #handleHideIconNameChange(isHideIconName) {
    const rootClassList = this.#$root.classList;

    if (isHideIconName) return rootClassList.add(HideClassType.HideIconName);
    return rootClassList.remove(HideClassType.HideIconName);
  }
}
