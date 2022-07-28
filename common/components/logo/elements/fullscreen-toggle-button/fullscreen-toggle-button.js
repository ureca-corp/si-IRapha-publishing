import { createElementFromHTML } from "../../../../utils/dom/index.js";
import { BaseElement } from "../../../base/index.js";
import { FullScreenIcon } from "../../../icons/fullscreen.icon.js";

const Selectors = {
  Root: "irapha-fullscreen-toggle-button",
};

// 최대화/최소화 토글 아이콘 버튼
export class FullScreenToggleButton extends BaseElement {
  static template = `
  <div class="${Selectors.Root}"></div>
  `;

  constructor() {
    super({ $element: createElementFromHTML(FullScreenToggleButton.template) });

    this.#init();
  }

  #init() {
    const $root = this.getRootElement();

    const fullscreenIcon = new FullScreenIcon({
      options: {
        size: "small",
        events: {
          onClick: () => this.#toggleFullScreen(),
        },
      },
    });
    $root.appendChild(fullscreenIcon.getRootElement());
  }

  #toggleFullScreen() {
    if (!document.fullscreenElement)
      return document.documentElement.requestFullscreen();

    if (document.exitFullscreen) return document.exitFullscreen();
  }
}
