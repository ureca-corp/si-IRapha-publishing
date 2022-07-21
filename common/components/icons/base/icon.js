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
export class BaseIcon {
  #root;

  constructor({ element, isActive$, disabled$, onClick }) {
    this.#root = element;

    this.#init({ isClickable: !!onClick });

    isActive$?.subscribe((isActive) => this.#handleActiveChange(isActive));
    disabled$?.subscribe((disabled) => this.#handleDisabledChange(disabled));

    if (onClick) rx.fromEvent(element, "click").subscribe((e) => onClick(e));
  }

  // private
  #init({ isClickable }) {
    this.#root.classList.add("irapha-icon");

    if (isClickable) this.#root.style.cursor = "pointer";
  }

  #handleActiveChange(isActive) {
    const root = this.#root;

    if (isActive) return root.classList.add("--active");
    return root.classList.remove("--active");
  }

  #handleDisabledChange(disabled) {
    const root = this.#root;

    if (disabled) return root.setAttribute("disabled", true);
    return root.removeAttribute("disabled", true);
  }

  // public
  getDomElement() {
    return this.#root;
  }
}
