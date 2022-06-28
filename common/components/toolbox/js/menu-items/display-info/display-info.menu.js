const SelectorIds = {
  dropDown: "#irapha-menu__display-info__dropdown",
};

export class DisplayInfoMenu {
  constructor(element) {
    this._element = element;

    this._ukDrop = UIkit.drop(element.querySelector(SelectorIds.dropDown), {
      mode: "click",
    });
  }
}
