// 툴 박스 - 폴딩 토글 버튼
export class FoldingToggleButton {
  constructor(element) {
    this._element = element;
  }

  init() {
    this.setIconShrink();
  }

  getDomElement() {
    return this._element;
  }

  isIconExpand() {
    return this._element.getAttribute("uk-icon") === "icon: expand";
  }

  setIconExpand() {
    return this._element.setAttribute("uk-icon", "icon: expand");
  }

  setIconShrink() {
    return this._element.setAttribute("uk-icon", "icon: shrink");
  }
}
