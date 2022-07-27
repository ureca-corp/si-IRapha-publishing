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
    new TransformationsController();
    new MeasurementsController();
    new AnnotationsController();
    new SecondaryCapturedImageController();

    new UtilityController();
  }
}
