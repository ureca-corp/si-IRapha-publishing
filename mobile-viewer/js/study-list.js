import { MobileStudyListPage } from "../../common/_mobile/pages/study-list/study-list.js";
import "../../libs/index.js";

document
  .querySelector("#irapha-app")
  .appendChild(new MobileStudyListPage().getEl());
