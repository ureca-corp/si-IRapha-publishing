import { BaseMenuItem } from "../../base/base-menu-item.js";

export class AnnotationsCircleMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Circle",
        name: "Circle",
        icon: svgIcon,
      },
      options: { horizontal: true, hidableName: false },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<g id="Layouts">
	<path fill="none" stroke="#1E78BE" stroke-width="50" stroke-miterlimit="10" d="M256.227,26C129.128,26,26.1,129.029,26.1,256.125
		c0,127.114,103.028,230.143,230.126,230.143c127.11,0,230.14-103.028,230.14-230.143C486.366,129.029,383.337,26,256.227,26z"/>
</g>
</svg>
`;
