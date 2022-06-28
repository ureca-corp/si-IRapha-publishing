const rx = rxjs;

const SelectorClasses = {
  StickyMenu: ".irapha-sticky-menu",
  DropZone: ".irapha-sticky-menu__dropzone",
};

const ClassNames = {
  DropZone: "irapha-sticky-menu__dropzone",
};

export class StickyMenu {
  #element;
  #draggedTarget;
  #dropSuccessCallback;

  constructor(dropSuccessCallback) {
    this.#element = document.querySelector(SelectorClasses.StickyMenu);
    this.#dropSuccessCallback = dropSuccessCallback;

    this.#init();
  }

  #init() {
    rx.fromEvent(this.#element, "dragstart", false).subscribe((e) =>
      this.#handleDragStart(e)
    );

    rx.fromEvent(this.#element, "dragend", false).subscribe((e) =>
      this.#handleDragEnd(e)
    );

    rx.fromEvent(this.#element, "dragover", false).subscribe((e) =>
      this.#handleDragOver(e)
    );

    rx.fromEvent(this.#element, "dragenter", false).subscribe((e) =>
      this.#handleDragEnter(e)
    );

    rx.fromEvent(this.#element, "dragleave", false).subscribe((e) =>
      this.#handleDragLeave(e)
    );

    rx.fromEvent(this.#element, "drop", false).subscribe((e) =>
      this.#handleItemDrop(e)
    );
  }

  // handler

  // 드래그 시작 시
  #handleDragStart(e) {
    this.#draggedTarget = e.target;

    e.target.style.opacity = 0.5;
  }

  // 드래그 종료 시
  #handleDragEnd(e) {
    e.target.style.opacity = "";
  }

  // 드롭 대상에서 이벤트 발생
  #handleDragOver(e) {
    // 드롭을 허용하도록 preventDefault() 호출
    e.preventDefault();
  }

  // 드래그 대상이 드랍존에 진입시
  #handleDragEnter(e) {
    // 요소를 드롭하려는 대상 위로 드래그했을 때 대상의 배경색 변경
    if (e.target.className.includes(ClassNames.DropZone))
      e.target.style.background = "#eeeeee33";
  }

  // 드래그 대상이 드랍존에서 탈출 시
  #handleDragLeave(e) {
    // 요소를 드래그하여 드롭하려던 대상으로부터 벗어났을 때 배경색 리셋
    if (e.target.className.includes(ClassNames.DropZone))
      e.target.style.background = "";
  }

  // 드래그 대상을 드랍존에 드랍 시
  #handleItemDrop(e) {
    e.preventDefault();

    const dropzones = document.querySelectorAll(SelectorClasses.DropZone);
    const draggedTarget = this.#draggedTarget;

    // hide
    dropzones.forEach((it) => (it.style.background = "transparent"));

    // 드래그한 요소를 드롭 대상으로 이동
    const targetMoveToDropzone = () => {
      e.target.style.background = "";
      draggedTarget.parentNode.removeChild(draggedTarget);
      e.target.appendChild(draggedTarget);
    };

    const veticalDropzoneClasses = ["dropzone-left", "dropzone-right"];
    if (veticalDropzoneClasses.some((it) => e.target.className.includes(it))) {
      targetMoveToDropzone();
      this.#dropSuccessCallback({
        isVertical: true,
      });

      return;
    }

    if (e.target.className.includes("dropzone")) {
      targetMoveToDropzone();
      this.#dropSuccessCallback({
        isVertical: false,
      });

      return;
    }
  }
}
