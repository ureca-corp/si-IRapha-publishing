import { BaseElement } from "../../../../base/index.js";

export class LayerPopup extends BaseElement {
  #$root;
  #style;

  constructor({ $element, open$ }) {
    super({ $element });
    this.#$root = $element;
    this.#style = this.#$root.style;

    this.#init({ open$ });
  }

  // private
  #init({ open$ }) {
    // 메뉴 오픈 상태 핸들링
    open$.subscribe((point) => this.handleOpen(point));
  }

  // handler
  handleOpen(point) {
    if (point) return this.#open(point);

    return this.#close();
  }

  #open(point) {
    const { x, y } = point;
    const style = this.#style;

    style.left = `${x}px`;
    style.right = "unset";
    style.top = `${y}px`;
    style.bottom = "unset";
    style.zIndex = 9999;

    this.#limitOverflowIntoWindow(point);
  }

  #close() {
    this.#style.zIndex = -1;
  }

  // Window 바깥으로 메뉴 창이 나가지 않도록 처리
  #limitOverflowIntoWindow(point) {
    const { x: targetX, y: targetY } = point;
    const unset = "unset";
    const margin = "8px";
    const style = this.#style;

    const rect = this.#$root.getBoundingClientRect();

    const overflowLeft = rect.left < 0;
    const overflowRight = rect.right > window.innerWidth;
    const overflowTop = rect.top < 0;
    const overflowBottom = rect.bottom > window.innerHeight;

    if (overflowLeft) {
      style.right = unset;
      style.left = margin;
    }

    if (overflowTop) {
      style.bottom = unset;
      style.top = margin;
    }

    if (overflowRight) {
      const safeRight = window.innerWidth - targetX;

      style.left = unset;
      style.right = `${safeRight}px`;
    }

    if (overflowBottom) {
      const safeBottom = window.innerHeight - targetY;

      style.top = unset;
      style.bottom = `${safeBottom}px`;
    }
  }
}
