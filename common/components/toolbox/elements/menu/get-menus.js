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
  ToolboxKeyImageNoteMenu,
  ToolboxSelectorMenu,
  ToolboxWindowLevelMenu,
  ToolboxZoomMenu,
  ToolboxPanningMenu,
  ToolboxFitMenu,
  ToolboxRotateLeftMenu,
  ToolboxRotateRightMenu,
  ToolboxLengthMenu,
  ToolboxAngleMenu,
  ToolboxTransformationsMenu,
  ToolboxMeasurementsMenu,
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

export const getSecondMenus = () => {
  const keyImageNoteMenu = new ToolboxKeyImageNoteMenu();
  const selectorMenu = new ToolboxSelectorMenu();
  const windowLevelMenu = new ToolboxWindowLevelMenu();
  const zoomMenu = new ToolboxZoomMenu();

  const panningMenu = new ToolboxPanningMenu();
  const fitMenu = new ToolboxFitMenu();
  const rotateLeftMenu = new ToolboxRotateLeftMenu();
  const rotateRightMenu = new ToolboxRotateRightMenu();

  const lengthMenu = new ToolboxLengthMenu();
  const angleMenu = new ToolboxAngleMenu();
  const transformationsMenu = new ToolboxTransformationsMenu();
  const measurementsMenu = new ToolboxMeasurementsMenu();

  const menus = [
    keyImageNoteMenu,
    selectorMenu,
    windowLevelMenu,
    zoomMenu,

    panningMenu,
    fitMenu,
    rotateLeftMenu,
    rotateRightMenu,

    lengthMenu,
    angleMenu,
    transformationsMenu,
    measurementsMenu,
  ];

  return menus;
};
