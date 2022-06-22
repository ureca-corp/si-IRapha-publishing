export class ViewerInfoPopup {
  constructor(element) {
    this._element = element;
  }

  init() {
    this._element.setAttribute("uk-drop", "mode: click");
  }
}
