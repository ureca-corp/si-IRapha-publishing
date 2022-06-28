export class ViewerInfoPopup {
  #element;

  constructor(element) {
    this.#element = element;
  }

  init() {
    this.#element.setAttribute("uk-drop", "mode: click");
  }
}
