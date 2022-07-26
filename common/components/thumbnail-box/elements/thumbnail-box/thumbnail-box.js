import { KinSelector } from "../../../selectors/index.js";
import { ThumbnailList } from "../thumbnail-list/js/thumbnail-list.js";
import { FoldingBar } from "../../../folding-bar/index.js";

import {
  Selectors,
  LayoutClassType,
  ShrinkClassType,
  ShrinkType,
} from "../../common/index.js";

const rx = rxjs;

export class ThumbnailBox {
  #$root;

  #isLayoutColumn$ = new rx.BehaviorSubject();
  #isExpanded$ = new rx.BehaviorSubject();
  #isPreview$ = new rx.BehaviorSubject(false);
  #shrinkDirection$ = new rx.BehaviorSubject();

  constructor({ $element }) {
    this.#$root = $element;

    this.#initStates();
    this.#initChilds();

    this.#isLayoutColumn$.next(true);
  }

  // private
  #initChilds() {
    new FoldingBar({
      $element: this.#$root.querySelector(`.${Selectors.FoldingBar}`),
      isLayoutColumn$: this.#isLayoutColumn$,
      isExpanded$: this.#isExpanded$,
      isPreview$: this.#isPreview$,
      shrinkDirection$: this.#shrinkDirection$,
    });

    const kinSelector = new KinSelector({
      items: ["Option 01", "Option 02"],
      isHide$: this.#shrinkDirection$,
    });
    this.#$root
      .querySelector(".irapha-thumbnail-box__options")
      .appendChild(kinSelector.getRootElement());

    // =================================================================
    const models = Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      topLeft: ["S:0", "#1"],
      topRight: ["US"],
      bottomLeft: ["Cardiology"],
    }));

    const thumbnailList = new ThumbnailList({
      models,
      isLayoutColumn$: this.#isLayoutColumn$,
      isHide$: this.#isExpanded$,
    });
    this.#$root
      .querySelector("#testCCC")
      .appendChild(thumbnailList.getRootElement());
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
    if (isLayoutColumn) return this.#layoutColumn();

    return this.#resetLayout();
  }

  #handleShrinkDirectionChange(shrinkDirection) {
    if (shrinkDirection === ShrinkType.Vertical)
      return this.#$root.classList.add(ShrinkClassType.Column);

    this.#$root.classList.remove(ShrinkClassType.Column);
  }

  // layout control
  #layoutColumn() {
    this.#$root.classList.add(LayoutClassType.Column);
  }

  #resetLayout() {
    this.#$root.classList.remove(LayoutClassType.Column);
  }

  // public
  setLayoutColumn(isLayoutColumn) {
    this.#isLayoutColumn$.next(isLayoutColumn);
  }
}
