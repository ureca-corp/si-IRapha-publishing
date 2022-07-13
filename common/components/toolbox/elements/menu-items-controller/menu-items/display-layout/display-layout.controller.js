import { DisplayLayoutMenu } from "./display-layout.menu.js";
import { DisplayLayoutConfigMenu } from "./display-layout-config.menu.js";

const SelectorIds = {
  dlMenu: "#irapha-menu__display-layout",
  dlOnetoOneMenu: "#irapha-menu__display-layout__1to1",
  dlOnetoTwoMenu: "#irapha-menu__display-layout__1to2",
  dlTwoToOneMenu: "#irapha-menu__display-layout__2to1",
  dlTwotoTwoMenu: "#irapha-menu__display-layout__2to2",
  dlConfigMenu: "#irapha-menu__display-layout__config",
};

export class DisplayLayoutController {
  constructor() {
    const displayLayoutMenu = document.querySelector(SelectorIds.dlMenu);

    new DisplayLayoutMenu(displayLayoutMenu);
    new DisplayLayoutConfigMenu(
      displayLayoutMenu.querySelector(SelectorIds.dlConfigMenu)
    );
  }
}
