export class ViewerInfoPopup {
  #root;

  constructor({ element }) {
    this.#root = element;

    this.#root.setAttribute("uk-drop", "mode: click");
  }
}
