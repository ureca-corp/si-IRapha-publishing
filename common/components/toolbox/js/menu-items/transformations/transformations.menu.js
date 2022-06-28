const SelectorIds = {
  dropDown: "#irapha-menu__transformations__dropdown",
};

export class TransformationsMenu {
  constructor(element) {
    this._element = element;

    this._ukDrop = UIkit.drop(element.querySelector(SelectorIds.dropDown), {
      mode: "click",
    });
  }
}
