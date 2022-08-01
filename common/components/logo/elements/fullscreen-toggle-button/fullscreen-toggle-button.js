import { useFullScreen } from "../../../../hooks/index.js";
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
    const $root = this.getEl();
    const { toggle } = useFullScreen();

    const fullscreenIcon = new FullScreenIcon({
      options: {
        size: "small",
        events: {
          onClick: () => toggle(),
        },
      },
    });
    $root.appendChild(fullscreenIcon.getEl());
  }
}
