const SelectorIds = {
  dropDown: "#irapha-menu__secondary-captured-image__dropdown",
};

export class SecondaryCapturedImageMenu {
  #element;
  #ukDrop;

  constructor(element) {
    this.#element = element;

    this.#ukDrop = UIkit.drop(element.querySelector(SelectorIds.dropDown));
  }
}
