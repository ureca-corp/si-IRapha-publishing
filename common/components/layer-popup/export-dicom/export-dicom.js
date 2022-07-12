import { LayerPopup } from "../base/js/layer-popup.js";
import { setOnMouseDragListener } from "../../../utils/events/EventListener.js";

const rx = rxjs;

const Selectors = {
  CloseButton: "irapha____close",
  CancelButton: "irapha____cancel",
  SubmitButton: "irapha____export",
  DragArea: "irapha____title",
};

export class ExportDicomLayerPopup {
  #root;
  #dragArea;

  #open$;

  constructor({ element, open$ }) {
    this.#root = element;
    this.#dragArea = element.querySelector(`.${Selectors.DragArea}`);

    this.#open$ = open$;

    new LayerPopup({ element, open$ });

    this.#initCloseButton();
    this.#initCancelButton();
    this.#initSubmitButton();

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

  #initCancelButton() {
    const cancelBtn = this.#root.querySelector(`.${Selectors.CancelButton}`);
    rx.fromEvent(cancelBtn, "click").subscribe(() => this.#open$.next(null));
  }

  #initSubmitButton() {
    const submitBtn = this.#root.querySelector(`.${Selectors.SubmitButton}`);
    rx.fromEvent(submitBtn, "click").subscribe(() => {
      alert("Todo");
    });
  }

  // handlers
  #handleMouseDrag(event) {
    const rect = this.#root.getBoundingClientRect();
    const style = this.#root.style;

    style.top = `${rect.top + event.movementY}px`;
    style.bottom = "unset";
    style.left = `${rect.left + event.movementX}px`;
    style.right = "unset";
  }
}
