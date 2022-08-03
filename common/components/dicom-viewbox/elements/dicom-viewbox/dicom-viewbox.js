import { Selectors, PositionClassType } from "../../common/index.js";
import { CinePlayController } from "../../../cineplay-controller/index.js";
import { BaseElement } from "../../../base/base-element.js";
import { useCustomContextMenu } from "../../../layer-popup/custom-context-menu/index.js";
import { createElementFromHTML } from "../../../../utils/dom/CreateElementFromHTML.js";

const Template = `<div class="${Selectors.ViewBox}"></div>`;

/**
 * Constructor types
 *
 * @type models: {
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
  #models;
  #options;

  constructor(models, options) {
    super({ $element: createElementFromHTML(Template) });
    this.#models = models;
    this.#options = options;

    this.#init();
  }

  // private
  #init() {
    const { hasController = true } = this.#options;

    this.#initGrid();
    hasController && this.#initCinePlayController();

    useCustomContextMenu({
      $emitter: this.getEl(),
      contextMenuOpen$: window.store.viewboxContextMenuOpen$,
    });
  }

  // grid container 생성, desc 배치
  #initGrid() {
    if (!this.#models) return;

    const {
      topLeft,
      topCenter,
      topRight,
      left,
      right,
      bottomLeft,
      bottomCenter,
      bottomRight,
    } = this.#models;

    const $root = this.getEl();
    const $grid = createGrid();

    const $topLeft = createDescription({
      positionClassName: PositionClassType.TopLeft,
      data: topLeft,
    });

    const $topCenter = createDescription({
      positionClassName: PositionClassType.TopCenter,
      data: topCenter,
    });

    const $topRight = createDescription({
      positionClassName: PositionClassType.TopRight,
      data: topRight,
    });

    const $left = createDescription({
      positionClassName: PositionClassType.Left,
      data: left,
    });

    const $right = createDescription({
      positionClassName: PositionClassType.Right,
      data: right,
    });

    const $bottomLeft = createDescription({
      positionClassName: PositionClassType.BottomLeft,
      data: bottomLeft,
    });

    const $bottomCenter = createDescription({
      positionClassName: PositionClassType.BottomCenter,
      data: bottomCenter,
    });

    const $bottomRight = createDescription({
      positionClassName: PositionClassType.BottomRight,
      data: bottomRight,
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

    $root.appendChild($grid);
  }

  #initCinePlayController() {
    const $root = this.getEl();

    // 전역 상태 가져오기 - Cine 컨트롤러 숨기기 여부
    const globalCineControllerHide$ = window.store.cinePlayControllerHide$;

    $root.appendChild(
      new CinePlayController({
        isHideController$: globalCineControllerHide$,
      }).getEl()
    );
  }
}

// =================================================================
const createGrid = () =>
  createElementFromHTML(`<div class="${Selectors.ViewBoxScreen}"></div>`);

const createDescription = ({ data, positionClassName }) => {
  const $description = createElementFromHTML(
    `<div class="${Selectors.ViewBoxDesc} ${positionClassName}"></div>`
  );

  if (data) {
    const $dataDiv = data.map((it) => createDiv(it));
    $description.append(...$dataDiv);
  }

  return $description;
};

const createDiv = (children) => {
  const div = document.createElement("div");
  div.innerHTML = children;

  return div;
};
