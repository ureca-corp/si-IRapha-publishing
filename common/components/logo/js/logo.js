import { MaximizeButton } from "./maximize-button.js";
import { ViewerInfoPopup } from "../../viewer-info/index.js";

const rx = rxjs;

const Selectors = {
  Logo: "irapha-logo",
  LogoContainer: "irapha-logo__container",
  LogoImage: "irapha-logo__logo-image",
  ViewerInfoPopup: "irapha-viewer-info-popup",
  MaximizeButton: "irapha-maximize__icon",

  UkButton: "uk-button-default",
  ShrinkVertical: "is-state--shrink-vertical",
  ShrinkHorizontal: "is-state--shrink-horizontal",
};

const ShrinkDirection = {
  vertical: "vertical",
  horizontal: "horizontal",
};

export class Logo {
  #element;
  #logoContainer;
  #logoImage;
  #viewerInfoPopup;
  #maximizeBtn;

  #shrinkDirection$;

  constructor() {
    this.#element = document.querySelector(`.${Selectors.Logo}`);
    this.#init();
  }

  // private
  #init() {
    this.#initLogoContainer();
    this.#initLogoImage();
    this.#initViewerInfoPopup();
    this.#initMaximizeBtn();

    this.#initStates();
  }

  #initStates() {
    const shrinkDirection$ = new rx.BehaviorSubject();
    shrinkDirection$.subscribe((shrinkDirection) =>
      this.#handleShrinkChange(shrinkDirection)
    );

    this.#shrinkDirection$ = shrinkDirection$;
  }

  #initLogoContainer() {
    this.#logoContainer = this.#element.querySelector(
      `.${Selectors.LogoContainer}`
    );
  }

  #initLogoImage() {
    const logoImage = this.#element.querySelector(`.${Selectors.LogoImage}`);
    logoImage.classList.add(Selectors.UkButton);

    this.#logoImage = logoImage;
  }

  #initViewerInfoPopup() {
    const viewerInfoPopup = new ViewerInfoPopup(
      this.#element.querySelector(`.${Selectors.ViewerInfoPopup}`)
    );
    viewerInfoPopup.init();

    this.#viewerInfoPopup = viewerInfoPopup;
  }

  #initMaximizeBtn() {
    const maximizeBtn = new MaximizeButton(
      this.#element.querySelector(`.${Selectors.MaximizeButton}`)
    );
    maximizeBtn.init();

    this.#maximizeBtn = maximizeBtn;
  }

  // actions
  #shrinkVertical() {
    this.#unshrinkHorizontal();
    this.#element.classList.add(Selectors.ShrinkVertical);
  }

  #unshrinkVertical() {
    this.#element.classList.remove(Selectors.ShrinkVertical);
  }

  #shrinkHorizontal() {
    this.#unshrinkVertical();
    this.#element.classList.add(Selectors.ShrinkHorizontal);
  }

  #unshrinkHorizontal() {
    this.#element.classList.remove(Selectors.ShrinkHorizontal);
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
