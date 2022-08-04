import { useMouseDragTracking } from "../../../../hooks/index.js";
import { createElementFromHTML } from "../../../../utils/dom/index.js";
import { LayerPopupTemplate, PopupAppbar } from "../base/index.js";
import { Selectors } from "./common/index.js";
import {
  createDeleteSection,
  createFooter,
  createMarkingSection,
  createShutterSection,
  createTransformSection,
} from "./elements/index.js";

function FormComp() {
  return createElementFromHTML(`
  <form class="${Selectors.Form}" onsubmit="return false">
    <div class="${Selectors.Content}">
      <canvas></canvas>
      
      <div class="${Selectors.ContentRight}"></div>
    </div>
  </form>
  `);
}

export class ReviseLayerPopup extends LayerPopupTemplate {
  #open$;

  #$form;

  constructor() {
    const $popupAppbar = new PopupAppbar({
      title: "Revise",
      onClose: () => this.#handleClose(),
    }).getEl();

    const $inner = new FormComp();

    const $footer = createFooter({
      onCancel: () => {
        alert("Todo Cancel");
      },
      onSubmit: () => {
        alert("Todo Submit");
      },
    });

    const open$ = window.store.reviseOpen$;

    super({
      open$,
      $top: $popupAppbar,
      $body: $inner,
      $bottom: $footer,
    });

    this.#$form = $inner;
    this.#open$ = open$;

    useMouseDragTracking({ $emitter: $popupAppbar, $target: this.getEl() });

    this.#init();
  }

  // private
  #init() {
    this.#initSections();
  }

  #initSections() {
    const { $contentRight } = this.#getElements();

    const { $section: $markingSection } = createMarkingSection();
    const { $section: $transformSection } = createTransformSection();
    const { $section: $shutterSection } = createShutterSection();
    const { $section: $deleteSection } = createDeleteSection();

    $contentRight.append(
      ...[$markingSection, $transformSection, $shutterSection, $deleteSection]
    );
  }

  #handleClose() {
    this.#open$.next(null);
  }

  #getElements() {
    const $form = this.#$form;
    const $contentRight = $form.querySelector(`.${Selectors.ContentRight}`);

    return {
      $form,
      $contentRight,
    };
  }
}
