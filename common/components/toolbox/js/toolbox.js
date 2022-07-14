import { FoldingBar } from "../../folding-bar/index.js";
import { Logo } from "../../logo/index.js";
import { ToolboxMenusManager } from "../elements/index.js";

import {
  Selectors,
  LayoutClassType,
  ShrinkClassType,
  ShrinkType,
} from "../common/index.js";

const rx = rxjs;

export class Toolbox {
  #root;

  #isLayoutColumn$;
  #isExpanded$;
  #isPreview$;
  #shrinkDirection$;
  #isHideIconName$;

  constructor() {
    this.#root = document.querySelector(`#${Selectors.Toolbox}`);

    this.#initStates();

    new FoldingBar({
      element: this.#root.querySelector(`.${Selectors.FoldingBar}`),
      isLayoutColumn$: this.#isLayoutColumn$,
      isExpanded$: this.#isExpanded$,
      isPreview$: this.#isPreview$,
      shrinkDirection$: this.#shrinkDirection$,
    });

    this.#initLogo();
    this.#initMenusManager();

    this.setHideIconName(true);
  }

  // private
  #initLogo() {
    new Logo({
      element: this.#root.querySelector(`.${Selectors.Logo}`),
      shrinkDirection$: this.#shrinkDirection$,
    });
  }

  #initMenusManager() {
    new ToolboxMenusManager({
      element: this.#root.querySelector(`.${Selectors.Menus}`),
      isLayoutColumn$: this.#isLayoutColumn$,
      isHideIconName$: this.#isHideIconName$,
      shrinkDirection$: this.#shrinkDirection$,
    });
  }

  #initStates() {
    const isLayoutColumn$ = new rx.BehaviorSubject();
    this.#isLayoutColumn$ = isLayoutColumn$;
    isLayoutColumn$.subscribe((isLayoutColumn) =>
      this.#handleLayoutChange(isLayoutColumn)
    );

    const shrinkDirection$ = new rx.BehaviorSubject();
    this.#shrinkDirection$ = shrinkDirection$;
    shrinkDirection$.subscribe((shrinkDirection) =>
      this.#handleShrinkDirectionChange(shrinkDirection)
    );

    const isPreview$ = new rx.BehaviorSubject(false);
    this.#isPreview$ = isPreview$;

    const isExpanded$ = new rx.BehaviorSubject();
    this.#isExpanded$ = isExpanded$;

    const isHideIconName$ = new rx.BehaviorSubject();
    this.#isHideIconName$ = isHideIconName$;
  }

  // handler
  #handleLayoutChange(isLayoutColumn) {
    if (isLayoutColumn) return this.#layoutColumn();

    return this.#resetLayout();
  }

  #handleShrinkDirectionChange(shrinkDirection) {
    if (shrinkDirection === ShrinkType.Vertical)
      return this.#root.classList.add(ShrinkClassType.Column);

    if (shrinkDirection === ShrinkType.Horizontal)
      return this.#root.classList.add(ShrinkClassType.Row);

    this.#root.classList.remove(ShrinkClassType.Column);
    this.#root.classList.remove(ShrinkClassType.Row);
  }

  // layout control
  #layoutColumn() {
    this.#root.classList.add(LayoutClassType.Column);
  }

  #resetLayout() {
    this.#root.classList.remove(LayoutClassType.Column);
  }

  // public
  setLayoutColumn(isLayoutColumn) {
    this.#isLayoutColumn$.next(isLayoutColumn);
  }

  setExpand(isExpanded) {
    this.#isExpanded$.next(isExpanded);
  }

  setHideIconName(isHideIconName) {
    this.#isHideIconName$.next(isHideIconName);
  }
}
