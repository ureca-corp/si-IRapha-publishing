const rx = rxjs;

// 최대화/최소화 토글 아이콘 버튼
export class MaximizeButton {
  #root;

  constructor({ element }) {
    this.#root = element;

    rx.fromEvent(this.#root, "click").subscribe(() => this.toggleFullScreen());
  }

  toggleFullScreen() {
    if (!document.fullscreenElement)
      return document.documentElement.requestFullscreen();

    if (document.exitFullscreen) return document.exitFullscreen();
  }
}
