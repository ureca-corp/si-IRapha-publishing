// 최대화/최소화 토글 아이콘 버튼
export class MaximizeButton {
  constructor(element) {
    this._element = element;
  }

  init() {
    this._element.addEventListener("click", this.toggleFullScreen);
  }

  toggleFullScreen() {
    if (!document.fullscreenElement)
      return document.documentElement.requestFullscreen();

    if (document.exitFullscreen) return document.exitFullscreen();
  }
}
