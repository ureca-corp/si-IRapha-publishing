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
  ViewboxAnnotationsMenu,
  ViewboxRefreshMenu,
  ViewboxUndoMenu,
  ViewboxResetMenu,
  ViewboxDeleteImageMenu,
  ViewboxDicomMenu,
  ViewboxCopyMenu,
  ViewboxMoveMenu,
  ViewboxSaveMenu,
  ViewboxExternalMenu,
  ViewboxSettingMenu,
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

  //
  const annotationsMenu = new ViewboxAnnotationsMenu();
  const refreshMenu = new ViewboxRefreshMenu();
  const undoMenu = new ViewboxUndoMenu();
  const resetMenu = new ViewboxResetMenu();

  const deleteImageMenu = new ViewboxDeleteImageMenu();
  const dicomMenu = new ViewboxDicomMenu();
  const copyMenu = new ViewboxCopyMenu();
  const moveMenu = new ViewboxMoveMenu();

  const saveMenu = new ViewboxSaveMenu();
  const externalMenu = new ViewboxExternalMenu();
  const settingMenu = new ViewboxSettingMenu();

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

    //
    annotationsMenu,
    refreshMenu,
    undoMenu,
    resetMenu,

    deleteImageMenu,
    dicomMenu,
    copyMenu,
    moveMenu,

    saveMenu,
    externalMenu,
    settingMenu,
  ];

  return menus;
};
