import { createElementFromHTML } from "../../../../utils/dom/CreateElementFromHTML.js";
import { BaseElement } from "../../../base/index.js";
import { CustomContextMenu } from "../base/index.js";
import { CustomContextMenuSelectors } from "../../context-menus/index.js";

const Selectors = {
  Id: "irapha-thumbnail-context-menu",
};

export class ThumbnailContextMenu extends BaseElement {
  constructor() {
    super({ $element: new ThumbnailContextMenuComp() });

    new CustomContextMenu({
      $element: this.getEl(),
      open$: window.store.thumbnailContextMenuOpen$,
    });
  }
}

function ThumbnailContextMenuComp() {
  return createElementFromHTML(`
  <div id="${Selectors.Id}" class="${CustomContextMenuSelectors.ContextMenu}">
    <div class="${CustomContextMenuSelectors.ContextMenuItem}">Option1</div>
    <div class="${CustomContextMenuSelectors.ContextMenuItem}">
      <p>Option2</p>
      <div class="${CustomContextMenuSelectors.Submenu}">
        <div class="${CustomContextMenuSelectors.ContextMenuItem}">Option1</div>
        <div class="${CustomContextMenuSelectors.ContextMenuItem}">
          <p>Option2</p>
          <div class="${CustomContextMenuSelectors.Submenu}">
            <div class="${CustomContextMenuSelectors.ContextMenuItem}">Option1</div>
            <div class="${CustomContextMenuSelectors.ContextMenuItem}">Option2</div>
          </div>
        </div>
      </div>
    </div>
    <div class="${CustomContextMenuSelectors.ContextMenuItem}">Option3</div>
  </div>
  `);
}
