import { BaseMenuItem } from "../../base/base-menu-item.js";

export class AnnotationsArrowCurveMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Arrow Curve",
        name: "Arrow Curve",
        icon: svgIcon,
      },
      options: { horizontal: true },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<path fill="none" stroke="#1F78BE" stroke-width="60" stroke-miterlimit="10" d="M31.5,512c0-237.332,184.1-429.375,411.613-429.375
	"/>
<polygon fill="#1F78BE" points="350.5,175.833 350.5,0 512,81.23 "/>
</svg>
`;
