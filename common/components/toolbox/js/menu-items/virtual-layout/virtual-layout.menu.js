const SelectorIds = {
  dropDown: "#irapha-menu__vl__dropdown",
};

export class VirtualLayoutMenu {
  constructor(element) {
    this._element = element;

    this._ukDrop = UIkit.drop(element.querySelector(SelectorIds.dropDown), {
      mode: "click",
    });
  }
}
