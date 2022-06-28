import { MeasurementsMenu } from "./measurements.menu.js";

const SelectorIds = {
  measurementsMenu: "#irapha-menu__measurements",

  measurementsPolyLine: "#irapha-menu__measurements__polyline",
  measurementsFreeLine: "#irapha-menu__measurements__freeline",
  measurementsCenterLine: "#irapha-menu__measurements__centerline",
  measurementsCurveLine: "#irapha-menu__measurements__curveline",

  measurementsRectangle: "#irapha-menu__measurements__rectangle",
  measurementsEllipse: "#irapha-menu__measurements__ellipse",
  measurementsAngleThreePoints: "#irapha-menu__measurements__angle-3points",
  measurementsCobbsAngle: "#irapha-menu__measurements__cobbs-angle",

  measurementsCTRatio: "#irapha-menu__measurements__CT-ratio",
  measurementsPixelValue: "#irapha-menu__measurements__pixel-value",
  measurementsMagnifying: "#irapha-menu__measurements__magnifying",
};

export class MeasurementsController {
  constructor() {
    const measurementsMenu = document.querySelector(
      SelectorIds.measurementsMenu
    );

    new MeasurementsMenu(measurementsMenu);
  }
}
