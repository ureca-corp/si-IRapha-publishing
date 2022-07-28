import { BaseMenuItem } from "../../base/base-menu-item.js";

export class TransformationsSharpeningMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Sharpening",
        name: "Sharpening",
        icon: svgIcon,
      },
      options: {
        horizontal: true,
        hidableName: false,
      },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<g id="Layouts">
	<polygon fill="#5A9642" points="256.5,2.066 77.3,512 435.699,512 	"/>
</g>
</svg>
`;
