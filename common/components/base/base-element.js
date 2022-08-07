export class BaseElement {
  #$root;

  constructor({ $element }) {
    this.#$root = $element;
  }

  getEl() {
    return this.#$root;
  }

  getElementById(id) {
    return this.#$root.querySelector(`#${id}`);
  }

  getElementByClassName(className) {
    return this.#$root.querySelector(`.${className}`);
  }

  getElementsByClassName(className) {
    return this.#$root.querySelectorAll(`.${className}`);
  }

  addClassName(className) {
    return this.#$root.classList.add(className);
  }
}
