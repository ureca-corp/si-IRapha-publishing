const SelectorIds = {
  dropDown: "#irapha-menu__measurements__dropdown",
};

export class MeasurementsMenu {
  constructor(element) {
    this._element = element;

    this._ukDrop = UIkit.drop(element.querySelector(SelectorIds.dropDown), {
      mode: "click",
    });
  }
}
