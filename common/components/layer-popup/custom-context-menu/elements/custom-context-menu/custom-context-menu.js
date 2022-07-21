import { LayerPopup } from "../../../base/js/layer-popup.js";
import { ContextMenuItem } from "../menu-item/menu-item.js";
import { Navigator } from "../navigator/navigator.js";

import { Selectors } from "../../common/index.js";

const rx = rxjs;

export class CustomContextMenu extends LayerPopup {
  #$root;
  #$segments;

  #currentPage$ = new rx.BehaviorSubject(1);

  // 서브메뉴 오픈 방향 왼쪽 상태
  #submenuDirectionLeft$ = new rx.BehaviorSubject();

  constructor({ element, open$, autoClose = true }) {
    super({ element, open$ });
    this.#$root = element;
    this.#$segments = this.#$root.querySelectorAll(`.${Selectors.Segment}`);

    this.#init({ open$, autoClose });
  }

  // private
  #init({ open$, autoClose }) {
    // 메뉴 오픈 상태 핸들링
    open$.subscribe((point) => {
      this.handleOpen(point);
      this.#setSubmenuDirectionLeft_IfContextMenuLocatedRight();
    });

    // 메뉴에서 마우스 벗어난 상태 핸들링
    if (autoClose)
      rx.fromEvent(this.#$root, "mouseleave").subscribe(() => open$.next(null));

    // 메뉴 외 영역 클릭 핸들링
    rx.fromEvent(document, "click").subscribe((e) => {
      const parentTree = e.path;
      const me = parentTree.find((element) => element.id === this.#$root.id);

      if (!me) return open$.next(null);
    });

    this.#currentPage$.subscribe((currentPage) => {
      this.#$segments.forEach(($ele, index) => {
        if (index + 1 !== currentPage) return $ele.classList.remove("--active");

        $ele.classList.add("--active");
      });
    });

    this.#initMenuItems();

    const $navigator = this.#$root.querySelector(`.${Selectors.Navigator}`);

    if (!!$navigator) {
      new Navigator({
        $element: $navigator,
        options: {
          chunkSize: 10,
          itemsCount: this.#getMenuItemsCount(),
        },
        currentPage$: this.#currentPage$,
        onChangeCurrentPage: (currentPage) =>
          this.#currentPage$.next(currentPage),
      });
    }
  }

  #initMenuItems() {
    [...this.#$root.querySelectorAll(`.${Selectors.ContextMenuItem}`)].map(
      (element) =>
        new ContextMenuItem({
          element,
          directionLeft$: this.#submenuDirectionLeft$,
        })
    );
  }

  #getMenuItemsCount() {
    return this.#$root.querySelectorAll(`.${Selectors.ContextMenuItem}`).length;
  }

  #setSubmenuDirectionLeft_IfContextMenuLocatedRight() {
    const contextMenuRect = this.#$root.getBoundingClientRect();
    const windowSegmentWidth = window.innerWidth / 4;
    const overflowRightZone = windowSegmentWidth * 3;

    const isSubmenuRightOverflow = contextMenuRect.right > overflowRightZone;

    return this.#submenuDirectionLeft$.next(isSubmenuRightOverflow);
  }
}
