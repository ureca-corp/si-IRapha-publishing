import { BaseMenuItem } from "../../base/base-menu-item.js";

export class LengthMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Length",
        name: "Length",
        icon: svgIcon,
      },
      options: { outlined: true },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<path fill="#5B9741" d="M405.914,2.001h84.263c12.052,0,21.823,9.772,21.823,21.825v84.262c0,12.053-9.771,21.825-21.823,21.825
	h-84.263c-12.055,0-21.825-9.772-21.825-21.825V23.826C384.089,11.773,393.859,2.001,405.914,2.001z"/>
<path fill="#5B9741" d="M21.824,386.089h84.262c12.053,0,21.825,9.771,21.825,21.824v84.263c0,12.054-9.772,20.824-21.825,20.824
	H21.824C9.771,513,0,504.229,0,492.176v-84.263C0,395.859,9.771,386.089,21.824,386.089z"/>
<line fill="none" stroke="#5B9741" stroke-width="40" stroke-miterlimit="10" x1="446.5" y1="65.957" x2="64.294" y2="450.045"/>
<line fill="none" x1="251" y1="528.5" x2="251" y2="365.5"/>
<line fill="none" x1="531.5" y1="365.5" x2="531.5" y2="528.5"/>
<text transform="matrix(1 0 0 1 251 507.3359)" fill="#5A963C" font-family="'ArialUnicodeMS'" font-size="160">mm</text>
<text transform="matrix(1 0 0 1 251 507.3359)" fill="none" stroke="#5A963C" stroke-width="10" stroke-miterlimit="10" font-family="'ArialUnicodeMS'" font-size="160">mm</text>
</svg>
`;
