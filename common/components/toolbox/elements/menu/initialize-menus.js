import {
  ToolboxVirtualLayoutMenu,
  ToolboxDisplayLayoutMenu,
} from "../menu-items/index.js";

export const initializeMenus = ($root) => {
  const virtualLayoutMenu = new ToolboxVirtualLayoutMenu();
  const displayLayoutMenu = new ToolboxDisplayLayoutMenu();

  const menus = [virtualLayoutMenu, displayLayoutMenu];
  const $menus = menus.map((it) => it.getRootElement());

  $root.append(...$menus);
};
