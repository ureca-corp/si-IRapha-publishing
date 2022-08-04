import { createElementFromHTML } from "../../../../utils/dom/index.js";
import { setOnMouseDragListener } from "../../../../utils/events/EventListener.js";
import { BaseElement } from "../../../base/base-element.js";
import { Selectors as CustomContextMenuSelectors } from "../../custom-context-menu/index.js";
import { LayerPopup } from "../js/layer-popup.js";
import { PopupAppbar } from "../popup-appbar/popup-appbar.js";

const $root = createElementFromHTML(`
<div class="${CustomContextMenuSelectors.ContextMenu}"></div>
`);

export class DraggablePopup extends BaseElement {
  #open$;
  #$children;

  #title;

  constructor({ open$, title, $children }) {
    super({ $element: $root });
    this.#open$ = open$;
    this.#$children = $children;
    this.#title = title;

    this.#init();
  }

  #init() {
    this.#initLayerPopup();
    this.#initPopupAppbar();
    this.#initChildren();
  }

  #initLayerPopup() {
    new LayerPopup({
      $element: $root,
      open$: this.#open$,
    });
  }

  #initPopupAppbar() {
    const $popupAppbar = new PopupAppbar({
      title: this.#title,
      onClose: () => this.#handleClose(),
    }).getEl();
    $root.prepend($popupAppbar);

    setOnMouseDragListener({
      emitter: $popupAppbar,
      dragCallback: ({ event }) => this.#handleMouseDrag(event),
    });
  }

  #initChildren() {
    if (!this.#$children) return;

    $root.appendChild(this.#$children);
  }

  // handlers
  #handleMouseDrag(event) {
    const $root = this.getEl();

    const rect = $root.getBoundingClientRect();
    const style = $root.style;

    style.top = `${rect.top + event.movementY}px`;
    style.bottom = "unset";
    style.left = `${rect.left + event.movementX}px`;
    style.right = "unset";
  }

  #handleClose() {
    this.#open$.next(null);
  }
}
