import { BaseMenuItem } from "../../base/base-menu-item.js";

export class MeasurementsCurveLineMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Curve Line",
        name: "Curve Line",
        icon: svgIcon,
      },
      options: { horizontal: true },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<path fill="none" stroke="#5A963C" stroke-width="60" stroke-miterlimit="10" d="M31.5,512C31.5,245.865,246.412,30.513,512,30.513"
	/>
<rect x="251" y="365.5" fill="none" width="280.5" height="163"/>
<text transform="matrix(1 0 0 1 251 507.3359)" fill="#5A963C" stroke="#5A963C" stroke-width="10" stroke-miterlimit="10" font-family="'ArialUnicodeMS'" font-size="160">mm</text>
</svg>
`;
