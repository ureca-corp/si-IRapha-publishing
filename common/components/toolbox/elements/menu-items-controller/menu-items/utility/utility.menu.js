const SelectorIds = {
  dropDown: "#irapha-menu__utility__dropdown",
};

export class UtilityMenu {
  #element;
  #ukDrop;

  constructor(element) {
    this.#element = element;

    this.#ukDrop = UIkit.drop(element.querySelector(SelectorIds.dropDown));
  }
}
