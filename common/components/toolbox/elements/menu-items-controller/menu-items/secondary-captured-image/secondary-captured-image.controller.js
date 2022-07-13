import { SecondaryCapturedImageMenu } from "./secondary-captured-image.menu.js";

const SelectorIds = {
  sciMenu: "#irapha-menu__secondary-captured-image",
  sciCaptureImage: "#irapha-menu__secondary-captured-image__capture-image",
  sciCaptureLayout: "#irapha-menu__secondary-captured-image__capture-layout",
  sciCaptureViewer: "#irapha-menu__secondary-captured-image__capture-viewer",
};

export class SecondaryCapturedImageController {
  constructor() {
    const secondaryCapturedImageMenu = document.querySelector(
      SelectorIds.sciMenu
    );

    new SecondaryCapturedImageMenu(secondaryCapturedImageMenu);
  }
}
