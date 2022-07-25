const rx = rxjs;

export class VirtualLayoutVerticalMenu {
  #$root;

  constructor({ $element }) {
    this.#$root = $element;

    rx.fromEvent(this.#$root, "click").subscribe((e) => this.#handleClick(e));
  }

  #handleClick() {
    // mutate global state
    window.store.virtualLayoutMode$.next({ layout: "vertical" });
  }
}
