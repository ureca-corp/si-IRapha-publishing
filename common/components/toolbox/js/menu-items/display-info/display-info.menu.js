const SelectorIds = {
  dropDown: "#irapha-menu__display-info__dropdown",
};

export class DisplayInfoMenu {
  #element;
  #ukDrop;

  constructor(element) {
    this.#element = element;

    this.#ukDrop = UIkit.drop(element.querySelector(SelectorIds.dropDown), {
      mode: "click",
    });
  }
}
