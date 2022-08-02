import { createElementFromHTML } from "../../../../utils/dom/index.js";
import { BaseElement } from "../../../base/index.js";
import { Selectors } from "../../common/index.js";

const rx = rxjs;

/**
 * Constructor types
 *
 * @type data: {
 *   id: string,
 *   title: string,
 *   topDesc: string,
 *   bottomDesc: string
 * }
 *
 * @type isActive$: BehaviorSubject<boolean>
 * 현재 탭 활성화 여부
 *
 * @type onClick: () => void
 */

export class TabItem extends BaseElement {
  static template = `
    <li class="${Selectors.TabItem}"></li>
  `;

  constructor({ $children, isActive$, onClick }) {
    super({
      $element: createElementFromHTML(TabItem.template),
    });

    this.getEl().appendChild($children);

    isActive$.subscribe((isActive) => this.#handleActiveChange(isActive));

    rx.fromEvent(this.getEl(), "click").subscribe(() => onClick());
  }

  // handler
  #handleActiveChange(isActive) {
    isActive ? this.#active() : this.#inactive();
  }

  #active() {
    const $root = this.getEl();

    $root.appendChild(createDummy());
    $root.classList.add("--active");
  }

  #inactive() {
    const $root = this.getEl();

    const oldDummy = $root.querySelector(`.${Selectors.Dummy}`);
    oldDummy && $root.removeChild(oldDummy);

    $root.classList.remove("--active");
  }
}

// =================================================================
const createDummy = () => {
  const template = `
    <div class="${Selectors.Dummy}"></div>
  `;

  return createElementFromHTML(template);
};
