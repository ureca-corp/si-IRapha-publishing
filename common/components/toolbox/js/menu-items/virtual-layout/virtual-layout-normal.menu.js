const SelectorIds = {
  dropDown: "#irapha-menu__vl__layout-normal__dropdown",
};

export class VirtualLayoutNormalMenu {
  constructor(element) {
    this._element = element;

    this._ukDrop = UIkit.drop(
      this._element.querySelector(SelectorIds.dropDown),
      {
        mode: "click",
      }
    );
  }
}
