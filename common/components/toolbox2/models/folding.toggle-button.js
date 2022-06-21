// 툴 박스 - 폴딩 토글 버튼
export class FoldingToggleButton {
  constructor(element) {
    this._element = element;
  }

  init() {
    this.shrink();
  }

  getDomElement() {
    return this._element;
  }

  isExpand() {
    return this._element.getAttribute("uk-icon") === "icon: expand";
  }

  expand() {
    return this._element.setAttribute("uk-icon", "icon: expand");
  }

  shrink() {
    return this._element.setAttribute("uk-icon", "icon: shrink");
  }
}
