import {
  ToolboxWorkListMenu,
  ToolboxReportMenu,
  ToolboxVirtualLayoutMenu,
  ToolboxDisplayLayoutMenu,
  ToolboxPrevStudyMenu,
  ToolboxNextStudyMenu,
  ToolboxWindowModeMenu,
  ToolboxFullScreenMenu,
  ToolboxCombineMenu,
  ToolboxApplyAllMenu,
  ToolboxCineMenu,
  ToolboxNaviMenu,
  ToolboxDisplayInfoMenu,
} from "../menu-items/index.js";

export const getFirstMenus = () => {
  const worklistMenu = new ToolboxWorkListMenu();
  const reportMenu = new ToolboxReportMenu();
  const prevStudyMenu = new ToolboxPrevStudyMenu();
  const nextStudyMenu = new ToolboxNextStudyMenu();

  const virtualLayoutMenu = new ToolboxVirtualLayoutMenu();
  const windowModeMenu = new ToolboxWindowModeMenu();
  const displayLayoutMenu = new ToolboxDisplayLayoutMenu();
  const fullScreenMenu = new ToolboxFullScreenMenu();

  const combineMenu = new ToolboxCombineMenu();
  const applyAllMenu = new ToolboxApplyAllMenu();
  const naviMenu = new ToolboxNaviMenu();
  const cineMenu = new ToolboxCineMenu();

  const displayInfoMenu = new ToolboxDisplayInfoMenu();

  const menus = [
    worklistMenu,
    reportMenu,
    prevStudyMenu,
    nextStudyMenu,

    virtualLayoutMenu,
    windowModeMenu,
    displayLayoutMenu,
    fullScreenMenu,

    combineMenu,
    applyAllMenu,
    naviMenu,
    cineMenu,

    displayInfoMenu,
  ];

  return menus;
};
