import {
  Selectors,
  MoreClassType,
  DirectionClassType,
} from "../../common/index.js";

const rx = rxjs;

export class ContextMenuItem {
  #$root;
  #$submenu;

  constructor({ $element, directionLeft$ }) {
    this.#$root = $element;
    this.#$submenu = this.#$root.querySelector(`.${Selectors.Submenu}`);

    this.#init({ directionLeft$ });
  }

  // private
  #init({ directionLeft$ }) {
    if (this.#hasSubmenu()) {
      this.#$root.classList.add(MoreClassType.More);

      directionLeft$.subscribe((directionLeft) =>
        this.#handleDirectionLeftChange(directionLeft)
      );
    }

    this.#initMouseEvent();
  }

  #initMouseEvent() {
    const submenuStyle = this.#$submenu?.style;

    rx.fromEvent(this.#$root, "mouseenter").subscribe(
      () => submenuStyle && (submenuStyle.display = "flex")
    );

    rx.fromEvent(this.#$root, "mouseleave").subscribe(
      () => submenuStyle && (submenuStyle.display = "none")
    );
  }

  #handleDirectionLeftChange(isDirectionLeft) {
    const submenuClassList = this.#$submenu.classList;

    if (isDirectionLeft) return submenuClassList.add(DirectionClassType.Left);

    return submenuClassList.remove(DirectionClassType.Left);
  }

  #hasSubmenu() {
    return !!this.#$submenu;
  }
}
