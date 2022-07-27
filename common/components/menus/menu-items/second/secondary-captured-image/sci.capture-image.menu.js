import { BaseMenuItem } from "../../base/base-menu-item.js";

export class SciCaptureImageMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Capture Image",
        name: "Capture Image",
        icon: svgIcon,
      },
      options: { horizontal: true },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<g>
	<path fill="#1679B5" d="M400.728,113.981l-54.075-49.377H163.197l-51.727,49.377H0v335.755h512.193V113.981H400.728z
		 M256.097,394.127c-66.624,0-120.633-54.01-120.633-120.633c0-66.624,54.009-120.633,120.633-120.633
		c66.624,0,120.633,54.009,120.633,120.633C376.73,340.117,322.721,394.127,256.097,394.127z"/>
	<circle fill="#1679B5" cx="256.097" cy="274.37" r="76.481"/>
</g>
</svg>
`;
