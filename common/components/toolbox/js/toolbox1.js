import { FoldingBar } from "../../folding-bar/index.js";
import { Logo } from "../../logo/index.js";
import { ToolboxMenusManager } from "./menu-manager.js";

const rx = rxjs;

const Selectors = {
  Toolbox: "irapha-toolbox",
  FoldingBar: "irapha-folding-bar",
  Logo: "irapha-logo",
  MenusManager: "irapha-toolbox__menus",

  ShrinkVertical: "--shrink-v",
  ShrinkHorizontal: "--shrink-h",
};

const ShrinkDirection = {
  Vertical: "vertical",
  Horizontal: "horizontal",
};

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
      element: this.#root.querySelector(`.${Selectors.MenusManager}`),
      isLayoutColumn$: this.#isLayoutColumn$,
      isHideIconName$: this.#isHideIconName$,
      shrinkDirection$: this.#shrinkDirection$,
    });
  }

  #initStates() {
    const isLayoutColumn$ = new rx.BehaviorSubject();
    this.#isLayoutColumn$ = isLayoutColumn$;

    const shrinkDirection$ = new rx.BehaviorSubject();
    shrinkDirection$.subscribe((shrinkDirection) =>
      this.#handleShrinkDirectionChange(shrinkDirection)
    );
    this.#shrinkDirection$ = shrinkDirection$;

    const isPreview$ = new rx.BehaviorSubject(false);
    this.#isPreview$ = isPreview$;

    const isExpanded$ = new rx.BehaviorSubject();
    this.#isExpanded$ = isExpanded$;

    const isHideIconName$ = new rx.BehaviorSubject();
    this.#isHideIconName$ = isHideIconName$;
  }

  // handler
  #handleShrinkDirectionChange(shrinkDirection) {
    if (shrinkDirection === ShrinkDirection.Vertical) {
      return this.#root.classList.add(Selectors.ShrinkVertical);
    }

    if (shrinkDirection === ShrinkDirection.Horizontal) {
      return this.#root.classList.add(Selectors.ShrinkHorizontal);
    }

    this.#root.classList.remove(Selectors.ShrinkVertical);
    this.#root.classList.remove(Selectors.ShrinkHorizontal);
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
