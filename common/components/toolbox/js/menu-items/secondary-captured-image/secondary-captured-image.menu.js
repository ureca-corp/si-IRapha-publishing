const SelectorIds = {
  dropDown: "#irapha-menu__secondary-captured-image__dropdown",
};

export class SecondaryCapturedImageMenu {
  constructor(element) {
    this._element = element;

    this._ukDrop = UIkit.drop(element.querySelector(SelectorIds.dropDown), {
      mode: "click",
    });
  }
}
