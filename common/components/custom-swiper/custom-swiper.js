import {} from "../../../libs/swiper-8.3.2/swiper.js";
import { createElementFromHTML } from "../../utils/dom/index.js";
import { BaseElement } from "../base/index.js";

const Selectors = {
  Root: "swiper",
  Wrapper: "swiper-wrapper",
  SlideItem: "swiper-slide",
};

export class CustomSwiper extends BaseElement {
  static template = `
  <div 
    class="${Selectors.Root}" 
    style="width: 100%; height: 100%;"
  >
    <div class="${Selectors.Wrapper}"}></div>
  </div>
  `;

  #swiper;

  constructor() {
    super({ $element: createElementFromHTML(CustomSwiper.template) });

    this.#swiper = new Swiper(this.getEl(), {
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 30,
      mousewheel: true,
    });
  }

  getWrapperEl() {
    return this.#swiper.$wrapperEl[0];
  }

  clearItems() {
    this.getWrapperEl().innerHTML = "";
  }

  append(items) {
    this.getWrapperEl().append(...items);
  }
}

export const createSwiperSlide = ($children) => {
  const $swiperSlide = document.createElement("div");
  $swiperSlide.classList.add(Selectors.SlideItem);

  $swiperSlide.appendChild($children);

  return $swiperSlide;
};
