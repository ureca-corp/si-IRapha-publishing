import { MaximizeButton } from "./maximize-button.js";
import { ViewerInfoPopup } from "/common/components/viewer-info/index.js";

export class Logo {
  constructor() {
    this._element = document.querySelector(".irm-logo");
  }

  init() {
    this._initLogoContainer();
    this._initLogoImage();
    this._initViewerInfoPopup();
    this._initMaximizeBtn();
  }

  _initLogoContainer() {
    const className = ".irm-logo__container";

    this._logoContainer = this._element.querySelector(className);
  }

  _initLogoImage() {
    const className = ".irm-logo__logo-image";

    const logoImage = this._element.querySelector(className);
    logoImage.classList.add("uk-button-default");

    this._logoImage = logoImage;
  }

  _initViewerInfoPopup() {
    const className = ".irm-viewer-info-popup";

    const viewerInfoPopup = new ViewerInfoPopup(
      this._element.querySelector(className)
    );
    viewerInfoPopup.init();

    this._viewerInfoPopup = viewerInfoPopup;
  }

  _initMaximizeBtn() {
    const className = ".irm-maximize__icon";

    const maximizeBtn = new MaximizeButton(
      this._element.querySelector(className)
    );
    maximizeBtn.init();

    this._maximizeBtn = maximizeBtn;
  }

  // actions
  hide() {
    this._logoImage.style.opacity = 0;
    this._element.style.height = "30px";
  }

  visible() {
    this._logoImage.style.opacity = 1;
    this._element.style.height = "80px";
  }

  removeShrinkHorizontal() {
    this.visible();

    this._logoContainer.classList.remove("is-state--shrink-horizontal");
  }

  setShrinkHorizontal() {
    this.hide();

    this._logoContainer.classList.add("is-state--shrink-horizontal");
  }
}
