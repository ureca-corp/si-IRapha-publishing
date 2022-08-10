import { MobileViewerPage } from "../../common/_mobile/pages/viewer/viewer.js";
import "../../libs/index.js";

document
  .querySelector("#irapha-app")
  .appendChild(new MobileViewerPage().getEl());
