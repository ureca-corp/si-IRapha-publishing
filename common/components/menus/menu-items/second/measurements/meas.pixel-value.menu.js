import { BaseMenuItem } from "../../base/base-menu-item.js";

export class MeasurementsPixelValueMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Pixel Value",
        name: "Pixel Value",
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
	<path fill="#5A963C" d="M464.098,232.563c-10.884-97.141-87.602-173.813-184.802-184.69V0H232.79v47.872
		c-97.197,10.877-173.917,87.55-184.801,184.69H0v46.565h47.989c10.922,97.105,87.633,173.733,184.801,184.603v47.958h46.506V463.73
		c97.173-10.872,173.882-87.5,184.802-184.603H512v-46.565H464.098z M256,418.646c-89.969,0-162.902-72.887-162.902-162.801
		S166.031,93.042,256,93.042c89.968,0,162.902,72.889,162.902,162.803c0.047,89.866-72.809,162.755-162.727,162.801
		C256.117,418.646,256.058,418.646,256,418.646z"/>
</g>
</svg>
`;
