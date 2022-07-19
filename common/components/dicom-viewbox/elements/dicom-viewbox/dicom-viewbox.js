import { Selectors, PositionClassType } from "../../common/index.js";
import { CinePlayController } from "../../../cineplay-controller/index.js";

/**
 * type descItems = {
 *  topLeft: Element,
 *  topCenter: Element,
 *  topRight: Element,
 *  left: Element,
 *  right: Element,
 *  bottomLeft: Element,
 *  bottomCenter: Element,
 *  bottomRight: Element,
 * }
 */
export class DicomViewBox {
  #root;
  #cinePlayController;

  constructor({ descItems, hasController }) {
    this.#init({ descItems, hasController });
  }

  // private
  #init({ descItems, hasController }) {
    const root = document.createElement("div");
    root.classList.add(Selectors.ViewBox);
    this.#root = root;

    this.#initGrid({ descItems });

    if (hasController) this.#initCinePlayController();
  }

  #initGrid({ descItems }) {
    const grid = createGrid();

    const topLeft = createDesc({
      positionCSS: PositionClassType.TopLeft,
      children: descItems?.topLeft,
    });

    const topCenter = createDesc({
      positionCSS: PositionClassType.TopCenter,
      children: descItems?.topCenter,
    });

    const topRight = createDesc({
      positionCSS: PositionClassType.TopRight,
      children: descItems?.topRight,
    });

    const left = createDesc({
      positionCSS: PositionClassType.Left,
      children: descItems?.left,
    });

    const right = createDesc({
      positionCSS: PositionClassType.Right,
      children: descItems?.right,
    });

    const bottomLeft = createDesc({
      positionCSS: PositionClassType.BottomLeft,
      children: descItems?.bottomLeft,
    });

    const bottomCenter = createDesc({
      positionCSS: PositionClassType.BottomCenter,
      children: descItems?.bottomCenter,
    });

    const bottomRight = createDesc({
      positionCSS: PositionClassType.BottomRight,
      children: descItems?.bottomRight,
    });

    const canvas = document.createElement("canvas");

    grid.append(
      ...[
        topLeft,
        topCenter,
        topRight,
        left,
        right,
        bottomLeft,
        bottomCenter,
        bottomRight,
        canvas,
      ]
    );

    this.#root.append(grid);
  }

  #initCinePlayController() {
    const globalCineControllerHide$ = store.cinePlayControllerHide$;

    const cinePlayController = new CinePlayController({
      isHideController$: globalCineControllerHide$,
    });
    this.#cinePlayController = cinePlayController;

    this.#root.append(cinePlayController.getDomElement());
  }

  getDomElement() {
    return this.#root;
  }
}

// =================================================================
const createGrid = () => {
  const div = document.createElement("div");
  div.classList.add(Selectors.ViewBoxScreen);

  return div;
};

const createDesc = ({ children, positionCSS }) => {
  const div = document.createElement("div");
  div.classList.add(Selectors.ViewBoxDesc);
  div.classList.add(positionCSS);

  if (children) div.append(children);

  return div;
};
