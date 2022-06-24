import { MaximizeButton } from "./maximize-button.js";
import { ViewerInfoPopup } from "/common/components/viewer-info/index.js";

const rx = rxjs;

const ClassSelectors = {
  Logo: ".irm-logo",
  LogoContainer: ".irm-logo__container",
  LogoImage: ".irm-logo__logo-image",
  ViewerInfoPopup: ".irm-viewer-info-popup",
  MaximizeButton: ".irm-maximize__icon",
};

const Classes = {
  UkButton: "uk-button-default",
  ShrinkVertical: "is-state--shrink-vertical",
  ShrinkHorizontal: "is-state--shrink-horizontal",
};

const ShrinkDirection = {
  vertical: "vertical",
  horizontal: "horizontal",
};

export class Logo {
  constructor() {
    this._element = document.querySelector(ClassSelectors.Logo);
    console.log("ok");
    this._init();
  }

  // private
  _init() {
    this._initLogoContainer();
    this._initLogoImage();
    this._initViewerInfoPopup();
    this._initMaximizeBtn();

    this._initStates();
  }

  _initStates() {
    const shrinkDirection$ = new rx.BehaviorSubject();
    shrinkDirection$.subscribe((shrinkDirection) =>
      this._handleShrinkChange(shrinkDirection)
    );

    this._shrinkDirection$ = shrinkDirection$;
  }

  _initLogoContainer() {
    this._logoContainer = this._element.querySelector(
      ClassSelectors.LogoContainer
    );
  }

  _initLogoImage() {
    const logoImage = this._element.querySelector(ClassSelectors.LogoImage);
    logoImage.classList.add(Classes.UkButton);

    this._logoImage = logoImage;
  }

  _initViewerInfoPopup() {
    const viewerInfoPopup = new ViewerInfoPopup(
      this._element.querySelector(ClassSelectors.ViewerInfoPopup)
    );
    viewerInfoPopup.init();

    this._viewerInfoPopup = viewerInfoPopup;
  }

  _initMaximizeBtn() {
    const maximizeBtn = new MaximizeButton(
      this._element.querySelector(ClassSelectors.MaximizeButton)
    );
    maximizeBtn.init();

    this._maximizeBtn = maximizeBtn;
  }

  // actions
  _shrinkVertical() {
    this._element.classList.add(Classes.ShrinkVertical);
  }

  _unshrinkVertical() {
    this._element.classList.remove(Classes.ShrinkVertical);
  }

  _shrinkHorizontal() {
    this._element.classList.add(Classes.ShrinkHorizontal);
  }

  _unshrinkHorizontal() {
    this._element.classList.remove(Classes.ShrinkHorizontal);
  }

  _removeAllShrink() {
    this._unshrinkVertical();
    this._unshrinkHorizontal();
  }

  // handler
  _handleShrinkHorizontalChange(isShrinkHorizontal) {
    if (!isShrinkHorizontal) return this._unshrinkHorizontal();

    return this._shrinkHorizontal();
  }

  _handleShrinkVerticalChange(isShrinkVertical) {
    if (!isShrinkVertical) return this._unshrinkVertical();

    return this._shrinkVertical();
  }

  _handleShrinkChange(shrinkDirection) {
    if (shrinkDirection === ShrinkDirection.vertical)
      return this._handleShrinkVerticalChange(shrinkDirection);

    if (shrinkDirection === ShrinkDirection.horizontal)
      return this._handleShrinkHorizontalChange(shrinkDirection);

    return this._removeAllShrink();
  }

  // props
  setShrinkDirection(shrinkDirection) {
    this._shrinkDirection$.next(shrinkDirection);
  }
}
