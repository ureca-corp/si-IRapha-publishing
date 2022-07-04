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
  #root;
  #logoContainer;
  #logoImage;
  #viewerInfoPopup;
  #maximizeBtn;

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
    this.#initLogoContainer();
    this.#initLogoImage();
    this.#initViewerInfoPopup();
    this.#initMaximizeBtn();

    // this.#initStates();
  }

  #initStates() {
    const shrinkDirection$ = new rx.BehaviorSubject();
    shrinkDirection$.subscribe((shrinkDirection) =>
      this.#handleShrinkChange(shrinkDirection)
    );

    this.#shrinkDirection$ = shrinkDirection$;
  }

  #initLogoContainer() {
    this.#logoContainer = this.#root.querySelector(
      `.${Selectors.LogoContainer}`
    );
  }

  #initLogoImage() {
    const logoImage = this.#root.querySelector(`.${Selectors.LogoImage}`);
    logoImage.classList.add(Selectors.UkButton);

    this.#logoImage = logoImage;
  }

  #initViewerInfoPopup() {
    const viewerInfoPopup = new ViewerInfoPopup(
      this.#root.querySelector(`.${Selectors.ViewerInfoPopup}`)
    );
    viewerInfoPopup.init();

    this.#viewerInfoPopup = viewerInfoPopup;
  }

  #initMaximizeBtn() {
    const maximizeBtn = new MaximizeButton(
      this.#root.querySelector(`.${Selectors.MaximizeButton}`)
    );
    maximizeBtn.init();

    this.#maximizeBtn = maximizeBtn;
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
