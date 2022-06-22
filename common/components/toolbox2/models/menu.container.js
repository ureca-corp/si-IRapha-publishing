export class MenuContainer {
  constructor(element) {
    this._element = element;
  }

  hide() {
    this._element.classList.add("is-state--disabled");
  }

  visible() {
    this._element.classList.remove("is-state--disabled");
  }
}
