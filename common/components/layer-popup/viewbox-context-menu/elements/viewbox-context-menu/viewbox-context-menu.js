import { createElementFromHTML } from "../../../../../utils/dom/CreateElementFromHTML.js";
import { BaseElement } from "../../../../base/index.js";
import { CustomContextMenu } from "../../../custom-context-menu/index.js";
import { getMenus } from "./get-menus.js";
import { Selectors as CustomContextMenuSelectors } from "../../../custom-context-menu/index.js";

export class ViewboxContextMenu extends BaseElement {
  constructor() {
    super({
      $element: document.querySelector("#irapha-viewbox-context-menu"),
    });

    this.#init();
  }

  #init() {
    this.#initMenus();

    new CustomContextMenu({
      $element: this.getRootElement(),
      open$: window.store.viewboxContextMenuOpen$,
      autoClose: false,
    });
  }

  #initMenus() {
    const menus = getMenus();
    const $menus = menus.map((it) => it.getRootElement());

    const ChunkSize = 10;
    const chunkedMenus = _.chunk($menus, ChunkSize);

    const $segments = chunkedMenus.map((chunk) =>
      createContextMenuSegment(chunk)
    );

    //
    this.getRootElement()
      .querySelector(".irapha-context-menu__segment-container")
      .append(...$segments);
  }
}

// =================================================================
const createContextMenuSegment = ($items) => {
  const $segment = createElementFromHTML(
    `<div class="${CustomContextMenuSelectors.Segment}"></div>`
  );
  $segment.append(...$items);

  return $segment;
};
