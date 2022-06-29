const SelectorIds = {
  dropDown: "#irapha-menu__navi__dropdown",
};

export class NaviMenu {
  #element;
  #ukDrop;

  constructor(element) {
    this.#element = element;

    this.#ukDrop = UIkit.drop(element.querySelector(SelectorIds.dropDown));
  }
}
