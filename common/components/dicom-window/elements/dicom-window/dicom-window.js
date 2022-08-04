import { createElementFromHTML } from "../../../../utils/dom/index.js";
import { BaseElement } from "../../../base/base-element.js";
import {
  createSwiperSlide,
  CustomSwiper,
} from "../../../custom-swiper/index.js";
import {
  LayoutAttributeType,
  LayoutActiveAttributeType,
  Selectors,
} from "../../common/index.js";

const { fromEvent } = rxjs;

const Template = `
<div 
  class="${Selectors.DicomWindow}" 
  ${LayoutActiveAttributeType.Key}="${LayoutActiveAttributeType.active}">
</div>
`;

/**
 * Constructor types
 *
 * @type $viewBoxes: Element[]
 * 뷰박스 Elements
 *
 * @type layout$: BehaviorSubject<LayoutAttributeType>
 */

export class DicomWindow extends BaseElement {
  #swiper;
  #$windowItems;

  #layout$;

  constructor({ $viewBoxes, layout$ }) {
    super({ $element: createElementFromHTML(Template) });
    this.#$windowItems = $viewBoxes.map(($el) => createDicomWindowItem($el));
    this.#layout$ = layout$;

    this.#init();
  }

  // private
  #init() {
    this.#disableAllLayoutActive();

    this.#initSwiper();

    fromEvent(this.getEl(), "click").subscribe(() =>
      this.#handleLayoutActive()
    );

    this.#layout$.subscribe(({ layout, grid }) =>
      this.#handleLayoutChange({ layout, grid })
    );
  }

  #initSwiper() {
    const swiper = new CustomSwiper();
    const $root = this.getEl();

    $root.append(swiper.getEl());

    this.#swiper = swiper;
  }

  // handlers
  #handleLayoutChange({ layout, grid }) {
    const $root = this.getEl();

    const isLayoutActive = JSON.parse(
      $root.getAttribute(LayoutActiveAttributeType.Key)
    );
    if (!isLayoutActive) return;

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

  #handleLayoutActive() {
    this.#disableAllLayoutActive();
    this.#activeLayout();
  }

  // Layout Active
  #activeLayout() {
    this.getEl().setAttribute(LayoutActiveAttributeType.Key, true);
  }

  #disableAllLayoutActive() {
    this.#getAllDicomWIndowItemsEl().forEach(($el) => {
      $el.setAttribute(LayoutActiveAttributeType.Key, false);
    });
  }

  #getAllDicomWIndowItemsEl() {
    return [...document.querySelectorAll(`.${Selectors.DicomWindow}`)];
  }

  // Layout Control
  #clearLayoutItems() {
    this.#swiper.clearItems();
  }

  #setLayout({ chunkSize, layoutType }) {
    this.#clearLayoutItems();

    const $swiperSlides = createDicomWindowGrid({
      $items: this.#$windowItems,
      chunkSize,
      layoutType,
    }).map((grid) => createSwiperSlide(grid));

    this.#swiper.append($swiperSlides);
  }

  #setCustomLayout({ row, col }) {
    this.#clearLayoutItems();

    const setGridTemplate = ($el) => {
      $el.style.cssText = `
        grid-template-columns: repeat(${col}, 1fr);
        grid-template-rows: repeat(${row}, 1fr);
      `;

      return $el;
    };

    const $swiperSlides = createDicomWindowGrid({
      $items: this.#$windowItems,
      chunkSize: row * col,
      layoutType: LayoutAttributeType.Custom,
    })
      .map(setGridTemplate)
      .map((grid) => createSwiperSlide(grid));

    this.#swiper.append($swiperSlides);
  }
}

// =================================================================
const createDicomWindowGrid = ({ $items, chunkSize, layoutType }) => {
  const createGrid = () => {
    return createElementFromHTML(
      `<div
        class="${Selectors.WindowGrid}"
        ${LayoutAttributeType.Key}="${layoutType}"
      ></div>`
    );
  };

  return _.chunk($items, chunkSize).map(($elements) => {
    const $grid = createGrid();
    $grid.append(...$elements);

    return $grid;
  });
};

const createDicomWindowItem = (children) => {
  const div = document.createElement("div");
  div.classList.add(Selectors.WindowGridItem);
  div.appendChild(children);

  return div;
};
