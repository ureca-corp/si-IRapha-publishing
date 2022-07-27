import { BaseMenuItem } from "../../base/base-menu-item.js";

export class AnnotationsLineMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Line",
        name: "Line",
        icon: svgIcon,
      },
      options: { horizontal: true },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<g id="Layouts">
	<polygon fill="#1F79BE" points="0,470.75 470.875,0 512,41.167 41.25,512 	"/>
</g>
</svg>
`;
