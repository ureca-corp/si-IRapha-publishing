import { createElementFromHTML } from "../../../../utils/dom/index.js";
import { BaseElement } from "../../../base/base-element.js";
import { CinePlayController } from "../../../cineplay-controller/index.js";
import { useCustomContextMenu } from "../../../modals/index.js";
import { Selectors } from "../../common/index.js";

const { fromEvent } = rxjs;

const PositionAttr = {
  Key: "position",

  TopLeft: "top-left",
  TopCenter: "top-center",
  TopRight: "top-right",

  Left: "left",
  Right: "right",

  BottomLeft: "bottom-left",
  BottomCenter: "bottom-center",
  BottomRight: "bottom-right",
};

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
 * @type states: {
 *  isActive$: BehaviorSubject<boolean>
 * }
 *
 * @type options: {
 *  hasController: boolean,
 *  onClick: () => void
 * }
 *
 * @type hasController: boolean
 * 현재 뷰박스가 CineController를 보유해야 하는지 여부
 * false인 경우 툴박스에서 Cine 메뉴를 눌러도 해당 뷰박스는 CineController를 보여주지 않음
 */
export class DicomViewBox extends BaseElement {
  #models;
  #states;
  #options;

  constructor(models, states, options) {
    super({ $element: new DicomViewBoxComp() });
    this.#models = models;
    this.#states = states;
    this.#options = options;

    this.#init();
  }

  // private
  #init() {
    this.#initGrid();

    this.#initStates();
    this.#initOptions();

    useCustomContextMenu({
      $emitter: this.getEl(),
      contextMenuOpen$: window.store.viewboxContextMenuOpen$,
    });
  }

  #initStates() {
    if (!this.#states) return;

    const $root = this.getEl();
    const { isActive$ } = this.#states;

    isActive$.subscribe((isActive) => $root.setAttribute("active", isActive));
  }

  #initOptions() {
    if (!this.#options) return;

    const $root = this.getEl();
    const { hasController = true, onClick = () => {} } = this.#options;

    hasController && this.#initCinePlayController();

    fromEvent($root, "click").subscribe(() => onClick());
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
    const $grid = new Grid();

    const $topLeft = new Description({
      position: PositionAttr.TopLeft,
      data: topLeft,
    });

    const $topCenter = new Description({
      position: PositionAttr.TopCenter,
      data: topCenter,
    });

    const $topRight = new Description({
      position: PositionAttr.TopRight,
      data: topRight,
    });

    const $left = new Description({
      position: PositionAttr.Left,
      data: left,
    });

    const $right = new Description({
      position: PositionAttr.Right,
      data: right,
    });

    const $bottomLeft = new Description({
      position: PositionAttr.BottomLeft,
      data: bottomLeft,
    });

    const $bottomCenter = new Description({
      position: PositionAttr.BottomCenter,
      data: bottomCenter,
    });

    const $bottomRight = new Description({
      position: PositionAttr.BottomRight,
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
function DicomViewBoxComp() {
  return createElementFromHTML(`<div class="${Selectors.ViewBox}"></div>`);
}

function Grid() {
  return createElementFromHTML(
    `<div class="${Selectors.ViewBoxScreen}"></div>`
  );
}

function Description({ data, position }) {
  const $description = createElementFromHTML(
    `<div class="${Selectors.ViewBoxDesc}"></div>`
  );
  $description.setAttribute(PositionAttr.Key, position);

  if (data) {
    const $dataDiv = data.map((it) => createDiv(it));
    $description.append(...$dataDiv);
  }

  return $description;
}

const createDiv = (children) => {
  const div = document.createElement("div");
  div.innerHTML = children;

  return div;
};
