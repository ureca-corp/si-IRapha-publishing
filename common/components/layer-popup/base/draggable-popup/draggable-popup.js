import { createElementFromHTML } from "../../../../utils/dom/index.js";
import { setOnMouseDragListener } from "../../../../utils/events/EventListener.js";
import { BaseElement } from "../../../base/base-element.js";
import { Selectors as CustomContextMenuSelectors } from "../../custom-context-menu/index.js";
import { LayerPopup } from "../js/layer-popup.js";
import { PopupAppbar } from "../popup-appbar/popup-appbar.js";

const Template = `
<div class="${CustomContextMenuSelectors.ContextMenu}"></div>
`;

export class DraggablePopup extends BaseElement {
  #open$;
  #$children;

  constructor({ open$, $children }) {
    super({ $element: createElementFromHTML(Template) });
    this.#open$ = open$;
    this.#$children = $children;

    this.#init();
  }

  #init() {
    this.#initLayerPopup();
    this.#initPopupAppbar();
    this.#initChildren();
  }

  #initLayerPopup() {
    const $root = this.getEl();

    new LayerPopup({
      $element: $root,
      open$: this.#open$,
    });
  }

  #initPopupAppbar() {
    const $root = this.getEl();

    const popupAppbar = new PopupAppbar({
      title: "DICOM Information",
      onClose: () => this.#handleClose(),
    });
    $root.prepend(popupAppbar.getEl());

    setOnMouseDragListener({
      emitter: popupAppbar.getEl(),
      dragCallback: ({ event }) => this.#handleMouseDrag(event),
    });
  }

  #initChildren() {
    if (!this.#$children) return;

    const $root = this.getEl();

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
