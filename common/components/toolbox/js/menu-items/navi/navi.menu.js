const SelectorIds = {
  dropDown: "#irapha-menu__navi__dropdown",
};

export class NaviMenu {
  constructor(element) {
    this._element = element;

    this._ukDrop = UIkit.drop(element.querySelector(SelectorIds.dropDown), {
      mode: "click",
    });
  }
}
