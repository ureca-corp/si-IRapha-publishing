export class BaseElement {
  #$root;

  constructor({ $element }) {
    this.#$root = $element;
  }

  getEl() {
    return this.#$root;
  }

  getElementByClassName(className) {
    return this.#$root.querySelector(`.${className}`);
  }

  addClassName(className) {
    return this.#$root.classList.add(className);
  }
}
