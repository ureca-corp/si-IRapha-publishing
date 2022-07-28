import { BaseMenuItem } from "../../base/base-menu-item.js";

export class AnnotationsTextMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Text",
        name: "Text",
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
	<polygon fill="#1E78BE" points="1,1 1,103.315 197.656,103.315 197.656,513 315.674,513 315.674,103.315 512.328,103.315 
		512.328,1 	"/>
</g>
</svg>
`;
