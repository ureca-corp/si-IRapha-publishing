import { NaviMenu } from "./navi.menu.js";

const SelectorIds = {
  naviMenu: "#irapha-menu__navi",
  naviScoutLine: "#irapha-menu__navi__scout-line",
  naviCrossLink: "#irapha-menu__navi__cross-link",
  naviInterStudy: "#irapha-menu__navi__inter-study",
};

export class NaviController {
  constructor() {
    const naviMenu = document.querySelector(SelectorIds.naviMenu);

    new NaviMenu(naviMenu);
  }
}
