export class BaseElement {
  #$root;

  constructor({ $element }) {
    this.#$root = $element;
  }

  getRootElement() {
    return this.#$root;
  }

  getElementByClassName(className) {
    return this.#$root.querySelector(`.${className}`);
  }
}
