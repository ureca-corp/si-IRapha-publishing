import { Selectors, PositionClassType } from "../../common/index.js";
import { CinePlayController } from "../../../cineplay-controller/index.js";

const rx = rxjs;

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
export class DicomViewBox {
  #root;

  constructor({ descItems, hasController = true }) {
    this.#initRoot();
    this.#initGrid({ descItems });

    if (hasController) this.#initCinePlayController();

    this.#preventOriginContextMenu();
  }

  // private
  #initRoot() {
    const root = document.createElement("div");
    root.classList.add(Selectors.ViewBox);
    this.#root = root;
  }

  // grid container 생성, desc 배치
  #initGrid({ descItems }) {
    const grid = createGrid();

    const topLeft = createDesc({
      positionClassName: PositionClassType.TopLeft,
      children: descItems?.topLeft,
    });

    const topCenter = createDesc({
      positionClassName: PositionClassType.TopCenter,
      children: descItems?.topCenter,
    });

    const topRight = createDesc({
      positionClassName: PositionClassType.TopRight,
      children: descItems?.topRight,
    });

    const left = createDesc({
      positionClassName: PositionClassType.Left,
      children: descItems?.left,
    });

    const right = createDesc({
      positionClassName: PositionClassType.Right,
      children: descItems?.right,
    });

    const bottomLeft = createDesc({
      positionClassName: PositionClassType.BottomLeft,
      children: descItems?.bottomLeft,
    });

    const bottomCenter = createDesc({
      positionClassName: PositionClassType.BottomCenter,
      children: descItems?.bottomCenter,
    });

    const bottomRight = createDesc({
      positionClassName: PositionClassType.BottomRight,
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
    // 전역 상태 가져오기 - Cine 컨트롤러 숨기기 여부
    const globalCineControllerHide$ = window.store.cinePlayControllerHide$;

    const cinePlayController = new CinePlayController({
      isHideController$: globalCineControllerHide$,
    });

    this.#root.append(cinePlayController.getDomElement());
  }

  // context menu - open control
  #preventOriginContextMenu() {
    rx.fromEvent(this.#root, "contextmenu", true).subscribe((e) => {
      e.preventDefault();
      this.#openCustomContextMenu(e);
    });
  }

  #openCustomContextMenu(e) {
    // 전역 상태 변경하기 - 뷰 박스 ContextMenu 열기
    window.store.viewboxContextMenuOpen$.next({ x: e.clientX, y: e.clientY });
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

const createDesc = ({ children, positionClassName }) => {
  const div = document.createElement("div");
  div.classList.add(Selectors.ViewBoxDesc);
  div.classList.add(positionClassName);

  if (children) div.append(children);

  return div;
};
