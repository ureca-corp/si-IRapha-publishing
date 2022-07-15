import { UtilityMenu } from "./utility.menu.js";

const SelectorIds = {
  utilityMenu: "#irapha-menu__utility",
  utilityReset: "#irapha-menu__utility__reset",
  utilityDICOM: "#irapha-menu__utility__DICOM",
  utilityCopy: "#irapha-menu__utility__copy",
  utilitySetting: "#irapha-menu__utility__setting",
};

export class UtilityController {
  constructor() {
    const utilityMenu = document.querySelector(SelectorIds.utilityMenu);

    new UtilityMenu(utilityMenu);
  }
}
