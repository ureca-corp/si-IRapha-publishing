import { useFullScreen } from "../../../../../hooks/index.js";
import { BaseMenuItem } from "../../base/base-menu-item.js";

const rx = rxjs;
export class FullScreenMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Full Screen",
        name: "Full Screen",
        icon: svgIcon,
      },
      options: { outlined: true },
    });

    this.#init();
  }

  #init() {
    const { toggle } = useFullScreen();
    rx.fromEvent(this.getEl(), "click").subscribe(() => toggle());
  }
}

const svgIcon = `
<svg 
  viewBox="0 0 24 24" 
  fill="#aaa" 
>
  <path d="M6 14c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1H7v-2c0-.55-.45-1-1-1zm0-4c.55 0 1-.45 1-1V7h2c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm11 7h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1s-1 .45-1 1v2zM14 6c0 .55.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1z"></path>
</svg>
`;
