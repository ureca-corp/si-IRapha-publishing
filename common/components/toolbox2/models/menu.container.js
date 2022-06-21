export class MenuContainer {
  constructor(element) {
    this._element = element;
  }

  hide() {
    this._element.style.opacity = 0;
  }

  visible() {
    this._element.style.opacity = 1;
  }
}
