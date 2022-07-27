import { ToolboxVirtualLayoutMenu } from "../menu-items/index.js";

export const initializeMenus = ($root) => {
  const toolboxVLMenu = new ToolboxVirtualLayoutMenu();

  const menus = [toolboxVLMenu];
  const $menus = menus.map((it) => it.getRootElement());

  $root.append(...$menus);
};
