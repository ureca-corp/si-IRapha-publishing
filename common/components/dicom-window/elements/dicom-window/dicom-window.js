const rx = rxjs;

const LayoutClassType = {
  OneByOne: "1:1",
};

export class DicomWindow {
  #root;
  #items;

  constructor({ element, items }) {
    this.#root = element;

    this.#items = items.map((element) => createDicomWindowItem(element));

    const layout = new rx.BehaviorSubject(LayoutClassType.OneByOne);
    layout.subscribe((layout) => this.#handleLayoutChange(layout));
  }

  // handlers
  #handleLayoutChange(layout) {
    switch (layout) {
      default:
        return this.#setOneByOneLayout();
    }
  }

  // set Layout
  #setOneByOneLayout() {
    const gridList = this.#items.map((element) => {
      const ul = document.createElement("div");
      ul.classList.add("irapha-dicom-window__grid");
      ul.append(element);
      ul.setAttribute("layout", LayoutClassType.OneByOne);

      return ul;
    });

    this.#root.append(...gridList);
  }
}

const createDicomWindowItem = (children) => {
  const div = document.createElement("div");
  div.classList.add("irapha-dicom-window__grid__item");
  div.appendChild(children);

  return div;
};
