import { MobileLoginPage } from "../../common/components/_mobile/pages/login/login.js";
import "../../libs/index.js";

document
  .querySelector("#irapha-app")
  .appendChild(new MobileLoginPage().getEl());
