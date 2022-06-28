import { DisplayInfoMenu } from "./display-info.menu.js";

const SelectorIds = {
  displayInfoMenu: "#irapha-menu__display-info",
  displayInfoShowAll: "#irapha-menu__display-info__show-all",
  displayInfoHideAll: "#irapha-menu__display-info__hide-all",
  displayInfoInformation: "#irapha-menu__display-info__information",
  displayInfoAnnotation: "#irapha-menu__display-info__annotation",
  displayInfoMeasurements: "#irapha-menu__display-info__measurements",
};

export class DisplayInfoController {
  constructor() {
    const displayInfoMenu = document.querySelector(SelectorIds.displayInfoMenu);

    new DisplayInfoMenu(displayInfoMenu);
  }
}
