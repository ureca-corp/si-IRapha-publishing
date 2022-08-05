import { LayerPopup } from "../../../../../layers/index.js";
import { ContextMenuItem } from "../menu-item/menu-item.js";
import { Navigator } from "../navigator/navigator.js";

import { Selectors, ActiveType } from "../../common/index.js";

const { BehaviorSubject, fromEvent, tap } = rxjs;

export class CustomContextMenu extends LayerPopup {
  #currentPage$ = new BehaviorSubject(1);
  #open$;

  #autoClose;

  // 서브메뉴 오픈 방향 왼쪽 상태
  #submenuDirectionLeft$ = new BehaviorSubject();

  constructor({ $element, open$, autoClose = true }) {
    super({ $element, open$ });
    this.#open$ = open$;
    this.#autoClose = autoClose;

    this.#init();
  }

  // private
  #init() {
    const $root = this.getEl();
    const autoClose = this.#autoClose;
    const open$ = this.#open$;
    const currentPage$ = this.#currentPage$;

    // 메뉴 오픈 상태 핸들링
    open$
      .pipe(tap((point) => this.handleOpen(point)))
      .subscribe(() =>
        this.#setSubmenuDirectionLeft_IfMenuOverflowWindowRight()
      );

    // 메뉴에서 마우스 벗어난 상태 핸들링
    if (autoClose)
      fromEvent($root, "mouseleave").subscribe(() => open$.next(null));

    // 메뉴 외 영역 클릭 핸들링
    fromEvent(document, "click").subscribe((e) => this.#handleOutsideClick(e));

    currentPage$.subscribe((currentPage) =>
      this.#handleCurrentPageChange(currentPage)
    );

    this.#initMenuItems();
    this.#initNavigator();
  }

  #initMenuItems() {
    const { $menuItems } = this.#getElements();

    [...$menuItems].map(
      ($element) =>
        new ContextMenuItem({
          $element,
          directionLeft$: this.#submenuDirectionLeft$,
        })
    );
  }

  #initNavigator() {
    const ChunkSize = 10;
    const { $menuItems, $navigator } = this.#getElements();

    if (!!$navigator) {
      new Navigator({
        $element: $navigator,
        options: {
          chunkSize: ChunkSize,
          itemsCount: $menuItems.length,
        },
        currentPage$: this.#currentPage$,
        onChangeCurrentPage: (currentPage) =>
          this.#currentPage$.next(currentPage),
      });
    }
  }

  // handlers
  #handleOutsideClick(e) {
    const rootId = this.getEl().id;
    const open$ = this.#open$;

    const parentTree = e.path;
    const me = parentTree.find(($el) => $el.id === rootId);

    me || open$.next(null);
  }

  #handleCurrentPageChange(currentPage) {
    const { $segments } = this.#getElements();

    const isEqualCurrentPage = (index) => currentPage === index;

    $segments.forEach((it, index) => {
      it.setAttribute(ActiveType.Key, isEqualCurrentPage(index + 1));
    });
  }

  #setSubmenuDirectionLeft_IfMenuOverflowWindowRight() {
    const contextMenuRect = this.getEl().getBoundingClientRect();
    const windowSegmentWidth = window.innerWidth / 4;
    const overflowRightZone = windowSegmentWidth * 3;

    const isSubmenuRightOverflow = contextMenuRect.right > overflowRightZone;

    return this.#submenuDirectionLeft$.next(isSubmenuRightOverflow);
  }

  #getElements() {
    const $segments = this.getElementsByClassName(Selectors.Segment);
    const $menuItems = this.getElementsByClassName(Selectors.ContextMenuItem);
    const $navigator = this.getElementByClassName(Selectors.Navigator);

    return {
      $segments,
      $menuItems,
      $navigator,
    };
  }
}
