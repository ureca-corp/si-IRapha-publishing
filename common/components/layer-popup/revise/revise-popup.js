import { createElementFromHTML } from "../../../utils/dom/index.js";
import { setOnMouseDragListener } from "../../../utils/events/EventListener.js";
import { BaseElement } from "../../base/index.js";
import { LayerPopup } from "../base/js/layer-popup.js";
import { PopupAppbar } from "../base/index.js";
import {
  createFooter,
  createMarkingSection,
  createShutterSection,
  createTransformSection,
  createDeleteSection,
} from "./elements/index.js";
import { Selectors } from "./common/index.js";

const Template = `
<div id="${Selectors.Root}" class="${Selectors.Root} irapha-context-menu">

  <form class="${Selectors.Form}" onsubmit="return false">
    <div class="${Selectors.Content}">
      <canvas></canvas>
      
      <div class="${Selectors.ContentRight}"></div>
    </div>

  </form>
</div>
`;

export class ReviseLayerPopup extends BaseElement {
  #open$;

  constructor() {
    super({ $element: createElementFromHTML(Template) });
    this.#open$ = window.store.reviseOpen$;

    this.#init();
  }

  // private
  #init() {
    const $root = this.getEl();

    new LayerPopup({
      $element: $root,
      open$: this.#open$,
    });

    const popupAppbar = new PopupAppbar({
      title: "Revise",
      onClose: () => this.#handleClose(),
    });
    $root.prepend(popupAppbar.getEl());

    setOnMouseDragListener({
      emitter: popupAppbar.getEl(),
      dragCallback: ({ event }) => this.#handleMouseDrag(event),
    });

    //
    const $form = this.getEl().querySelector(".irapha-revise__form");
    const $footer = createFooter({
      onCancle: () => {
        alert("Todo Cancle");
      },
      onSubmit: () => {
        alert("Todo Submit");
      },
    });

    $form.appendChild($footer);

    //
    const $contentRight = $root.querySelector(`.${Selectors.ContentRight}`);

    const { $section: $markingSection } = createMarkingSection();
    const { $section: $transformSection } = createTransformSection();
    const { $section: $shutterSection } = createShutterSection();
    const { $section: $deleteSection } = createDeleteSection();

    $contentRight.append(
      ...[$markingSection, $transformSection, $shutterSection, $deleteSection]
    );
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
