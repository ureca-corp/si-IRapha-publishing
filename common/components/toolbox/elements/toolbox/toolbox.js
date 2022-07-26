import { FoldingBar } from "../../../folding-bar/index.js";
import { Logo } from "../../../logo/index.js";
import { ToolboxMenusContainer } from "../menus-container/menus-container.js";

import {
  Selectors,
  LayoutClassType,
  ShrinkClassType,
  ShrinkType,
} from "../../common/index.js";

const rx = rxjs;

export class Toolbox {
  #$root;

  #isLayoutColumn$ = new rx.BehaviorSubject();
  #isExpanded$ = new rx.BehaviorSubject();
  #isPreview$ = new rx.BehaviorSubject(false);
  #shrinkDirection$ = new rx.BehaviorSubject();
  #isHideIconName$ = new rx.BehaviorSubject();

  constructor({ $element }) {
    this.#$root = $element;

    this.#initStates();
    this.#initChilds();
  }

  // private
  #initChilds() {
    const $root = this.#$root;

    const logo = new Logo({
      states: {
        shrinkDirection$: this.#shrinkDirection$,
      },
      events: {
        onPinClick: () => this.#toggle(),
      },
    });
    $root
      .querySelector(".irapha-toolbox__logo")
      .appendChild(logo.getRootElement());

    new ToolboxMenusContainer({
      $element: $root.querySelector(`.${Selectors.Menus}`),
      isLayoutColumn$: this.#isLayoutColumn$,
      isHideIconName$: this.#isHideIconName$,
      shrinkDirection$: this.#shrinkDirection$,
    });

    new FoldingBar({
      $element: $root.querySelector(`.${Selectors.FoldingBar}`),
      isLayoutColumn$: this.#isLayoutColumn$,
      isExpanded$: this.#isExpanded$,
      isPreview$: this.#isPreview$,
      shrinkDirection$: this.#shrinkDirection$,
    });
  }

  #initStates() {
    this.#isLayoutColumn$.subscribe((isLayoutColumn) =>
      this.#handleLayoutChange(isLayoutColumn)
    );

    this.#shrinkDirection$.subscribe((shrinkDirection) =>
      this.#handleShrinkDirectionChange(shrinkDirection)
    );
  }

  // handler
  #handleLayoutChange(isLayoutColumn) {
    const rootClassList = this.#$root.classList;

    if (isLayoutColumn) return rootClassList.add(LayoutClassType.Column);

    return rootClassList.remove(LayoutClassType.Column);
  }

  #handleShrinkDirectionChange(shrinkDirection) {
    const rootClassList = this.#$root.classList;

    if (shrinkDirection === ShrinkType.Vertical)
      return rootClassList.add(ShrinkClassType.Column);

    if (shrinkDirection === ShrinkType.Horizontal)
      return rootClassList.add(ShrinkClassType.Row);

    rootClassList.remove(ShrinkClassType.Column);
    rootClassList.remove(ShrinkClassType.Row);
  }

  #toggle() {
    const isPreview = this.#isPreview$.getValue();

    if (!isPreview) {
      this.#isExpanded$.next(!this.#isExpanded$.getValue());
    }

    this.#isPreview$.next(!isPreview);
  }

  // public
  setLayoutColumn(isLayoutColumn) {
    this.#isLayoutColumn$.next(isLayoutColumn);
  }

  setHideIconName(isHideIconName) {
    this.#isHideIconName$.next(isHideIconName);
  }
}
