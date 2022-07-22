import { useCustomContextMenu } from "../../../../layer-popup/custom-context-menu/index.js";

export class ThumbnailItem {
  #$root;

  constructor({ $element }) {
    this.#$root = $element;

    useCustomContextMenu({
      $emitter: this.#$root,
      contextMenuOpen$: window.store.thumbnailContextMenuOpen$,
    });
  }
}
