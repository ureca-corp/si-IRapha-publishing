const SelectorIds = {
  dropDown: "#irapha-menu__utility__dropdown",
};

export class UtilityMenu {
  constructor(element) {
    this._element = element;

    this._ukDrop = UIkit.drop(element.querySelector(SelectorIds.dropDown), {
      mode: "click",
    });
  }
}
