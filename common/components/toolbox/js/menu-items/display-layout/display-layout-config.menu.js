const SelectorIds = {
  dropDown: "#irapha-menu__display-layout__config__dropdown",
};

export class DisplayLayoutConfigMenu {
  #element;
  #ukDrop;

  constructor(element) {
    this.#element = element;

    this.#ukDrop = UIkit.drop(element.querySelector(SelectorIds.dropDown), {
      mode: "click",
    });
  }
}
