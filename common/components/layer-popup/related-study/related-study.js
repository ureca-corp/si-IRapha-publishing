import { LayerPopup } from "../base/js/layer-popup.js";
import { setOnMouseDragListener } from "../../../utils/events/EventListener.js";
import { DataGrid } from "../../tables/index.js";
import { Selectors } from "./selectors.js";

const rx = rxjs;

export class RelatedStudyLayerPopup {
  #$root;
  #$dragArea;

  #open$;

  constructor({ $element, open$ }) {
    this.#$root = $element;
    this.#$dragArea = $element.querySelector(`.${Selectors.TopArea}`);
    this.#open$ = open$;

    this.#init();
  }

  // private
  #init() {
    const $root = this.#$root;

    new LayerPopup({ $element: $root, open$: this.#open$ });
    new DataGrid({
      $element: $root.querySelector(`.${Selectors.DataGrid}`),
    });

    this.#initCloseButton();

    setOnMouseDragListener({
      emitter: this.#$dragArea,
      dragCallback: ({ event }) => this.#handleMouseDrag(event),
    });
  }

  #initCloseButton() {
    const $closeBtn = this.#$root.querySelector(`.${Selectors.CloseButton}`);
    $closeBtn.setAttribute("uk-close", true);

    rx.fromEvent($closeBtn, "click").subscribe(() => this.#open$.next(null));
  }

  #handleMouseDrag(event) {
    const rect = this.#$root.getBoundingClientRect();
    const style = this.#$root.style;

    style.top = `${rect.top + event.movementY}px`;
    style.bottom = "unset";
    style.left = `${rect.left + event.movementX}px`;
    style.right = "unset";
  }
}
