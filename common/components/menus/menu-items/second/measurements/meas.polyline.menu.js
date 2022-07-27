import { BaseMenuItem } from "../../base/base-menu-item.js";

export class MeasurementsPolyLineMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "PolyLine",
        name: "PolyLine",
        icon: svgIcon,
      },
      options: { horizontal: true },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<text transform="matrix(1 0 0 1 251 507.3359)" fill="#5A963C" font-family="'ArialUnicodeMS'" font-size="160">mm</text>
<text transform="matrix(1 0 0 1 251 507.3359)" fill="#5A963C" stroke="#5A963C" stroke-width="10" stroke-miterlimit="10" font-family="'ArialUnicodeMS'" font-size="160">mm</text>
<polygon fill="#5A963C" points="480.522,207.938 143.226,358.73 120.795,312.909 457.998,162.042 "/>
<polygon fill="#5A963C" points="371.465,27.066 165.657,340.276 120.795,313.298 326.601,0.163 "/>
<polygon fill="#5A963C" points="344.383,48.154 18.393,156.691 0.886,108.857 326.965,0.317 "/>
<polygon fill="#5A963C" points="511.342,168.01 483.621,405.633 431.007,400.051 458.637,162.429 "/>
</svg>
`;
