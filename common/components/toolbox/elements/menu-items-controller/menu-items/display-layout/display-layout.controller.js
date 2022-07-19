import { DisplayLayoutMenu } from "./display-layout.menu.js";
import { DisplayLayoutConfigMenu } from "./display-layout-config.menu.js";
import {
  DisplayLayoutOneByOne,
  DisplayLayoutOneByTwo,
  DisplayLayoutTwoByOne,
  DisplayLayoutTwoByTwo,
} from "./sub/index.js";

const SelectorIds = {
  dlConfigMenu: "#irapha-menu__display-layout__config",
};

const Selectors = {
  Menu: "irapha-menu__display-layout",
  OneByOne: "irapha-menu__display-layout__1by1",
  OneByTwo: "irapha-menu__display-layout__1by2",
  TwoByOne: "irapha-menu__display-layout__2by1",
  TwoByTwo: "irapha-menu__display-layout__2by2",
};

export class DisplayLayoutController {
  constructor() {
    const displayLayoutMenu = document.querySelector(`#${Selectors.Menu}`);

    new DisplayLayoutMenu(displayLayoutMenu);
    new DisplayLayoutConfigMenu(
      displayLayoutMenu.querySelector(SelectorIds.dlConfigMenu)
    );

    //
    new DisplayLayoutOneByOne({
      element: displayLayoutMenu.querySelector(`#${Selectors.OneByOne}`),
    });

    new DisplayLayoutOneByTwo({
      element: displayLayoutMenu.querySelector(`#${Selectors.OneByTwo}`),
    });

    new DisplayLayoutTwoByOne({
      element: displayLayoutMenu.querySelector(`#${Selectors.TwoByOne}`),
    });

    new DisplayLayoutTwoByTwo({
      element: displayLayoutMenu.querySelector(`#${Selectors.TwoByTwo}`),
    });
  }
}
