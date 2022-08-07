import { createElementFromHTML } from "../../utils/dom/index.js";
import { BaseElement } from "../base/index.js";

const Selectors = {
  Id: "irapha-viewer-info-popup",
  Container: "irapha-viewer-info",
  Title: "irapha-viewer-info__title",
  ContentContainer: "irapha-viewer-info__content",
  ContentHelp: "irapha-viewer-info__content__help",
  ContentDivider: "irapha-viewer-info__content__divider",
  Footer: "irapha-viewer-info__footer",
  Barcode: "irapha-viewer-info__footer__barcode",
  Logo: "irapha-viewer-info__footer__logo",

  UkModal: "uk-modal",
  UkModalDialog: "uk-modal-dialog",
  UkMarginAutoVertical: "uk-margin-auto-vertical",
};

export class ViewerInfoPopup extends BaseElement {
  constructor() {
    super({ $element: new ViewerInfoPopupComp() });
  }
}

function ViewerInfoPopupComp() {
  const BarcodePath = "../../assets/images/img_barcode.jpg";
  const LogoPath = "../../assets/images/logo.svg";

  return createElementFromHTML(`
  <div id="${Selectors.Id}" ${Selectors.UkModal}>
    <div
      class="${Selectors.Container} ${Selectors.UkModalDialog} ${Selectors.UkMarginAutoVertical}"
    >
      <h1 class="${Selectors.Title}">I-Rapha View v2.0.1</h1>

      <address class="${Selectors.ContentContainer}">
        <p class="${Selectors.ContentHelp}">
          Help <b>bizinfo@irm.kr</b>
        </p>

        <div class="${Selectors.ContentDivider}"></div>

        <div>
          <div><b>IRM Inc.</b>8th-2, HongWoo Bldg,</div>
          <div>15, Yeoksam-ro 8-gil, Gangnam-gu,</div>
          <div>Seoul,</div>
          <div>06250, Republic of Korea</div>
        </div>
      </address>

      <div class="${Selectors.Footer}">
        <img
          class="${Selectors.Barcode}"
          src="${BarcodePath}"
          alt="barcode"
        />
        <img
          class="${Selectors.Logo}"
          src="${LogoPath}"
          alt="logo"
        />
      </div>
    </div>
  </div>
  `);
}
