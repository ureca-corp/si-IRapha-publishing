import { BaseMenuItem } from "../../base/base-menu-item.js";

export class UndoMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Undo",
        name: "Undo",
        icon: svgIcon,
      },
      options: { outlined: true },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<g id="레이어_9">
	<path fill="#1E78BE" d="M43.423,174.558L-0.216,356l178.899-46.185L134.34,265.51c84.131-71.023,209.911-60.398,280.936,23.733
		c16.585,19.647,29.215,42.314,37.189,66.757l59.069-19.479c-44.907-137.489-192.769-212.538-330.254-167.63
		c-33.677,11.001-64.771,28.718-91.4,52.082L43.423,174.558z"/>
</g>
</svg>
`;
