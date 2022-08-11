import "../../libs/index.js";
import { MobileStudyListPage } from "../../common/mobile/pages/study-list/study-list.js";

document
  .querySelector("#irapha-app")
  .appendChild(new MobileStudyListPage().getEl());
