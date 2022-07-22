export class DataGrid {
  #$root;

  constructor({ $element }) {
    this.#$root = $element;

    this.#$root.classList.add("uk-table");
    this.#$root.classList.add("uk-table-divider");
  }
}
