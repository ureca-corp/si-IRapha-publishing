const SelectorIds = {
  dropDown: "#irapha-menu__transformations__dropdown",
};

export class TransformationsMenu {
  #element;
  #ukDrop;

  constructor(element) {
    this.#element = element;

    this.#ukDrop = UIkit.drop(element.querySelector(SelectorIds.dropDown));
  }
}
