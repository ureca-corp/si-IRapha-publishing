import { GridSelector } from "../../../../../grid-selector/index.js";

const Selectors = {
  dropDown: "#irapha-menu__display-layout__config__dropdown",
  GridSelector: "irapha-grid-selector",
};

export class DisplayLayoutConfigMenu {
  #root;
  #ukDrop;
  #gridSelector;

  constructor(element) {
    this.#root = element;

    this.#ukDrop = UIkit.drop(element.querySelector(Selectors.dropDown));
    this.#gridSelector = new GridSelector({
      element: element.querySelector(`.${Selectors.GridSelector}`),
    });
  }
}
