const rx = rxjs;

const Selectors = {
  Dropzone: "irapha-sticky-menu__dropzone",
  DropzoneDummy: "dropzone-dummy",

  StatusLeft: "--left",
  StatusRight: "--right",
};

const Attributes = {
  Priority: "priority",
};

const VeticalDropzoneClasses = [Selectors.StatusLeft, Selectors.StatusRight];

export class Dropzone {
  #root;

  constructor(element) {
    this.#root = element;
  }

  // private

  // Layered Drop Zone Dummy
  #createDummyDropZone() {
    const { clientWidth, clientHeight } = this.#root;
    const space = 48;

    const dropzoneDummy = document.createElement("div");
    dropzoneDummy.className = Selectors.DropzoneDummy;
    dropzoneDummy.style.cssText = `
        position: absolute;
        min-width: ${space}px;
        min-height: ${space}px;
        width: ${clientWidth + space}px;
        height: ${clientHeight + space}px;
      `;

    return dropzoneDummy;
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

  // public
  appendDummy() {
    this.#root.appendChild(this.#createDummyDropZone());
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

  hasElement(id) {
    return !!this.#root.querySelector(id);
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
      hasElement: (id) => this.hasElement(id),
    });
  }
}
