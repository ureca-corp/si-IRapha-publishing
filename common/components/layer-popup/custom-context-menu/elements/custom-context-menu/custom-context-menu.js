import { LayerPopup } from "../../../base/js/layer-popup.js";
import { ContextMenuItem } from "../menu-item/menu-item.js";
import { Navigator } from "../navigator/navigator.js";

import { Selectors, ActiveClassType } from "../../common/index.js";

const rx = rxjs;

export class CustomContextMenu extends LayerPopup {
  #$root;
  #$segments;

  #currentPage$ = new rx.BehaviorSubject(1);
  #open$;

  // 서브메뉴 오픈 방향 왼쪽 상태
  #submenuDirectionLeft$ = new rx.BehaviorSubject();

  constructor({ $element, open$, autoClose = true }) {
    super({ $element, open$ });
    this.#$root = $element;
    this.#$segments = this.#$root.querySelectorAll(`.${Selectors.Segment}`);
    this.#open$ = open$;

    this.#init({ autoClose });
  }

  // private
  #init({ autoClose }) {
    // 메뉴 오픈 상태 핸들링
    this.#open$.subscribe((point) => {
      this.handleOpen(point);
      this.#setSubmenuDirectionLeft_IfContextMenuLocatedRight();
    });

    // 메뉴에서 마우스 벗어난 상태 핸들링
    if (autoClose)
      rx.fromEvent(this.#$root, "mouseleave").subscribe(() => open$.next(null));

    // 메뉴 외 영역 클릭 핸들링
    rx.fromEvent(document, "click").subscribe((e) =>
      this.#handleOutsideClick(e)
    );

    this.#currentPage$.subscribe((currentPage) =>
      this.#handleCurrentPageChange(currentPage)
    );

    this.#initMenuItems();
    this.#initNavigator();
  }

  #initMenuItems() {
    [...this.#$root.querySelectorAll(`.${Selectors.ContextMenuItem}`)].map(
      ($element) =>
        new ContextMenuItem({
          $element,
          directionLeft$: this.#submenuDirectionLeft$,
        })
    );
  }

  #initNavigator() {
    const ChunkSize = 10;
    const $navigator = this.#$root.querySelector(`.${Selectors.Navigator}`);

    if (!!$navigator) {
      new Navigator({
        $element: $navigator,
        options: {
          chunkSize: ChunkSize,
          itemsCount: this.#getMenuItemsCount(),
        },
        currentPage$: this.#currentPage$,
        onChangeCurrentPage: (currentPage) =>
          this.#currentPage$.next(currentPage),
      });
    }
  }

  // handlers
  #handleOutsideClick(e) {
    const parentTree = e.path;
    const me = parentTree.find((element) => element.id === this.#$root.id);

    if (!me) return this.#open$.next(null);
  }

  #handleCurrentPageChange(currentPage) {
    this.#$segments.forEach((it, index) => {
      if (index + 1 !== currentPage)
        return it.classList.remove(ActiveClassType.Active);

      it.classList.add(ActiveClassType.Active);
    });
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
