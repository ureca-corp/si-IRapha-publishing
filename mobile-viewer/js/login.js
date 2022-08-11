import "../../libs/index.js";
import { MobileLoginPage } from "../../common/mobile/pages/login/login.js";

document
  .querySelector("#irapha-app")
  .appendChild(new MobileLoginPage().getEl());
