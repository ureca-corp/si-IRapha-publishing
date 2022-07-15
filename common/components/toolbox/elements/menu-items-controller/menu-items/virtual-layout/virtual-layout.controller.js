import { VirtualLayoutMenu } from "./virtual-layout.menu.js";
import { VirtualLayoutNormalMenu } from "./virtual-layout-normal.menu.js";
import { VirtualLayoutVerticalMenu } from "./virtual-layout-vertical.menu.js";
import { VirtualLayoutHorizontalMenu } from "./virtual-layout-horizontal.menu.js";

const SelectorIds = {
  vlMenu: "#irapha-menu__vl",
  vlNormalMenu: "#irapha-menu__vl__layout-normal",
  vlVerticalMenu: "#irapha-menu__vl__layout-vertical",
  vlHorizontalMenu: "#irapha-menu__vl__layout-horizontal",
};

export class VirtualLayoutController {
  constructor() {
    const virtualLayoutMenu = document.querySelector(SelectorIds.vlMenu);

    new VirtualLayoutMenu(virtualLayoutMenu);
    new VirtualLayoutNormalMenu(
      virtualLayoutMenu.querySelector(SelectorIds.vlNormalMenu)
    );
    new VirtualLayoutVerticalMenu(
      virtualLayoutMenu.querySelector(SelectorIds.vlVerticalMenu)
    );
    new VirtualLayoutHorizontalMenu(
      virtualLayoutMenu.querySelector(SelectorIds.vlHorizontalMenu)
    );
  }
}
