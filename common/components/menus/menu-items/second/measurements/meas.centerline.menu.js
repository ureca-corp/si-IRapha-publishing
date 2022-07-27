import { BaseMenuItem } from "../../base/base-menu-item.js";

export class MeasurementsCenterLineMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Center Line",
        name: "Center Line",
        icon: svgIcon,
      },
      options: { horizontal: true },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<rect x="251" y="365.5" fill="none" width="280.5" height="163"/>
<text transform="matrix(1 0 0 1 251 507.3359)" fill="#5A963C" stroke="#5A963C" stroke-width="10" stroke-miterlimit="10" font-family="'ArialUnicodeMS'" font-size="160">mm</text>
<line fill="none" stroke="#5A963C" stroke-width="60" stroke-miterlimit="10" x1="482.5" y1="1" x2="482.5" y2="276.5"/>
<line fill="none" stroke="#5A963C" stroke-width="60" stroke-miterlimit="10" x1="31.5" y1="512" x2="31.5" y2="173.5"/>
<line fill="none" stroke="#5A963C" stroke-width="60" stroke-miterlimit="10" x1="482.5" y1="116.5" x2="31.5" y2="365.5"/>
</svg>
`;
