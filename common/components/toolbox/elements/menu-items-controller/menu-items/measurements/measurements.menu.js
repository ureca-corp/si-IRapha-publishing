const SelectorIds = {
  dropDown: "#irapha-menu__measurements__dropdown",
};

export class MeasurementsMenu {
  #element;
  #ukDrop;

  constructor(element) {
    this.#element = element;

    this.#ukDrop = UIkit.drop(element.querySelector(SelectorIds.dropDown));
  }
}
