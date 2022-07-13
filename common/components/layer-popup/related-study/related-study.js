import { LayerPopup } from "../base/js/layer-popup.js";
import { setOnMouseDragListener } from "../../../utils/events/EventListener.js";
import { DataGrid } from "../../tables/index.js";

const rx = rxjs;

const Selectors = {
  CloseButton: "irapha____close",
  TopArea: "irapha____top",
  DataGrid: "irapha-related-study__data-grid",
};

export class RelatedStudyLayerPopup {
  #root;
  #dragArea;

  #open$;

  constructor({ element, open$ }) {
    this.#root = element;
    this.#dragArea = element.querySelector(`.${Selectors.TopArea}`);
    this.#open$ = open$;

    new LayerPopup({ element, open$ });
    new DataGrid({
      element: element.querySelector(`.${Selectors.DataGrid}`),
    });

    this.#initCloseButton();

    setOnMouseDragListener({
      emitter: this.#dragArea,
      dragCallback: ({ event }) => this.#handleMouseDrag(event),
    });
  }

  // private
  #initCloseButton() {
    const closeBtn = this.#root.querySelector(`.${Selectors.CloseButton}`);
    rx.fromEvent(closeBtn, "click").subscribe(() => this.#open$.next(null));
  }

  #handleMouseDrag(event) {
    const rect = this.#root.getBoundingClientRect();
    const style = this.#root.style;

    style.top = `${rect.top + event.movementY}px`;
    style.bottom = "unset";
    style.left = `${rect.left + event.movementX}px`;
    style.right = "unset";
  }
}