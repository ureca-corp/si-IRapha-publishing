const rx = rxjs;

const SelectorClasses = {
  StickyMenu: ".irm-sticky-menu",
  DropZone: ".irm-sticky-menu__dropzone",
};

const ClassNames = {
  DropZone: "irm-sticky-menu__dropzone",
};

export class StickyMenu {
  _draggedTarget;

  constructor(dropSuccessCallback) {
    this._element = document.querySelector(SelectorClasses.StickyMenu);
    this._dropSuccessCallback = dropSuccessCallback;

    this._init();
  }

  _init() {
    rx.fromEvent(this._element, "dragstart", false).subscribe((e) =>
      this._handleDragStart(e)
    );

    rx.fromEvent(this._element, "dragend", false).subscribe((e) =>
      this._handleDragEnd(e)
    );

    rx.fromEvent(this._element, "dragover", false).subscribe((e) =>
      this._handleDragOver(e)
    );

    rx.fromEvent(this._element, "dragenter", false).subscribe((e) =>
      this._handleDragEnter(e)
    );

    rx.fromEvent(this._element, "dragleave", false).subscribe((e) =>
      this._handleDragLeave(e)
    );

    rx.fromEvent(this._element, "drop", false).subscribe((e) =>
      this._handleItemDrop(e)
    );
  }

  // handler

  // 드래그 시작 시
  _handleDragStart(e) {
    this._draggedTarget = e.target;

    e.target.style.opacity = 0.5;
  }

  // 드래그 종료 시
  _handleDragEnd(e) {
    e.target.style.opacity = "";
  }

  // 드롭 대상에서 이벤트 발생
  _handleDragOver(e) {
    // 드롭을 허용하도록 preventDefault() 호출
    e.preventDefault();
  }

  // 드래그 대상이 드랍존에 진입시
  _handleDragEnter(e) {
    // 요소를 드롭하려는 대상 위로 드래그했을 때 대상의 배경색 변경
    if (e.target.className.includes(ClassNames.DropZone))
      e.target.style.background = "#eeeeee33";
  }

  // 드래그 대상이 드랍존에서 탈출 시
  _handleDragLeave(e) {
    // 요소를 드래그하여 드롭하려던 대상으로부터 벗어났을 때 배경색 리셋
    if (e.target.className.includes(ClassNames.DropZone))
      e.target.style.background = "";
  }

  // 드래그 대상을 드랍존에 드랍 시
  _handleItemDrop(e) {
    e.preventDefault();

    const dropzones = document.querySelectorAll(SelectorClasses.DropZone);
    const draggedTarget = this._draggedTarget;

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
      this._dropSuccessCallback({
        isVertical: true,
      });

      // const menus = e.target.querySelectorAll("[draggable='true']");
      // menus.forEach((it) => (it.style.flexDirection = "column"));

      return;
    }

    if (e.target.className.includes("dropzone")) {
      targetMoveToDropzone();
      this._dropSuccessCallback({
        isVertical: false,
      });

      // const menus = e.target.querySelectorAll("[draggable='true']");
      // menus.forEach((it) => (it.style.flexDirection = "row"));

      return;
    }
  }
}
