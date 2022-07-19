import { Selectors, LayoutAttributeType } from "../../common/index.js";

export class DicomWindow {
  #root;
  #items;

  constructor({ element, items, layout$ }) {
    this.#root = element;

    this.#items = items.map((element) => createDicomWindowItem(element));

    layout$.subscribe(({ layout, grid }) =>
      this.#handleLayoutChange({ layout, grid })
    );
  }

  // handlers
  #handleLayoutChange({ layout, grid }) {
    switch (layout) {
      case LayoutAttributeType.OneByTwo:
        return this.#setLayout({
          chunkSize: 2,
          layoutType: LayoutAttributeType.OneByTwo,
        });
      case LayoutAttributeType.TwoByOne:
        return this.#setLayout({
          chunkSize: 2,
          layoutType: LayoutAttributeType.TwoByOne,
        });
      case LayoutAttributeType.TwoByTwo:
        return this.#setLayout({
          chunkSize: 4,
          layoutType: LayoutAttributeType.TwoByTwo,
        });

      case LayoutAttributeType.A:
        return this.#setLayout({
          chunkSize: 3,
          layoutType: LayoutAttributeType.A,
        });
      case LayoutAttributeType.B:
        return this.#setLayout({
          chunkSize: 3,
          layoutType: LayoutAttributeType.B,
        });
      case LayoutAttributeType.C:
        return this.#setLayout({
          chunkSize: 3,
          layoutType: LayoutAttributeType.C,
        });
      case LayoutAttributeType.D:
        return this.#setLayout({
          chunkSize: 3,
          layoutType: LayoutAttributeType.D,
        });
      case LayoutAttributeType.E:
        return this.#setLayout({
          chunkSize: 4,
          layoutType: LayoutAttributeType.E,
        });
      case LayoutAttributeType.F:
        return this.#setLayout({
          chunkSize: 4,
          layoutType: LayoutAttributeType.F,
        });
      case LayoutAttributeType.G:
        return this.#setLayout({
          chunkSize: 4,
          layoutType: LayoutAttributeType.G,
        });
      case LayoutAttributeType.H:
        return this.#setLayout({
          chunkSize: 4,
          layoutType: LayoutAttributeType.H,
        });
      case LayoutAttributeType.I:
        return this.#setLayout({
          chunkSize: 5,
          layoutType: LayoutAttributeType.I,
        });
      case LayoutAttributeType.J:
        return this.#setLayout({
          chunkSize: 5,
          layoutType: LayoutAttributeType.J,
        });
      case LayoutAttributeType.K:
        return this.#setLayout({
          chunkSize: 5,
          layoutType: LayoutAttributeType.K,
        });
      case LayoutAttributeType.L:
        return this.#setLayout({
          chunkSize: 5,
          layoutType: LayoutAttributeType.L,
        });
      case LayoutAttributeType.M:
        return this.#setLayout({
          chunkSize: 7,
          layoutType: LayoutAttributeType.M,
        });
      case LayoutAttributeType.N:
        return this.#setLayout({
          chunkSize: 5,
          layoutType: LayoutAttributeType.N,
        });

      case LayoutAttributeType.Custom:
        return this.#setCustomLayout({
          row: grid.row,
          col: grid.col,
        });

      default:
        return this.#setLayout({
          chunkSize: 1,
          layoutType: LayoutAttributeType.OneByOne,
        });
    }
  }

  // set Layout
  #clearLayoutItems() {
    this.#root.innerHTML = "";
    this.#root.setAttribute(LayoutAttributeType.Key, "");
  }

  #setLayout({ chunkSize, layoutType }) {
    this.#clearLayoutItems();

    const gridList = createDicomWindowGrid({
      items: this.#items,
      chunkSize,
      layoutType,
    });

    this.#root.append(...gridList);
  }

  #setCustomLayout({ row, col }) {
    this.#clearLayoutItems();

    const gridList = createDicomWindowGrid({
      items: this.#items,
      chunkSize: row * col,
      layoutType: LayoutAttributeType.Custom,
    });

    gridList.forEach((element) => {
      element.style.cssText = `
        grid-template-columns: repeat(${col}, 1fr);
        grid-template-rows: repeat(${row}, 1fr);
      `;
    });

    this.#root.append(...gridList);
  }
}

const createDicomWindowGrid = ({ items, chunkSize, layoutType }) => {
  return _.chunk(items, chunkSize).map((elements) => {
    const ul = document.createElement("div");
    ul.classList.add(Selectors.WindowGrid);
    ul.append(...elements);
    ul.setAttribute(LayoutAttributeType.Key, layoutType);

    return ul;
  });
};

const createDicomWindowItem = (children) => {
  const div = document.createElement("div");
  div.classList.add(Selectors.WindowGridItem);
  div.appendChild(children);

  return div;
};
