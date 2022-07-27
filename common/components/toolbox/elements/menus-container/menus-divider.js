import { createElementFromHTML } from "../../../../utils/dom/CreateElementFromHTML.js";
import { BaseElement } from "../../../base/base-element.js";
import { AlignClassType, LayoutClassType } from "../../common/index.js";

const Template = `
<div class="irapha-toolbox__divider"></div>
`;

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
    super({ $element: createElementFromHTML(Template) });
    this.#states = states;

    this.#initStates();
  }

  #initStates() {
    if (!this.#states) return;

    const { isLayoutColumn$, isAlignSelfCenter$ } = this.#states;

    isLayoutColumn$.subscribe((isLayoutColumn) =>
      this.#handleLayoutChange(isLayoutColumn)
    );

    isAlignSelfCenter$.subscribe((isAlignSelfCenter) =>
      this.#handleAlignSelfCenter(isAlignSelfCenter)
    );
  }

  #handleLayoutChange(isLayoutColumn) {
    const rootClassList = this.getRootElement().classList;

    if (isLayoutColumn) {
      return rootClassList.add(LayoutClassType.Column);
    }

    return rootClassList.remove(LayoutClassType.Column);
  }

  #handleAlignSelfCenter(isAlignSelfCenter) {
    const rootClassList = this.getRootElement().classList;

    if (isAlignSelfCenter) return rootClassList.add(AlignClassType.SelfCenter);
    return rootClassList.remove(AlignClassType.SelfCenter);
  }
}
