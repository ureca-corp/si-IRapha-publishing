import { BaseMenuItem } from "../../base/base-menu-item.js";

export class AngleMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Angle",
        name: "Angle",
        icon: svgIcon,
      },
      options: { outlined: true },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<text transform="matrix(1 0 0 1 366.1875 480.4863)" fill="#5B9741" font-family="'ArialMT'" font-size="150">@</text>
<polygon fill="#5B9741" points="3.031,407.018 476,2 512,39 69.5,418.5 366.188,417.5 366.188,467.5 25.5,467.5 "/>
<path fill="none" stroke="#5B9741" stroke-width="50" stroke-miterlimit="10" d="M305.5,506.5c19-165-0.812-210.085-128-313"/>
</svg>
`;
