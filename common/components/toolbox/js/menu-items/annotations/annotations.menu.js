const SelectorIds = {
  dropDown: "#irapha-menu__annotations__dropdown",
};

export class AnnotationsMenu {
  #element;
  #ukDrop;

  constructor(element) {
    this.#element = element;

    this.#ukDrop = UIkit.drop(element.querySelector(SelectorIds.dropDown), {
      mode: "click",
    });
  }
}
