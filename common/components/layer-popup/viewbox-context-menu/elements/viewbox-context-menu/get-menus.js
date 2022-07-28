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
  ViewboxSelectMenu,
  ViewboxWLMenu,
  ViewboxWLPresetMenu,
  ViewboxZoomMenu,
  ViewboxPanMenu,
  ViewboxFitMenu,
  ViewboxlengthMenu,
  ViewboxAngleMenu,
  ViewboxTransformationsMenu,
  ViewboxMeasurementsMenu,
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

  //
  const selectMenu = new ViewboxSelectMenu();
  const wlMenu = new ViewboxWLMenu();
  const wlPresetMenu = new ViewboxWLPresetMenu();
  const zoomMenu = new ViewboxZoomMenu();

  const panMenu = new ViewboxPanMenu();
  const fitMenu = new ViewboxFitMenu();
  const lengthMenu = new ViewboxlengthMenu();
  const angleMenu = new ViewboxAngleMenu();

  const transformationsMenu = new ViewboxTransformationsMenu();
  const measurementsMenu = new ViewboxMeasurementsMenu();

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

    //
    selectMenu,
    wlMenu,
    wlPresetMenu,
    zoomMenu,

    panMenu,
    fitMenu,
    lengthMenu,
    angleMenu,

    transformationsMenu,
    measurementsMenu,
  ];

  return menus;
};
