import { createElementFromHTML } from "../../../../utils/dom/index.js";
import { Selectors as ContextMenuSelectors } from "../../custom-context-menu/index.js";
import { LayerPopup } from "../js/layer-popup.js";

const Selectors = {
  TopWrapper: "irapha-layer-popup__top-wrapper",
  BodyWrapper: "irapha-layer-popup__body-wrapper",
  BottomWrapper: "irapha-layer-popup__bottom-wrapper",
};

const Template = `
<div class="${ContextMenuSelectors.ContextMenu}">
  <section class="${Selectors.TopWrapper}"></section>
  <section class="${Selectors.BodyWrapper}"></section>
  <section class="${Selectors.BottomWrapper}"></section>
</div>
`;

export class LayerPopupTemplate extends LayerPopup {
  #$top;
  #$body;
  #$bottom;

  constructor({ open$, $top, $body, $bottom }) {
    super({
      $element: createElementFromHTML(Template),
      open$,
    });
    this.#$top = $top;
    this.#$body = $body;
    this.#$bottom = $bottom;

    this.#init();
  }

  #init() {
    this.#initChildren();
  }

  #initChildren() {
    const { $topWrapper, $bodyWrapper, $bottomWrapper } = this.#getElements();
    const $top = this.#$top;
    const $body = this.#$body;
    const $bottom = this.#$bottom;

    $top && $topWrapper.appendChild($top);
    $body && $bodyWrapper.appendChild($body);
    $bottom && $bottomWrapper.appendChild($bottom);
  }

  #getElements() {
    const $root = this.getEl();

    const $topWrapper = $root.querySelector(`.${Selectors.TopWrapper}`);
    const $bodyWrapper = $root.querySelector(`.${Selectors.BodyWrapper}`);
    const $bottomWrapper = $root.querySelector(`.${Selectors.BottomWrapper}`);

    return {
      $topWrapper,
      $bodyWrapper,
      $bottomWrapper,
    };
  }
}
