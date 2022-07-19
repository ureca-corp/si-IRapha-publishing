import { VirtualLayoutController } from "./menu-items/virtual-layout/index.js";
import { DisplayLayoutController } from "./menu-items/display-layout/index.js";
import { NaviController } from "./menu-items/navi/index.js";
import { CineController } from "./menu-items/cine/index.js";
import { DisplayInfoController } from "./menu-items/display-info/index.js";

import { TransformationsController } from "./menu-items/transformations/index.js";
import { MeasurementsController } from "./menu-items/measurements/index.js";
import { AnnotationsController } from "./menu-items/annotations/index.js";
import { SecondaryCapturedImageController } from "./menu-items/secondary-captured-image/index.js";

import { UtilityController } from "./menu-items/utility/index.js";

export class ToolboxMenuItemsController {
  constructor() {
    this.#init();
  }

  #init() {
    new VirtualLayoutController();
    new DisplayLayoutController();
    new NaviController();
    new CineController();
    new DisplayInfoController();

    new TransformationsController();
    new MeasurementsController();
    new AnnotationsController();
    new SecondaryCapturedImageController();

    new UtilityController();
  }
}
