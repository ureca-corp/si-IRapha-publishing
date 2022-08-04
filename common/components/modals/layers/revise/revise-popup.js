import { createElementFromHTML } from "../../../../utils/dom/index.js";
import { setOnMouseDragListener } from "../../../../utils/events/EventListener.js";
import { BaseElement } from "../../../base/index.js";
import { PopupAppbar, LayerPopup } from "../base/index.js";
import { CustomContextMenuSelectors } from "../../context-menus/index.js";
import { Selectors } from "./common/index.js";
import {
  createDeleteSection,
  createFooter,
  createMarkingSection,
  createShutterSection,
  createTransformSection,
} from "./elements/index.js";

function ReviseComponent() {
  return createElementFromHTML(`
  <div id="${Selectors.Root}" class="${Selectors.Root} ${CustomContextMenuSelectors.ContextMenu}">
  
    <form class="${Selectors.Form}" onsubmit="return false">
      <div class="${Selectors.Content}">
        <canvas></canvas>
        
        <div class="${Selectors.ContentRight}"></div>
      </div>
    </form>
  
  </div>
  `);
}

export class ReviseLayerPopup extends BaseElement {
  #open$;

  constructor() {
    super({ $element: new ReviseComponent() });
    this.#open$ = window.store.reviseOpen$;

    this.#init();
  }

  // private
  #init() {
    this.#initBase();
    this.#initFooter();
    this.#initSections();
  }

  #initBase() {
    new LayerPopup({
      $element: this.getEl(),
      open$: this.#open$,
    });

    const $popupAppbar = new PopupAppbar({
      title: "Revise",
      onClose: () => this.#handleClose(),
    }).getEl();
    this.getEl().prepend($popupAppbar);

    setOnMouseDragListener({
      emitter: $popupAppbar,
      dragCallback: ({ event }) => this.#handleMouseDrag(event),
    });
  }

  #initFooter() {
    const { $form } = this.#getElements();

    const $footer = createFooter({
      onCancle: () => {
        alert("Todo Cancle");
      },
      onSubmit: () => {
        alert("Todo Submit");
      },
    });

    $form.appendChild($footer);
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

  #getElements() {
    const $root = this.getEl();

    const $form = $root.querySelector(`.${Selectors.Form}`);
    const $contentRight = $root.querySelector(`.${Selectors.ContentRight}`);

    return {
      $form,
      $contentRight,
    };
  }
}
