import { createElementFromHTML } from "../../../utils/dom/index.js";
import { BaseElement } from "../../base/index.js";

const rx = rxjs;

/**
 * Constructor types
 *
 * @type element: Element
 *
 * @type isActive$: BehaviorSubject<boolean>
 *
 * @type disabled$: BehaviorSubject<boolean>
 *
 * @type onClick$: () => void
 */
export class BaseIcon extends BaseElement {
  constructor({ element, isActive$, disabled$, onClick }) {
    super({ $element: element });

    this.#init({ isClickable: !!onClick });

    isActive$?.subscribe((isActive) => this.#handleActiveChange(isActive));
    disabled$?.subscribe((disabled) => this.#handleDisabledChange(disabled));

    if (onClick) rx.fromEvent(element, "click").subscribe((e) => onClick(e));
  }

  // private
  #init({ isClickable }) {
    this.getRootElement().classList.add("irapha-icon");

    if (isClickable) this.getRootElement().style.cursor = "pointer";
  }

  #handleActiveChange(isActive) {
    const $root = this.getRootElement();

    if (isActive) return $root.classList.add("--active");
    return $root.classList.remove("--active");
  }

  #handleDisabledChange(disabled) {
    const $root = this.getRootElement();

    if (disabled) return $root.setAttribute("disabled", true);
    return $root.removeAttribute("disabled", true);
  }
}

export class BaseIcon2 extends BaseElement {
  static template = `
  <div class="irapha-icon"></div>
  `;

  #states;
  #options;

  constructor({ states, options }) {
    super({ $element: createElementFromHTML(BaseIcon2.template) });
    this.#states = states;
    this.#options = options;

    this.#init();
  }

  // private
  #init() {
    this.#initStates();
    this.#initOptions();
  }

  #initStates() {
    if (!this.#states) return;

    const { isActive$, disabled$ } = this.#states;

    isActive$?.subscribe((isActive) => this.#handleActiveChange(isActive));
    disabled$?.subscribe((disabled) => this.#handleDisabledChange(disabled));
  }

  #initOptions() {
    if (!this.#options) return;

    const { size, events } = this.#options;

    this.#initSizeOptions(size);
    this.#initEvents(events);
  }

  #initSizeOptions(size) {
    const $root = this.getRootElement();

    if (size === "small") return $root.classList.add("--small");
  }

  #initEvents(events) {
    if (!events) return;

    const $root = this.getRootElement();

    const { onClick } = events;

    if (!!onClick) {
      $root.style.cursor = "pointer";
      rx.fromEvent($root, "click").subscribe((e) => onClick(e));
    }
  }

  #handleActiveChange(isActive) {
    const $root = this.getRootElement();

    console.log(isActive);

    if (isActive) return $root.classList.add("--active");
    return $root.classList.remove("--active");
  }

  #handleDisabledChange(disabled) {
    const $root = this.getRootElement();

    if (disabled) return $root.setAttribute("disabled", true);
    return $root.removeAttribute("disabled", true);
  }
}
