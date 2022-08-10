import { BaseElement } from "../../../components/base/index.js";
import { createElementFromHTML } from "../../../utils/dom/CreateElementFromHTML.js";
import {
  CustomContextMenu,
  CustomContextMenuSelectors,
} from "../../../components/modals/index.js";

const { fromEvent } = rxjs;

const Selectors = {
  Id: "irapha-mobile__appbar-context-menu",
};

export class MobileAppbarContextMenu extends BaseElement {
  constructor() {
    super({ $element: new MobileAppbarContextMenuComp() });

    new CustomContextMenu({
      $element: this.getEl(),
      open$: window.store.appbarContextMenuOpen$,
    });

    this.#initMenus();
  }

  #initMenus() {
    const $root = this.getEl();

    const $menus = [
      new ContextMenuItemComp({
        label: "Home",
        onClick: (e) => alert(e.target.innerHTML),
      }),
      new ContextMenuItemComp({
        label: "Logout",
        onClick: (e) => alert(e.target.innerHTML),
      }),
    ];

    $root.append(...$menus);
  }
}

function MobileAppbarContextMenuComp() {
  return createElementFromHTML(`
  <div id="${Selectors.Id}" class="${CustomContextMenuSelectors.ContextMenu}"></div>
  `);
}

function ContextMenuItemComp({ label, onClick }) {
  const $item = createElementFromHTML(
    `<div class="${CustomContextMenuSelectors.ContextMenuItem}">${label}</div>`
  );

  fromEvent($item, "click").subscribe((e) => onClick(e));

  return $item;
}
