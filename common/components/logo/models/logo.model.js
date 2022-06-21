import { MaximizeButton } from "./maximize-button.js";

export class Logo {
  constructor() {
    this._element = document.querySelector(".irm-logo");
    this._maximizeBtn = new MaximizeButton(
      this._element.querySelector(".irm-logo__maximize-icon-wrapper")
    );
  }

  init() {
    this._initLogoImage();
    this._initViewerInfoPopup();
    this._maximizeBtn.init();
  }

  _initLogoImage() {
    const logoImage = this._element.querySelector(".irm-logo__logo");
    logoImage.classList.add("uk-button-default");

    this._logoImage = logoImage;
  }

  _initViewerInfoPopup() {
    const viewerInfoPopup = this._element.querySelector(
      ".irm-viewer-info__popup"
    );
    viewerInfoPopup.setAttribute("uk-drop", "mode: click");
  }

  hide() {
    console.log(this._logoImage);
    this._logoImage.style.opacity = 0;
  }

  visible() {
    this._logoImage.style.opacity = 1;
  }
}
