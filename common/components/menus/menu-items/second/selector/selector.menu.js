import { BaseMenuItem } from "../../base/base-menu-item.js";

export class SelectorMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Selector",
        name: "Selector",
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
	<polyline fill="#643C78" points="386.633,477.633 312.959,511.823 204.602,279.907 113.003,414.27 112.747,0.218 437.725,257.814 
		277.75,245.831 	"/>
</g>
</svg>
`;
