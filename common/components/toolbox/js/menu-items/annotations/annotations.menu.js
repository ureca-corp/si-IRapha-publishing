const SelectorIds = {
  dropDown: "#irapha-menu__annotations__dropdown",
};

export class AnnotationsMenu {
  constructor(element) {
    this._element = element;

    this._ukDrop = UIkit.drop(element.querySelector(SelectorIds.dropDown), {
      mode: "click",
    });
  }
}
