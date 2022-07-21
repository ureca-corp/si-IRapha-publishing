import { Dropzone } from "./dropzone.js";
import { Selectors, LayoutClassType } from "../../common/index.js";

const rx = rxjs;

/**
 * Constructor types
 *
 * @type dropSuccessCallback: ({
 *  isVertical: boolean,
 *  hasElement: (id: string) => boolean
 * }) => boolean
 */
export class StickyMenu {
  #$root;
  #$draggedTarget;

  #dropzones;

  #dropSuccessCallback;

  constructor({ dropSuccessCallback }) {
    this.#$root = document.querySelector(`.${Selectors.StickyMenu}`);
    this.#dropzones = [
      ...document.querySelectorAll(`.${Selectors.Dropzone}`),
    ].map(($element) => new Dropzone({ $element }));

    this.#dropSuccessCallback = dropSuccessCallback;

    this.#initEvents();
  }

  // private
  #initEvents() {
    rx.fromEvent(this.#$root, "dragstart", false).subscribe((e) =>
      this.#handleDragStart(e)
    );

    rx.fromEvent(this.#$root, "dragend", false).subscribe((e) =>
      this.#handleDragEnd(e)
    );

    rx.fromEvent(this.#$root, "dragover", false).subscribe((e) =>
      this.#handleDragOver(e)
    );

    rx.fromEvent(this.#$root, "dragenter", false).subscribe((e) =>
      this.#handleDragEnter(e)
    );

    rx.fromEvent(this.#$root, "dragleave", false).subscribe((e) =>
      this.#handleDragLeave(e)
    );

    rx.fromEvent(this.#$root, "drop", false).subscribe((e) =>
      this.#handleItemDrop(e)
    );
  }

  #isTargetIncludedDropZoneDummy(target) {
    return target.className.includes(Selectors.DropzoneDummy);
  }

  // 레이아웃 컨트롤
  #setLayoutRowFirst() {
    this.#$root.classList.add(LayoutClassType.RowFirst);
  }

  #resetLayout() {
    this.#$root.classList.remove(LayoutClassType.RowFirst);
  }

  #updateLayout({ dropzone }) {
    if (dropzone.hasHighPriorityChild() && dropzone.isTypeVertical())
      return this.#setLayoutRowFirst();

    if (dropzone.hasHighPriorityChild()) return this.#resetLayout();
  }

  // drop-zones 컨트롤
  #appendDummyToDropZones() {
    this.#dropzones.forEach((it) => it.appendDummy());
  }

  #removeDummyInDropZones() {
    this.#dropzones.forEach((it) => it.removeDummy());
  }

  #invalidateAllDropzoneBG() {
    this.#dropzones.forEach((it) => it.invalidateBackground());
  }

  // handlers

  // 드래그 시작 시
  #handleDragStart(e) {
    new Dropzone({ $element: e.target.parentNode });

    this.#appendDummyToDropZones();

    this.#$draggedTarget = e.target;
    e.target.style.opacity = 0.5;
  }

  // 드래그 종료 시
  #handleDragEnd(e) {
    this.#removeDummyInDropZones();

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
    if (this.#isTargetIncludedDropZoneDummy(e.target))
      e.target.style.background = "#eeeeee33";
  }

  // 드래그 대상이 드랍존에서 탈출 시
  #handleDragLeave(e) {
    // 요소를 드래그하여 드롭하려던 대상으로부터 벗어났을 때 배경색 리셋
    if (this.#isTargetIncludedDropZoneDummy(e.target))
      e.target.style.background = "";
  }

  // 드래그 대상을 드랍존에 드랍 시
  #handleItemDrop(e) {
    e.preventDefault();

    if (!this.#isTargetIncludedDropZoneDummy(e.target)) return;

    const draggedTarget = this.#$draggedTarget;
    const dummyDropzone = e.target;
    const dropzone = new Dropzone({ $element: dummyDropzone.parentNode });

    dropzone.drop({
      target: draggedTarget,
      dropSuccessCallback: this.#dropSuccessCallback,
      invalidateAllDropzoneBG: () => this.#invalidateAllDropzoneBG,
    });

    this.#updateLayout({ dropzone });
  }
}
