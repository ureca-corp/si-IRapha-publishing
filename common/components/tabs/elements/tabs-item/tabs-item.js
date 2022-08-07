import { createElementFromHTML } from "../../../../utils/dom/index.js";
import { BaseElement } from "../../../base/index.js";
import { Selectors } from "../../common/index.js";

const { fromEvent, of, tap } = rxjs;

/**
 * Constructor types
 *
 * @type $children: Element
 *
 * @type isActive$: BehaviorSubject<boolean>
 * 현재 탭 활성화 여부
 *
 * @type onClick: () => void
 */
export class TabItem extends BaseElement {
  constructor({ $children, isActive$, onClick }) {
    super({ $element: new TabItemComp() });

    of(this.getEl())
      .pipe(
        tap(($root) => $root.appendChild($children)),
        tap(($root) => fromEvent($root, "click").subscribe(() => onClick()))
      )
      .subscribe();

    isActive$.subscribe((isActive) => this.#handleActiveChange(isActive));
  }

  // handler
  #handleActiveChange(isActive) {
    isActive ? this.#active() : this.#inactive();
  }

  #active() {
    const $root = this.getEl();

    $root.appendChild(new Dummy());
    $root.setAttribute("active", true);
  }

  #inactive() {
    const $root = this.getEl();

    const { $dummy } = this.#getElements();
    $dummy && $root.removeChild($dummy);

    $root.removeAttribute("active");
  }

  #getElements() {
    const $root = this.getEl();
    const $dummy = $root.querySelector(`.${Selectors.Dummy}`);

    return {
      $dummy,
    };
  }
}

// =================================================================
function TabItemComp() {
  return createElementFromHTML(`<li class="${Selectors.TabItem}"></li>`);
}

function Dummy() {
  return createElementFromHTML(`<div class="${Selectors.Dummy}"></div>`);
}
