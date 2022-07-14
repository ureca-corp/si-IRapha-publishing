const rx = rxjs;

const Selectors = {
  Submenu: "irapha-context-menu__item__submenu",
};

export class ContextMenuItem {
  #root;
  #submenu;

  constructor({ element, directionLeft$ }) {
    this.#root = element;
    this.#submenu = this.#root.querySelector(`.${Selectors.Submenu}`);

    this.#init();

    if (this.#hasSubmenu())
      directionLeft$.subscribe((directionLeft) =>
        this.#handleDirectionLeftChange(directionLeft)
      );
  }

  // private
  #init() {
    if (this.#hasSubmenu()) {
      this.#root.classList.add("--more");
    }

    this.#initMouseEvent();
  }

  #initMouseEvent() {
    const submenuStyle = this.#submenu?.style;

    rx.fromEvent(this.#root, "mouseenter").subscribe(
      () => submenuStyle && (submenuStyle.display = "flex")
    );

    rx.fromEvent(this.#root, "mouseleave").subscribe(
      () => submenuStyle && (submenuStyle.display = "none")
    );
  }

  #handleDirectionLeftChange(isDirectionLeft) {
    if (isDirectionLeft) return this.#submenu.classList.add("--direction-left");

    return this.#submenu.classList.remove("--direction-left");
  }

  #hasSubmenu() {
    return !!this.#submenu;
  }
}
