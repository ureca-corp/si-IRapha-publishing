import { BaseMenuItem } from "../../base/base-menu-item.js";

export class TransformationsSmoothingMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Smoothing",
        name: "Smoothing",
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
<path fill="#5A9642" d="M450,317.499C450,424.642,363.143,511.5,256,511.5S62,424.642,62,317.499C62,210.357,256,0,256,0
	S450,210.357,450,317.499z"/>
</svg>
`;
