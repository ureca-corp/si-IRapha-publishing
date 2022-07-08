import { ContextMenuItem } from "./elements/menu-item/menu-item.js";

const rx = rxjs;

const Selectors = {
  Item: "irapha-context-menu__item",
};

export class CustomContextMenu {
  #root;
  #style;

  // 서브메뉴 오픈 방향 왼쪽 상태
  #submenuDirectionLeft$;

  constructor({ element, open$ }) {
    this.#root = element;
    this.#style = this.#root.style;

    this.#init({ open$ });
    this.#initMenuItems();
  }

  // private
  #init({ open$ }) {
    // 메뉴 오픈 상태 핸들링
    open$.subscribe((point) => this.#handleContextMenuOpen(point));

    // 메뉴에서 마우스 벗어난 상태 핸들링
    rx.fromEvent(this.#root, "mouseleave").subscribe(() => open$.next(null));

    // 메뉴 외에 영역 클릭 핸들링
    rx.fromEvent(document, "click").subscribe((e) => {
      const parentTree = e.path;
      const me = parentTree.find((element) => element.id === this.#root.id);

      if (!me) return open$.next(null);
    });

    //
    this.#submenuDirectionLeft$ = new rx.BehaviorSubject();
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

  // handler
  #handleContextMenuOpen(point) {
    if (point) return this.#open(point);

    return this.#close();
  }

  #open(point) {
    const { x, y } = point;
    const style = this.#style;

    style.left = `${x}px`;
    style.right = "unset";
    style.top = `${y}px`;
    style.bottom = "unset";
    style.zIndex = 9999;

    this.#limitOverflowIntoWindow(point);
    this.#setSubmenuDirectionLeft_IfContextMenuLocatedRight();
  }

  #close() {
    this.#style.zIndex = -1;
  }

  // Window 바깥으로 메뉴 창이 나가지 않도록 처리
  #limitOverflowIntoWindow(point) {
    const { x: targetX, y: targetY } = point;
    const unset = "unset";
    const margin = "8px";
    const style = this.#style;

    const rect = this.#root.getBoundingClientRect();

    const overflowLeft = rect.left < 0;
    const overflowRight = rect.right > window.innerWidth;
    const overflowTop = rect.top < 0;
    const overflowBottom = rect.bottom > window.innerHeight;

    if (overflowLeft) {
      style.right = unset;
      style.left = margin;
    }

    if (overflowTop) {
      style.bottom = unset;
      style.top = margin;
    }

    if (overflowRight) {
      const safeRight = window.innerWidth - targetX;

      style.left = unset;
      style.right = `${safeRight}px`;
    }

    if (overflowBottom) {
      const safeBottom = window.innerHeight - targetY;

      style.top = unset;
      style.bottom = `${safeBottom}px`;
    }
  }

  #setSubmenuDirectionLeft_IfContextMenuLocatedRight() {
    const contextMenuRect = this.#root.getBoundingClientRect();
    const windowSegmentWidth = window.innerWidth / 4;
    const overflowRightZone = windowSegmentWidth * 3;

    const isSubmenuRightOverflow = contextMenuRect.right > overflowRightZone;

    return this.#submenuDirectionLeft$.next(isSubmenuRightOverflow);
  }
}
