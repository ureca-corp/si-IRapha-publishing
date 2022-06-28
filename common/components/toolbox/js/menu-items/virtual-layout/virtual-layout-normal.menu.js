const SelectorIds = {
  dropDown: "#irapha-menu__vl__layout-normal__dropdown",
};

export class VirtualLayoutNormalMenu {
  #element;
  #ukDrop;

  constructor(element) {
    this.#element = element;

    this.#ukDrop = UIkit.drop(
      this.#element.querySelector(SelectorIds.dropDown),
      {
        mode: "click",
      }
    );
  }
}
