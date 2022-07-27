import { BaseMenuItem } from "../../base/base-menu-item.js";

export class NaviCrossLinkMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Cross Link",
        name: "Cross Link",
        icon: svgIcon,
      },
      options: { horizontal: true },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<line fill="none" stroke="#5A9741" stroke-width="30" stroke-miterlimit="10" x1="0" y1="256.062" x2="190.989" y2="256.062"/>
<line fill="none" stroke="#5A9741" stroke-width="30" stroke-miterlimit="10" x1="321.048" y1="256.062" x2="512.124" y2="256.062"/>
<line fill="none" stroke="#5A9741" stroke-width="30" stroke-miterlimit="10" x1="256.061" y1="0" x2="256.061" y2="191.075"/>
<line fill="none" stroke="#5A9741" stroke-width="30" stroke-miterlimit="10" x1="256.061" y1="321.047" x2="256.061" y2="512.124"/>
</svg>
`;
