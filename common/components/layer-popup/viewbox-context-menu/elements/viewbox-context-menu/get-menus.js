import {
  ViewboxWorkListMenu,
  ViewboxReportMenu,
  ViewboxVirtualLayoutMenu,
  ViewboxDisplayLayoutMenu,
  ViewboxDisplayInfoMenu,
  ViewboxDisplayAnnotationMenu,
  ViewboxDisplayMeasurementsMenu,
  ViewboxCombineMenu,
  ViewboxApplyAllMenu,
  ViewboxCineMenu,
} from "../menu-items/index.js";

export const getMenus = () => {
  const workListMenu = new ViewboxWorkListMenu();
  const reportMenu = new ViewboxReportMenu();
  const virtualLayoutMenu = new ViewboxVirtualLayoutMenu();
  const displayLayoutMenu = new ViewboxDisplayLayoutMenu();

  const displayInfoMenu = new ViewboxDisplayInfoMenu();
  const displayAnnotationMenu = new ViewboxDisplayAnnotationMenu();
  const displayMeasurementsMenu = new ViewboxDisplayMeasurementsMenu();
  const combineMenu = new ViewboxCombineMenu();

  const applyAllMenu = new ViewboxApplyAllMenu();
  const cineMenu = new ViewboxCineMenu();

  const menus = [
    workListMenu,
    reportMenu,
    virtualLayoutMenu,
    displayLayoutMenu,

    displayInfoMenu,
    displayAnnotationMenu,
    displayMeasurementsMenu,
    combineMenu,

    applyAllMenu,
    cineMenu,
  ];

  return menus;
};
