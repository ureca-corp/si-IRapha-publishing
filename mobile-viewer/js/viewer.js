import "../../libs/index.js";
import { MobileViewerPage } from "../../common/mobile/pages/viewer/viewer.js";

document
  .querySelector("#irapha-app")
  .appendChild(new MobileViewerPage().getEl());
