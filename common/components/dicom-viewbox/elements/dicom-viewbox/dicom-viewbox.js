import { Selectors, PositionClassType } from "../../common/index.js";
import { CinePlayController } from "../../../cineplay-controller/index.js";
import { BaseElement } from "../../../base/base-element.js";
import { useCustomContextMenu } from "../../../layer-popup/custom-context-menu/index.js";
import { createElementFromHTML } from "../../../../utils/dom/CreateElementFromHTML.js";

/**
 * Constructor types
 *
 * @type descItems: {
 *  topLeft: string[],
 *  topCenter: string[],
 *  topRight: string[],
 *  left: string[],
 *  right: string[],
 *  bottomLeft: string[],
 *  bottomCenter: string[],
 *  bottomRight: string[],
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
      $emitter: this.getEl(),
      contextMenuOpen$: window.store.viewboxContextMenuOpen$,
    });
  }

  // private

  // grid container 생성, desc 배치
  #initGrid({ descItems }) {
    const $grid = createGrid();

    const $topLeft = createDescription({
      positionClassName: PositionClassType.TopLeft,
      data: descItems?.topLeft,
    });

    const $topCenter = createDescription({
      positionClassName: PositionClassType.TopCenter,
      data: descItems?.topCenter,
    });

    const $topRight = createDescription({
      positionClassName: PositionClassType.TopRight,
      data: descItems?.topRight,
    });

    const $left = createDescription({
      positionClassName: PositionClassType.Left,
      data: descItems?.left,
    });

    const $right = createDescription({
      positionClassName: PositionClassType.Right,
      data: descItems?.right,
    });

    const $bottomLeft = createDescription({
      positionClassName: PositionClassType.BottomLeft,
      data: descItems?.bottomLeft,
    });

    const $bottomCenter = createDescription({
      positionClassName: PositionClassType.BottomCenter,
      data: descItems?.bottomCenter,
    });

    const $bottomRight = createDescription({
      positionClassName: PositionClassType.BottomRight,
      data: descItems?.bottomRight,
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

    this.getEl().append($grid);
  }

  #initCinePlayController() {
    // 전역 상태 가져오기 - Cine 컨트롤러 숨기기 여부
    const globalCineControllerHide$ = window.store.cinePlayControllerHide$;

    const cinePlayController = new CinePlayController({
      isHideController$: globalCineControllerHide$,
    });

    this.getEl().append(cinePlayController.getEl());
  }
}

// =================================================================
const createGrid = () => {
  const template = `<div class="${Selectors.ViewBoxScreen}"></div>`;

  return createElementFromHTML(template);
};

const createDescription = ({ data, positionClassName }) => {
  const template = `<div class="${Selectors.ViewBoxDesc} ${positionClassName}"></div>`;
  const $description = createElementFromHTML(template);

  if (data) {
    const $data = data.map((it) => createDiv(it));
    $description.append(...$data);
  }

  return $description;
};

const createDiv = (children) => {
  const div = document.createElement("div");
  div.innerHTML = children;

  return div;
};
