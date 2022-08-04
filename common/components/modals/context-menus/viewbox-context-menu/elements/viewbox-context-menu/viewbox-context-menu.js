import { createElementFromHTML } from "../../../../../../utils/dom/index.js";
import { BaseElement } from "../../../../../base/index.js";
import {
  CustomContextMenuSelectors,
  CustomContextMenu,
} from "../../../base/index.js";
import { getMenus } from "./get-menus.js";

function ViewBoxContextMenuComponent() {
  return createElementFromHTML(`
  <div id="irapha-viewbox-context-menu" class="${CustomContextMenuSelectors.ContextMenu}">
    <div class="${CustomContextMenuSelectors.SegmentContainer}"></div>
  
    <div class="${CustomContextMenuSelectors.Navigator}">
      <button class="${CustomContextMenuSelectors.NavBefore}"></button>
  
      <div>
        <span>Menu</span>
        <span class="${CustomContextMenuSelectors.NavPageCount}">(0/0)</span>
      </div>
  
      <button class="${CustomContextMenuSelectors.NavNext}"></button>
    </div>
  </div>
  `);
}

export class ViewboxContextMenu extends BaseElement {
  constructor() {
    super({ $element: new ViewBoxContextMenuComponent() });

    this.#init();
  }

  #init() {
    this.#initMenus();

    new CustomContextMenu({
      $element: this.getEl(),
      open$: window.store.viewboxContextMenuOpen$,
      autoClose: false,
    });
  }

  #initMenus() {
    const menus = getMenus();
    const $menus = menus.map((it) => it.getEl());

    const ChunkSize = 10;
    const chunkedMenus = _.chunk($menus, ChunkSize);

    const $segments = chunkedMenus.map((chunk) =>
      createContextMenuSegment(chunk)
    );

    const { $segmentContainer } = this.#getElements();

    $segmentContainer.append(...$segments);
  }

  #getElements() {
    const $root = this.getEl();

    const $segmentContainer = $root.querySelector(
      `.${CustomContextMenuSelectors.SegmentContainer}`
    );

    return {
      $segmentContainer,
    };
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
