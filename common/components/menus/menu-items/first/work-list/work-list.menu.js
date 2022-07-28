import { BaseMenuItem } from "../../base/base-menu-item.js";

export class WorkListMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Worklist",
        name: "Worklist",
        icon: svgIcon,
      },
      options: {
        outlined: true,
      },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<g>
	<g>
		<line fill="none" x1="91.035" y1="76.365" x2="91.035" y2="107.571"/>
		<path fill="#5A963C" d="M470.702,51.306c-0.066-27.94-22.769-50.537-50.71-50.473H93.458C65.633,0.931,43.109,23.48,43.044,51.306
			v409.453c0.097,27.803,22.612,50.317,50.413,50.413h326.536c27.917,0.068,50.61-22.495,50.709-50.413 M414.375,296.747
			l-323.34-0.054v-30.907l323.402,0.087L414.375,296.747z M414.625,202.25l-323.59,0.179V171.34l323.465-0.006L414.625,202.25z
			 M414.75,107.571H91.035V76.365H414.75V107.571z"/>
	</g>
</g>
</svg>
`;
