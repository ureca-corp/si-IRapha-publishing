const SelectorIds = {
  dropDown: "#irapha-menu__display-layout__dropdown",
};

export class DisplayLayoutMenu {
  #element;
  #ukDrop;

  constructor(element) {
    this.#element = element;

    this.#ukDrop = UIkit.drop(element.querySelector(SelectorIds.dropDown), {
      mode: "click",
    });
  }
}
