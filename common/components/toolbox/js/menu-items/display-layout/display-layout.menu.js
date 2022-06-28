const SelectorIds = {
  dropDown: "#irapha-menu__display-layout__dropdown",
};

export class DisplayLayoutMenu {
  constructor(element) {
    this._element = element;

    this._ukDrop = UIkit.drop(element.querySelector(SelectorIds.dropDown), {
      mode: "click",
    });
  }
}
