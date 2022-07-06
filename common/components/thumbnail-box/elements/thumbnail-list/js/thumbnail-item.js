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
      this.#openCustomContextMenu();
    });
  }

  #openCustomContextMenu() {
    console.log("ok");

    const div = document.createElement("div");
    const inner = document.createElement("div");
    inner.style.width = "400px";
    inner.style.height = "400px";
    inner.style.backgroundColor = "red";
    div.appendChild(inner);

    this.#root.appendChild(div);

    UIkit.drop(div).show();
  }
}
