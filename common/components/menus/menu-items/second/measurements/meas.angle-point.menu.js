import { BaseMenuItem } from "../../base/base-menu-item.js";

export class MeasurementsAnglePointMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Angle(3 Points)",
        name: "Angle(3 Points)",
        icon: svgIcon,
      },
      options: {
        horizontal: true,
        hidableName: false,
      },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<polygon fill="#5B9742" points="3.031,407.018 476,2 512,39 69.5,418.5 512,417.5 512,467.5 25.5,467.5 "/>
<path fill="none" stroke="#5B9742" stroke-width="50" stroke-miterlimit="10" d="M305.5,506.5c19-165-0.813-210.085-128-313"/>
</svg>
`;
