import { Selectors, PositionClassType } from "../../common/index.js";

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

  constructor({ descItems }) {
    this.#root = createRoot();

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

    const list = [
      topLeft,
      topCenter,
      topRight,
      left,
      right,
      bottomLeft,
      bottomCenter,
      bottomRight,
      canvas,
    ];

    this.#root.append(...list);
  }

  getDomElement() {
    return this.#root;
  }
}

const createRoot = () => {
  const div = document.createElement("div");
  div.classList.add(Selectors.ViewBox);

  return div;
};

const createDesc = ({ children, positionCSS }) => {
  const div = document.createElement("div");
  div.classList.add(Selectors.ViewBoxDesc);
  div.classList.add(positionCSS);

  if (children) div.innerHTML = children;

  return div;
};
