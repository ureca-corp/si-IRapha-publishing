import { BaseElement } from "../../../base/base-element.js";
import { Attributes, PositionAttr, Selectors } from "../../common/index.js";

const { of, tap, map } = rxjs;
export class Dropzone extends BaseElement {
  constructor({ $element, activeDummy$ }) {
    super({ $element });

    activeDummy$?.subscribe((it) => this.#handleActiveDummy(it));
  }

  #handleActiveDummy(activeDummy) {
    const $root = this.getEl();

    const appendDummy = () => $root.appendChild(new DropzoneDummy($root));
    const removeDummy = () => {
      const { $dropzoneDummy } = this.#getElements();
      $dropzoneDummy && $root.removeChild($dropzoneDummy);
    };

    activeDummy ? appendDummy() : removeDummy();
  }

  // private
  #drop(target) {
    const $root = this.getEl();

    const clearRoot = () => {
      $root.innerHTML = "";
      $root.style.background = "";
    };

    const targetMoveToDropzone = () => {
      target.parentNode.removeChild(target);
      $root.appendChild(target);
    };

    of(target)
      .pipe(
        tap(() => targetMoveToDropzone()),
        map(() => this.#getSortedChildByHighPriority()),
        tap(() => clearRoot())
      )
      .subscribe(($sortedTargets) => $root.append(...$sortedTargets));
  }

  // 우선 순위 높은 순으로 정렬
  #getSortedChildByHighPriority() {
    const { children: $childrens } = this.getEl();

    return [...$childrens].sort(
      (a, b) =>
        a.getAttribute(Attributes.Priority) -
        b.getAttribute(Attributes.Priority)
    );
  }

  #hasElement(selector) {
    return !!this.getEl().querySelector(selector);
  }

  #getElements() {
    const $root = this.getEl();
    const $dropzoneDummy = $root.querySelector(`.${Selectors.DropzoneDummy}`);

    return {
      $dropzoneDummy,
    };
  }

  // public
  isTypeVertical() {
    const attr = this.getEl().getAttribute(PositionAttr.Key);

    return attr === PositionAttr.Left || attr === PositionAttr.Right;
  }

  // 높은 우선순위 자식을 보유하고 있는지
  hasHighPriorityChild() {
    const $childrens = this.getEl().children;

    return [...$childrens].some(
      (it) => it.getAttribute(Attributes.Priority) === "1"
    );
  }

  drop({ target, dropCallback }) {
    this.#drop(target);

    return dropCallback({
      isVertical: this.isTypeVertical(),
      hasElement: (selector) => this.#hasElement(selector),
    });
  }
}

// =================================================================
function DropzoneDummy({ clientWidth, clientHeight }) {
  const space = 48;

  const dropZoneDummy = document.createElement("div");
  dropZoneDummy.className = Selectors.DropzoneDummy;
  dropZoneDummy.style.cssText = `
      position: absolute;
      min-width: ${space}px;
      min-height: ${space}px;
      width: ${clientWidth + space}px;
      height: ${clientHeight + space}px;
    `;

  return dropZoneDummy;
}
