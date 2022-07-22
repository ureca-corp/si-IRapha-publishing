import { AlignClassType, LayoutClassType } from "../../common/index.js";

/**
 * Constructor types
 *
 * @type $element: Element
 *
 * @type isLayoutColumn$: BehaviorSubject<boolean>
 *
 * @type isAlignSelfCenter$: BehaviorSubject<boolean>
 */
export class MenusDivider {
  #$root;

  constructor({ $element, isLayoutColumn$, isAlignSelfCenter$ }) {
    this.#$root = $element;

    isLayoutColumn$.subscribe((isLayoutColumn) =>
      this.#handleLayoutChange(isLayoutColumn)
    );

    isAlignSelfCenter$.subscribe((isAlignSelfCenter) =>
      this.#handleAlignSelfCenter(isAlignSelfCenter)
    );
  }

  #handleLayoutChange(isLayoutColumn) {
    const rootClassList = this.#$root.classList;

    if (isLayoutColumn) {
      return rootClassList.add(LayoutClassType.Column);
    }

    return rootClassList.remove(LayoutClassType.Column);
  }

  #handleAlignSelfCenter(isAlignSelfCenter) {
    const rootClassList = this.#$root.classList;

    if (isAlignSelfCenter) return rootClassList.add(AlignClassType.SelfCenter);
    return rootClassList.remove(AlignClassType.SelfCenter);
  }
}
