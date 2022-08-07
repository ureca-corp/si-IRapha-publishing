import { createElementFromHTML } from "../../../../utils/dom/index.js";
import { BaseElement } from "../../../base/index.js";
import { CustomContextMenu } from "../base/index.js";
import { CustomContextMenuSelectors } from "../../context-menus/index.js";

const { fromEvent } = rxjs;

const Selectors = {
  Id: "irapha-tabs-context-menu",
  ExportDicomMenu: "irapha-export-dicom-menu",
};

export class TabsContextMenu extends BaseElement {
  constructor() {
    super({ $element: new TabsContextMenuComp() });

    new CustomContextMenu({
      $element: this.getEl(),
      open$: window.store.tabsContextMenuOpen$,
    });

    const { $exportDicomMenu } = this.#getElements();
    fromEvent($exportDicomMenu, "click").subscribe((e) =>
      window.store.exportDicomOpen$.next({ x: e.clientX, y: e.clientY })
    );
  }

  #getElements() {
    const $exportDicomMenu = this.getElementById(Selectors.ExportDicomMenu);

    return {
      $exportDicomMenu,
    };
  }
}

function TabsContextMenuComp() {
  return createElementFromHTML(`
  <div id="${Selectors.Id}" class="${CustomContextMenuSelectors.ContextMenu}">
    <div id="${Selectors.ExportDicomMenu}" class="${CustomContextMenuSelectors.ContextMenuItem}">
      Dicom Export AS
    </div>
  </div>
  `);
}
