import { VirtualLayoutController } from "./virtual-layout/index.js";
import { DisplayLayoutController } from "./display-layout/index.js";
import { NaviController } from "./navi/index.js";
import { DisplayInfoController } from "./display-info/index.js";

import { TransformationsController } from "./transformations/index.js";
import { MeasurementsController } from "./measurements/index.js";
import { AnnotationsController } from "./annotations/index.js";
import { SecondaryCapturedImageController } from "./secondary-captured-image/index.js";

import { UtilityController } from "./utility/index.js";

export class ToolboxMenuItemsController {
  constructor() {
    this.#init();
  }

  #init() {
    new VirtualLayoutController();
    new DisplayLayoutController();
    new NaviController();
    new DisplayInfoController();

    new TransformationsController();
    new MeasurementsController();
    new AnnotationsController();
    new SecondaryCapturedImageController();

    new UtilityController();
  }
}
