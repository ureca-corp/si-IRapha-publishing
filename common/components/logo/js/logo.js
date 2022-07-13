import { MaximizeButton } from "./maximize-button.js";
import { ViewerInfoPopup } from "../../viewer-info/index.js";

const rx = rxjs;

const Selectors = {
  Logo: "irapha-logo",
  LogoContainer: "irapha____container",
  LogoImage: "irapha____logo-image",
  ViewerInfoPopup: "irapha-viewer-info-popup",
  MaximizeButton: "irapha-maximize__icon",

  UkButton: "uk-button-default",
  ShrinkVertical: "--shrink-v",
  ShrinkHorizontal: "--shrink-h",
};

const ShrinkDirection = {
  vertical: "vertical",
  horizontal: "horizontal",
};

export class Logo {
  #root;

  #shrinkDirection$;

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
    this.#initViewerInfoPopup();
    this.#initMaximizeBtn();
  }

  #initLogoImage() {
    const logoImage = this.#root.querySelector(`.${Selectors.LogoImage}`);
    logoImage.classList.add(Selectors.UkButton);
  }

  #initViewerInfoPopup() {
    new ViewerInfoPopup({
      element: this.#root.querySelector(`.${Selectors.ViewerInfoPopup}`),
    });
  }

  #initMaximizeBtn() {
    new MaximizeButton({
      element: this.#root.querySelector(`.${Selectors.MaximizeButton}`),
    });
  }

  // actions
  #shrinkVertical() {
    this.#unshrinkHorizontal();
    this.#root.classList.add(Selectors.ShrinkVertical);
  }

  #unshrinkVertical() {
    this.#root.classList.remove(Selectors.ShrinkVertical);
  }

  #shrinkHorizontal() {
    this.#unshrinkVertical();
    this.#root.classList.add(Selectors.ShrinkHorizontal);
  }

  #unshrinkHorizontal() {
    this.#root.classList.remove(Selectors.ShrinkHorizontal);
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
    if (shrinkDirection === ShrinkDirection.vertical)
      return this.#handleShrinkVerticalChange(shrinkDirection);

    if (shrinkDirection === ShrinkDirection.horizontal)
      return this.#handleShrinkHorizontalChange(shrinkDirection);

    return this.#removeAllShrink();
  }

  // public
  setShrinkDirection(shrinkDirection) {
    this.#shrinkDirection$.next(shrinkDirection);
  }
}
