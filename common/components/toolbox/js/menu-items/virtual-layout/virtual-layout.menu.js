const SelectorIds = {
  dropDown: "#irapha-menu__vl__dropdown",
};

export class VirtualLayoutMenu {
  #element;
  #ukDrop;

  constructor(element) {
    this.#element = element;

    this.#ukDrop = UIkit.drop(element.querySelector(SelectorIds.dropDown), {
      mode: "click",
    });
  }
}
