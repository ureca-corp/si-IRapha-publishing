const rx = rxjs;

export class ThumbnailItem {
  #root;

  constructor({ element }) {
    this.#root = element;

    this.#preventOriginContextMenu();
  }

  #preventOriginContextMenu() {
    rx.fromEvent(this.#root, "contextmenu", false).subscribe((e) => {
      e.preventDefault();
      this.#openCustomContextMenu(e);
    });
  }

  #openCustomContextMenu(e) {
    window.store.thumbnailContextMenuOpen$.next({ x: e.clientX, y: e.clientY });
  }
}
