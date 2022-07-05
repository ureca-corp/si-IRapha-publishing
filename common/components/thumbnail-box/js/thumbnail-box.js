import { ThumbnailBoxControls } from "./controls.js";
import { FoldingBar } from "../../folding-bar/index.js";

const rx = rxjs;

const Selectors = {
  ThumbnailBar: "irapha-thumbnail-box",
  Controls: "irapha-thumbnail-box__controls",
  FoldingBar: "irapha-folding-bar",
};

export class ThumbnailBox {
  #root;

  #isLayoutColumn$;
  #isExpanded$;
  #isPreview$;
  #shrinkDirection$;

  constructor() {
    this.#root = document.querySelector(`#${Selectors.ThumbnailBar}`);

    this.#initStates();

    new FoldingBar({
      element: this.#root.querySelector(`.${Selectors.FoldingBar}`),
      isLayoutColumn$: this.#isLayoutColumn$,
      isExpanded$: this.#isExpanded$,
      isPreview$: this.#isPreview$,
      shrinkDirection$: this.#shrinkDirection$,
    });

    new ThumbnailBoxControls({
      element: this.#root.querySelector(`.${Selectors.Controls}`),
      isLayoutColumn$: this.#isLayoutColumn$,
      shrinkDirection$: this.#shrinkDirection$,
    });

    this.#isLayoutColumn$.next(true);
  }

  // private
  #initStates() {
    const isLayoutColumn$ = new rx.BehaviorSubject();
    this.#isLayoutColumn$ = isLayoutColumn$;

    const shrinkDirection$ = new rx.BehaviorSubject();
    this.#shrinkDirection$ = shrinkDirection$;

    const isPreview$ = new rx.BehaviorSubject(false);
    this.#isPreview$ = isPreview$;

    const isExpanded$ = new rx.BehaviorSubject();
    this.#isExpanded$ = isExpanded$;
  }

  // public
  setLayoutColumn(isLayoutColumn) {
    this.#isLayoutColumn$.next(isLayoutColumn);
  }
}
