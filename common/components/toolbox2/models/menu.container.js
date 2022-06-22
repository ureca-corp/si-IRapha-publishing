export class MenuContainer {
  constructor(element) {
    this._element = element;
  }

  _getMenuInnerElements() {
    return this._element.querySelectorAll(".irm-toolbox__menu__inner");
  }

  _removeAllLayoutClasses() {
    this._getMenuInnerElements().forEach((menu) => {
      menu.classList.forEach((it) => {
        if (it.includes("is-layout")) menu.classList.remove(it);
      });
    });
  }

  hide() {
    this._element.classList.add("is-state--disabled");
  }

  visible() {
    this._element.classList.remove("is-state--disabled");
  }

  resetAllMenuLayout() {
    this._removeAllLayoutClasses();
  }

  replaceLayoutColumn() {
    this._element.classList.add("is-layout--column");
  }

  // 메뉴 - 세로 2열 배치 레이아웃
  replaceAllMenuLayoutColumnTwo() {
    this._removeAllLayoutClasses();

    this._getMenuInnerElements().forEach((menu) =>
      menu.classList.add("is-layout--column-two")
    );
  }
}
