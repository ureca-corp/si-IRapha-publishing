const rx = rxjs;

export class BaseIcon {
  #root;

  constructor({ element, isActive$, onClick }) {
    this.#root = element;

    this.#init({ isClickable: !!onClick });

    isActive$?.subscribe((isActive) => this.#handleActiveChange(isActive));

    if (onClick) rx.fromEvent(element, "click").subscribe((e) => onClick(e));
  }

  // private
  #init({ isClickable }) {
    this.#root.classList.add("irapha-icon");

    if (isClickable) this.#root.style.cursor = "pointer";
  }

  #active() {
    this.#root.classList.add("--active");
  }

  #inActive() {
    this.#root.classList.remove("--active");
  }

  #handleActiveChange(isActive) {
    if (isActive) return this.#active();

    return this.#inActive();
  }
}
