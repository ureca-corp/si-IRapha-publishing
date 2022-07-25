import { Selectors, PositionClassType } from "../../common/index.js";
import { CinePlayController } from "../../../cineplay-controller/index.js";
import { BaseElement } from "../../../base/base-element.js";
import { useCustomContextMenu } from "../../../layer-popup/custom-context-menu/index.js";
import { createElementFromHTML } from "../../../../utils/dom/CreateElementFromHTML.js";

/**
 * Constructor types
 *
 * @type descItems: {
 *  topLeft: Element,
 *  topCenter: Element,
 *  topRight: Element,
 *  left: Element,
 *  right: Element,
 *  bottomLeft: Element,
 *  bottomCenter: Element,
 *  bottomRight: Element,
 * }
 *
 * @type hasController: boolean
 * 현재 뷰박스가 CineController를 보유해야 하는지 여부
 * false인 경우 툴박스에서 Cine 메뉴를 눌러도 해당 뷰박스는 CineController를 보여주지 않음
 */

export class DicomViewBox extends BaseElement {
  static template = `
  <div class="${Selectors.ViewBox}"></div>
  `;

  constructor({ descItems, hasController = true }) {
    super({ $element: createElementFromHTML(DicomViewBox.template) });

    this.#initGrid({ descItems });

    if (hasController) this.#initCinePlayController();

    useCustomContextMenu({
      $emitter: this.getRootElement(),
      contextMenuOpen$: window.store.viewboxContextMenuOpen$,
    });
  }

  // private

  // grid container 생성, desc 배치
  #initGrid({ descItems }) {
    const $grid = createGrid();

    const $topLeft = createDesc({
      positionClassName: PositionClassType.TopLeft,
      children: descItems?.topLeft,
    });

    const $topCenter = createDesc({
      positionClassName: PositionClassType.TopCenter,
      children: descItems?.topCenter,
    });

    const $topRight = createDesc({
      positionClassName: PositionClassType.TopRight,
      children: descItems?.topRight,
    });

    const $left = createDesc({
      positionClassName: PositionClassType.Left,
      children: descItems?.left,
    });

    const $right = createDesc({
      positionClassName: PositionClassType.Right,
      children: descItems?.right,
    });

    const $bottomLeft = createDesc({
      positionClassName: PositionClassType.BottomLeft,
      children: descItems?.bottomLeft,
    });

    const $bottomCenter = createDesc({
      positionClassName: PositionClassType.BottomCenter,
      children: descItems?.bottomCenter,
    });

    const $bottomRight = createDesc({
      positionClassName: PositionClassType.BottomRight,
      children: descItems?.bottomRight,
    });

    const $canvas = document.createElement("canvas");

    $grid.append(
      ...[
        $topLeft,
        $topCenter,
        $topRight,
        $left,
        $right,
        $bottomLeft,
        $bottomCenter,
        $bottomRight,
        $canvas,
      ]
    );

    this.getRootElement().append($grid);
  }

  #initCinePlayController() {
    // 전역 상태 가져오기 - Cine 컨트롤러 숨기기 여부
    const globalCineControllerHide$ = window.store.cinePlayControllerHide$;

    const cinePlayController = new CinePlayController({
      isHideController$: globalCineControllerHide$,
    });

    this.getRootElement().append(cinePlayController.getDomElement());
  }
}

// =================================================================
const createGrid = () => {
  const template = `<div class="${Selectors.ViewBoxScreen}"></div>`;

  return createElementFromHTML(template);
};

const createDesc = ({ children, positionClassName }) => {
  const template = `<div class="${Selectors.ViewBoxDesc} ${positionClassName}"></div>`;
  const $desc = createElementFromHTML(template);

  if (children) $desc.append(children);

  return $desc;
};
