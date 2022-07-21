import {
  Selectors,
  Attributes,
  PositionClassType,
} from "../../common/index.js";

const VeticalDropzoneClasses = [
  PositionClassType.Left,
  PositionClassType.Right,
];

export class Dropzone {
  #root;

  constructor({ $element }) {
    this.#root = $element;
  }

  // private

  // Layered Drop Zone Dummy
  #createDummyDropzone() {
    const { clientWidth, clientHeight } = this.#root;
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

  // 드래그 타겟 드랍존 안으로 이동
  #targetMoveToDropzone({ target }) {
    target.parentNode.removeChild(target);
    this.#root.appendChild(target);
  }

  // 드랍존의 모든 child 제거
  #removeAllChild() {
    this.#root.innerHTML = "";
  }

  #getPriorityFromElement({ element }) {
    return element.getAttribute(Attributes.Priority);
  }

  // 우선 순위 높은 순으로 정렬
  #getSortedChildByHighPriority() {
    return [...this.#root.children].sort(
      (a, b) =>
        this.#getPriorityFromElement({ element: a }) -
        this.#getPriorityFromElement({ element: b })
    );
  }

  #drop(target) {
    const dropzone = this.#root;

    this.invalidateBackground();
    this.#targetMoveToDropzone({ target });

    const sortedTargets = this.#getSortedChildByHighPriority();
    this.#removeAllChild();

    sortedTargets.forEach((it) => dropzone.appendChild(it));
  }

  #hasElement(id) {
    return !!this.#root.querySelector(id);
  }

  // public
  appendDummy() {
    this.#root.appendChild(this.#createDummyDropzone());
  }

  removeDummy() {
    const dropzoneDummy = this.#root.querySelector(
      `.${Selectors.DropzoneDummy}`
    );
    this.#root.removeChild(dropzoneDummy);
  }

  isTypeVertical() {
    return VeticalDropzoneClasses.some((it) =>
      this.#root.className.includes(it)
    );
  }

  // 높은 우선순위 자식을 보유하고 있는지
  hasHighPriorityChild() {
    return [...this.#root.children].some(
      (it) => it.getAttribute(Attributes.Priority) === "1"
    );
  }

  // 백그라운드 초기화
  invalidateBackground() {
    this.#root.style.background = "";
  }

  drop({ target, dropSuccessCallback, invalidateAllDropzoneBG }) {
    invalidateAllDropzoneBG();
    this.#drop(target);

    return dropSuccessCallback({
      isVertical: this.isTypeVertical(),
      hasElement: (id) => this.#hasElement(id),
    });
  }
}
