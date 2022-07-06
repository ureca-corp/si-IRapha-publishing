import { ThumbnailBoxControls } from "../elements/controls/controls.js";
import { FoldingBar } from "../../folding-bar/index.js";
import { ThumbnailList } from "../elements/thumbnail-list/js/thumbnail-list.js";
import {
  LayoutClassType,
  ShrinkType,
  ShrinkClassType,
} from "../types/index.js";

const rx = rxjs;

const Selectors = {
  ThumbnailBar: "irapha-thumbnail-box",
  Controls: "irapha-thumbnail-box__controls",
  FoldingBar: "irapha-folding-bar",
  List: "irapha-thumbnail-list",
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

    new ThumbnailList({
      element: this.#root.querySelector(`.${Selectors.List}`),
      isLayoutColumn$: this.#isLayoutColumn$,
      isHide$: this.#isExpanded$,
    });

    this.#isLayoutColumn$.next(true);
  }

  // private
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
  }

  // handler
  #handleLayoutChange(isLayoutColumn) {
    if (isLayoutColumn) return this.#layoutColumn();

    return this.#resetLayout();
  }

  #handleShrinkDirectionChange(shrinkDirection) {
    if (shrinkDirection === ShrinkType.Vertical)
      return this.#root.classList.add(ShrinkClassType.Column);

    this.#root.classList.remove(ShrinkClassType.Column);
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
}
