import { BaseMenuItem } from "../../base/base-menu-item.js";

export class AnnotationsCurveMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Curve",
        name: "Curve",
        icon: svgIcon,
      },
      options: { horizontal: true },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<path fill="none" stroke="#1F78BE" stroke-width="60" stroke-miterlimit="10" d="M31.5,512C31.5,246.973,245.517,32.517,510,32.517"
	/>
</svg>
`;
