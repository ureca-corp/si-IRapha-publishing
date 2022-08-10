import "../../libs/index.js";
import { MobileStudyListPage } from "../../common/_mobile/pages/study-list/study-list.js";

document
  .querySelector("#irapha-app")
  .appendChild(new MobileStudyListPage().getEl());
