import { AnnotationsMenu } from "./annotations.menu.js";

const SelectorIds = {
  annotationsMenu: "#irapha-menu__annotations",

  annotationsLine: "#irapha-menu__annotations__line",
  annotationsArrowLine: "#irapha-menu__annotations__arrowline",
  annotationsCurve: "#irapha-menu__annotations__curve",
  annotationsArrowCurve: "#irapha-menu__annotations__arrow-curve",

  annotationsFreeLine: "#irapha-menu__annotations__freeline",
  annotationsClosedShape: "#irapha-menu__annotations__closed-shape",
  annotationsCircle: "#irapha-menu__annotations__circle",
  annotationsEllipse: "#irapha-menu__annotations__ellipse",

  annotationsRectangle: "#irapha-menu__annotations__rectangle",
  annotationsLocalization: "#irapha-menu__annotations__localization",
  annotationsText: "#irapha-menu__annotations__text",
};

export class AnnotationsController {
  constructor() {
    const annotationsMenu = document.querySelector(SelectorIds.annotationsMenu);

    new AnnotationsMenu(annotationsMenu);
  }
}
