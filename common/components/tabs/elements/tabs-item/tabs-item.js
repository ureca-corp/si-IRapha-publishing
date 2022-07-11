import { TabMenus } from "../tab-menus/tab-menus.js";

const rx = rxjs;

const Selectors = {
  Dummy: "irapha-tabs__list__item__dummy",
  Menus: "irapha-tabs__list__item__menus",
};

export class TabItem {
  #root;
  #dummy;

  constructor({ element, isActive$, onClick }) {
    this.#root = element;
    this.#dummy = this.#createDummy();

    new TabMenus({ element: element.querySelector(`.${Selectors.Menus}`) });

    isActive$.subscribe((isActive) => this.#handleActiveChange(isActive));

    rx.fromEvent(this.#root, "click").subscribe(() => onClick());

    this.#preventOriginContextMenu();
  }

  #createDummy() {
    const dummy = document.createElement("div");
    dummy.className = Selectors.Dummy;
    return dummy;
  }

  // handler
  #handleActiveChange(isActive) {
    if (isActive) return this.#active();

    return this.#inactive();
  }

  #active() {
    this.#root.appendChild(this.#dummy);
    this.#root.classList.add("--active");
  }

  #inactive() {
    const oldDummy = this.#root.querySelector(`.${Selectors.Dummy}`);
    if (!oldDummy) return;

    this.#root.removeChild(oldDummy);
    this.#root.classList.remove("--active");
  }

  // context menu control
  #preventOriginContextMenu() {
    rx.fromEvent(this.#root, "contextmenu", false).subscribe((e) => {
      e.preventDefault();
      this.#openCustomContextMenu(e);
    });
  }

  #openCustomContextMenu(e) {
    window.store.tabsContextMenuOpen$.next({ x: e.clientX, y: e.clientY });
  }
}
