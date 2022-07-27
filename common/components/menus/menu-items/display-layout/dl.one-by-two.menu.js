import { BaseMenuItem } from "../base/base-menu-item.js";

export class DisplayLayoutOneByTwoMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "1:2 Mode",
        name: "1:2 Mode",
        icon: svgIcon,
      },
      options: {
        horizontal: true,
      },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<g id="Layouts">
	<path fill="#1E78BE" d="M0.509,459.859V52.881c0-13.355,10.827-24.182,24.182-24.182h164.83c13.356,0,24.183,10.827,24.183,24.182
		v406.978c0,13.356-10.826,24.183-24.183,24.183H24.691C11.336,484.042,0.509,473.216,0.509,459.859z"/>
	<path fill="#1E78BE" d="M298.472,459.925V52.947c0-13.355,10.826-24.182,24.181-24.182h164.831
		c13.355,0,24.182,10.827,24.182,24.182v406.978c0,13.356-10.826,24.181-24.182,24.181H322.652
		C309.298,484.107,298.472,473.281,298.472,459.925z"/>
	<rect x="243.506" y="28.7" fill="#1E78BE" width="23.659" height="455.342"/>
</g>
</svg>
`;
