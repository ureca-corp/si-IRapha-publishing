// 툴 박스 - 폴딩 아이콘
export class ToolboxFoldingIcon {
  constructor(element) {
    this._element = element;
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
