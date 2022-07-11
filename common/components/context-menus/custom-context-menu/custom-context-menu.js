import { LayerPopup } from "../../layer-popup/index.js";
import { ContextMenuItem } from "./elements/menu-item/menu-item.js";

const rx = rxjs;

const Selectors = {
  Item: "irapha-context-menu__item",
};

export class CustomContextMenu extends LayerPopup {
  #root;

  // 서브메뉴 오픈 방향 왼쪽 상태
  #submenuDirectionLeft$;

  constructor({ element, open$ }) {
    super({ element, open$ });
    this.#root = element;

    this.#init({ open$ });
    this.#initMenuItems();
  }

  // private
  #init({ open$ }) {
    this.#submenuDirectionLeft$ = new rx.BehaviorSubject();

    // 메뉴 오픈 상태 핸들링
    open$.subscribe((point) => {
      this.handleOpen(point);
      this.#setSubmenuDirectionLeft_IfContextMenuLocatedRight();
    });

    // 메뉴에서 마우스 벗어난 상태 핸들링
    rx.fromEvent(this.#root, "mouseleave").subscribe(() => open$.next(null));

    // 메뉴 외에 영역 클릭 핸들링
    rx.fromEvent(document, "click").subscribe((e) => {
      const parentTree = e.path;
      const me = parentTree.find((element) => element.id === this.#root.id);

      if (!me) return open$.next(null);
    });
  }

  #initMenuItems() {
    [...this.#root.querySelectorAll(`.${Selectors.Item}`)].map(
      (element) =>
        new ContextMenuItem({
          element,
          directionLeft$: this.#submenuDirectionLeft$,
        })
    );
  }

  #setSubmenuDirectionLeft_IfContextMenuLocatedRight() {
    const contextMenuRect = this.#root.getBoundingClientRect();
    const windowSegmentWidth = window.innerWidth / 4;
    const overflowRightZone = windowSegmentWidth * 3;

    const isSubmenuRightOverflow = contextMenuRect.right > overflowRightZone;

    return this.#submenuDirectionLeft$.next(isSubmenuRightOverflow);
  }
}
