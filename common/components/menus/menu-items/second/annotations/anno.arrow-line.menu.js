import { BaseMenuItem } from "../../base/base-menu-item.js";

export class AnnotationsArrowLineMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Arrow Line",
        name: "Arrow Line",
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
	<polygon fill="#1E78BE" points="391.208,165.118 43.827,511.858 0.49,467.188 346.574,121.758 	"/>
	<polygon fill="#1E78BE" points="394.711,168.448 342.191,118.526 281.861,61.165 512,0 455.59,227.304 	"/>
</g>
</svg>
`;
