import { FoldingBar } from "../../folding-bar/index.js";

const rx = rxjs;

const Selectors = {
  ThumbnailBar: "irapha-thumbnail-bar",
  FoldingBar: "irapha-folding-bar",
};

export class ThumbnailBar {
  #root;

  #isLayoutColumn$;
  #isExpanded$;
  #shrinkDirection$;

  constructor() {
    this.#root = document.querySelector(`#${Selectors.ThumbnailBar}`);

    this.#initStates();

    new FoldingBar({
      element: this.#root.querySelector(`.${Selectors.FoldingBar}`),
      isLayoutColumn$: this.#isLayoutColumn$,
      isExpanded$: this.#isExpanded$,
      shrinkDirection$: this.#shrinkDirection$,
    });
  }

  // private
  #initStates() {
    const isLayoutColumn$ = new rx.BehaviorSubject();
    this.#isLayoutColumn$ = isLayoutColumn$;

    const shrinkDirection$ = new rx.BehaviorSubject();
    this.#shrinkDirection$ = shrinkDirection$;

    const isExpanded$ = new rx.BehaviorSubject();
    this.#isExpanded$ = isExpanded$;
  }

  // public
  setLayoutColumn(isVertical) {
    this.#isLayoutColumn$.next(isVertical);
  }
}
