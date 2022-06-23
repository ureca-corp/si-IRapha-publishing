const rx = rxjs;

// 최대화/최소화 토글 아이콘 버튼
export class MaximizeButton {
  constructor(element) {
    this._element = element;
  }

  init() {
    rx.fromEvent(this._element, "click").subscribe(() =>
      this.toggleFullScreen()
    );
  }

  toggleFullScreen() {
    if (!document.fullscreenElement)
      return document.documentElement.requestFullscreen();

    if (document.exitFullscreen) return document.exitFullscreen();
  }
}
