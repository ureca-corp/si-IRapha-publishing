import { TransformationsMenu } from "./transformations.menu.js";

const SelectorIds = {
  transformationsMenu: "#irapha-menu__transformations",
  transformationsReverse: "#irapha-menu__transformations__reverse",
  transformationsFlip: "#irapha-menu__transformations__flip",
  transformationsRotateLeft: "#irapha-menu__transformations__rotate-left",
  transformationsRotateRight: "#irapha-menu__transformations__rotate-right",
  transformationsInvert: "#irapha-menu__transformations__invert",
  transformationsSharpening: "#irapha-menu__transformations__sharpening",
  transformationsSmoothing: "#irapha-menu__transformations__smoothing",
  transformationsPseudoColor: "#irapha-menu__transformations__pseudo-color",
};

export class TransformationsController {
  constructor() {
    const transformationsMenu = document.querySelector(
      SelectorIds.transformationsMenu
    );

    new TransformationsMenu(transformationsMenu);
  }
}
