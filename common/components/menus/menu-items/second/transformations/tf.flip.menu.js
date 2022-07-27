import { BaseMenuItem } from "../../base/base-menu-item.js";

export class TransformationsFlipMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Flip",
        name: "Flip",
        icon: svgIcon,
      },
      options: { horizontal: true },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<rect x="331.696" y="240.725" fill="#5A963C" width="50.071" height="32.269"/>
<rect x="431.841" y="240.725" fill="#5A963C" width="50.072" height="32.269"/>
<rect x="231.659" y="240.725" fill="#5A963C" width="50.069" height="32.269"/>
<rect x="31.369" y="240.725" fill="#5A963C" width="50.072" height="32.269"/>
<rect x="131.514" y="240.725" fill="#5A963C" width="50.072" height="32.269"/>
<polygon fill="#5A963C" points="512,512 0,512 256.945,312.754 "/>
<polygon fill="none" stroke="#5A963C" stroke-width="30" stroke-miterlimit="10" points="43.369,15.381 468.913,15.381 256,183.833 
	"/>
</svg>
`;
