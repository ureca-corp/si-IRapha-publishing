import { BaseElement } from "../../../../../../base/base-element.js";
import { Selectors, MoreType, DirectionType } from "../../common/index.js";

const { fromEvent } = rxjs;

export class ContextMenuItem extends BaseElement {
  #$directionLeft$;

  constructor({ $element, directionLeft$ }) {
    super({ $element });
    this.#$directionLeft$ = directionLeft$;

    this.#init();
  }

  // private
  #init() {
    const $root = this.getEl();

    if (this.#hasSubmenu()) {
      $root.setAttribute(MoreType.Key, true);

      this.#$directionLeft$.subscribe((directionLeft) =>
        this.#handleDirectionLeftChange(directionLeft)
      );
    }

    this.#initMouseEvent();
  }

  #initMouseEvent() {
    const $root = this.getEl();
    const { $submenu } = this.#getElements();

    if (!$submenu) return;

    const submenuStyle = $submenu.style;

    fromEvent($root, "mouseenter").subscribe(
      () => (submenuStyle.display = "flex")
    );

    fromEvent($root, "mouseleave").subscribe(
      () => (submenuStyle.display = "none")
    );
  }

  #handleDirectionLeftChange(isDirectionLeft) {
    const { $submenu } = this.#getElements();

    if (!$submenu) return;

    $submenu.setAttribute(DirectionType.Key, isDirectionLeft);
  }

  #hasSubmenu() {
    const { $submenu } = this.#getElements();
    return !!$submenu;
  }

  #getElements() {
    const $root = this.getEl();

    const $submenu = $root.querySelector(`.${Selectors.Submenu}`);

    return {
      $submenu,
    };
  }
}
