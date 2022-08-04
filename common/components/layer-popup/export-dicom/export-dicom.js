import { LayerPopup } from "../base/index.js";
import { setOnMouseDragListener } from "../../../utils/events/EventListener.js";
import { Selectors } from "./selectors.js";

const rx = rxjs;

export class ExportDicomLayerPopup {
  #$root;
  #$dragArea;

  #open$;

  constructor({ $element, open$ }) {
    this.#$root = $element;
    this.#$dragArea = $element.querySelector(`.${Selectors.DragArea}`);
    this.#open$ = open$;

    this.#init();
  }

  // private
  #init() {
    const $root = this.#$root;

    new LayerPopup({ $element: $root, open$: this.#open$ });

    this.#initCloseButton();
    this.#initCancelButton();
    this.#initSubmitButton();

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

  #initCancelButton() {
    const $cancelBtn = this.#$root.querySelector(`.${Selectors.CancelButton}`);
    rx.fromEvent($cancelBtn, "click").subscribe(() => this.#open$.next(null));
  }

  #initSubmitButton() {
    const $submitBtn = this.#$root.querySelector(`.${Selectors.SubmitButton}`);
    rx.fromEvent($submitBtn, "click").subscribe((e) => {
      alert("Todo");
    });
  }

  // handlers
  #handleMouseDrag(event) {
    const rect = this.#$root.getBoundingClientRect();
    const style = this.#$root.style;

    style.top = `${rect.top + event.movementY}px`;
    style.bottom = "unset";
    style.left = `${rect.left + event.movementX}px`;
    style.right = "unset";
  }
}
