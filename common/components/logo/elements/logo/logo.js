import { MaximizeButton } from "../maximize-button/maximize-button.js";

import { Selectors, ShrinkClassType, ShrinkType } from "../../common/index.js";

export class Logo {
  #root;

  constructor({ element, shrinkDirection$ }) {
    this.#root = element;

    this.#init();

    shrinkDirection$.subscribe((shrinkDirection) =>
      this.#handleShrinkChange(shrinkDirection)
    );
  }

  // private
  #init() {
    this.#initLogoImage();
    // this.#initViewerInfoPopup();
    this.#initMaximizeBtn();
  }

  #initLogoImage() {
    const logoImage = this.#root.querySelector(`.${Selectors.LogoImage}`);
    logoImage.classList.add(Selectors.UkButton);
  }

  #initMaximizeBtn() {
    new MaximizeButton({
      element: this.#root.querySelector(`.${Selectors.MaximizeButton}`),
    });
  }

  // actions
  #shrinkVertical() {
    this.#unshrinkHorizontal();
    this.#root.classList.add(ShrinkClassType.Column);
  }

  #unshrinkVertical() {
    this.#root.classList.remove(ShrinkClassType.Column);
  }

  #shrinkHorizontal() {
    this.#unshrinkVertical();
    this.#root.classList.add(ShrinkClassType.Row);
  }

  #unshrinkHorizontal() {
    this.#root.classList.remove(ShrinkClassType.Row);
  }

  #removeAllShrink() {
    this.#unshrinkVertical();
    this.#unshrinkHorizontal();
  }

  // handler
  #handleShrinkHorizontalChange(isShrinkHorizontal) {
    if (!isShrinkHorizontal) return this.#unshrinkHorizontal();

    return this.#shrinkHorizontal();
  }

  #handleShrinkVerticalChange(isShrinkVertical) {
    if (!isShrinkVertical) return this.#unshrinkVertical();

    return this.#shrinkVertical();
  }

  #handleShrinkChange(shrinkDirection) {
    if (shrinkDirection === ShrinkType.Vertical)
      return this.#handleShrinkVerticalChange(shrinkDirection);

    if (shrinkDirection === ShrinkType.Horizontal)
      return this.#handleShrinkHorizontalChange(shrinkDirection);

    return this.#removeAllShrink();
  }
}
