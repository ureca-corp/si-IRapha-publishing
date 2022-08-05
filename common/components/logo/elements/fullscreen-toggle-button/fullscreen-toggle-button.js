import { useFullScreen } from "../../../../hooks/index.js";
import { createElementFromHTML } from "../../../../utils/dom/index.js";
import { BaseElement } from "../../../base/index.js";
import { FullScreenIcon } from "../../../icons/fullscreen.icon.js";

const Selectors = {
  Root: "irapha-fullscreen-toggle-button",
};

function FullScreenToogleButtonComp() {
  return createElementFromHTML(`<div class="${Selectors.Root}"></div>`);
}

// 최대화/최소화 토글 아이콘 버튼
export class FullScreenToggleButton extends BaseElement {
  constructor() {
    super({ $element: new FullScreenToogleButtonComp() });

    this.#init();
  }

  #init() {
    const $root = this.getEl();
    const { toggle } = useFullScreen();

    const $fullscreenIcon = new FullScreenIcon({
      options: {
        size: "small",
        events: {
          onClick: () => toggle(),
        },
      },
    }).getEl();
    $root.appendChild($fullscreenIcon);
  }
}
