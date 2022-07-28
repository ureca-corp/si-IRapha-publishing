import { GridSelector } from "../../../../selectors/index.js";
import { SubMenu } from "../../../../sub-menu/index.js";
import { BaseMenuItem } from "../../base/base-menu-item.js";

export class DisplayLayoutConfigMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "config",
        name: "config",
        icon: svgIcon,
        subMenu: createSubMenu(),
      },
      options: {
        horizontal: true,
        hidableName: false,
      },
    });
  }
}

const createSubMenu = () => {
  const subMenu = new SubMenu({
    subMenuItems: [new GridSelector()],
    options: { padding: 0 },
  });
  UIkit.drop(subMenu.getRootElement(), { offset: 0 });

  return subMenu;
};

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<g id="Layouts">
	<rect x="159.911" y="26.772" fill="#1E78BE" width="11.846" height="458.738"/>
	<polygon fill="#1E78BE" points="0,168.909 512,168.405 512,178.884 0,179.388 	"/>
	
		<rect y="337.405" transform="matrix(-1 1.467784e-004 -1.467784e-004 -1 512.0503 685.2524)" fill="#1E78BE" width="512" height="10.48"/>
	<rect x="344.128" y="26.772" fill="#1E78BE" width="11.843" height="458.738"/>
	<path fill="#1E78BE" d="M16.324,26.772h111.165c8.442,0,15.285,6.413,15.285,14.324v96.733c0,7.911-6.843,14.324-15.285,14.324
		H16.324c-8.442,0-15.285-6.413-15.285-14.324V41.096C1.039,33.185,7.882,26.772,16.324,26.772z"/>
	<path fill="#1E78BE" d="M203.386,26.772h111.165c8.441,0,15.284,6.413,15.284,14.324v96.733c0,7.911-6.843,14.324-15.284,14.324
		H203.386c-8.442,0-15.286-6.413-15.286-14.324V41.096C188.1,33.185,194.943,26.772,203.386,26.772z"/>
	<path fill="#1E78BE" d="M385.55,26.772h111.166c8.44,0,15.284,6.413,15.284,14.324v96.733c0,7.911-6.844,14.324-15.284,14.324
		H385.55c-8.44,0-15.284-6.413-15.284-14.324V41.096C370.265,33.185,377.107,26.772,385.55,26.772z"/>
	<path fill="#1E78BE" d="M16.324,195.558h111.165c8.442,0,15.285,6.413,15.285,14.324v96.731c0,7.912-6.843,14.324-15.285,14.324
		H16.324c-8.442,0-15.285-6.412-15.285-14.324v-96.731C1.039,201.972,7.882,195.558,16.324,195.558z"/>
	<path fill="#1E78BE" d="M203.386,195.558h111.165c8.441,0,15.284,6.413,15.284,14.324v96.731c0,7.912-6.843,14.324-15.284,14.324
		H203.386c-8.442,0-15.286-6.412-15.286-14.324v-96.731C188.1,201.972,194.943,195.558,203.386,195.558z"/>
	<path fill="#1E78BE" d="M385.55,195.558h111.166c8.44,0,15.284,6.413,15.284,14.324v96.731c0,7.912-6.844,14.324-15.284,14.324
		H385.55c-8.44,0-15.284-6.412-15.284-14.324v-96.731C370.265,201.972,377.107,195.558,385.55,195.558z"/>
	<path fill="#1E78BE" d="M16.324,360.129h111.165c8.442,0,15.285,6.412,15.285,14.324v96.732c0,7.912-6.843,14.324-15.285,14.324
		H16.324c-8.442,0-15.285-6.412-15.285-14.324v-96.732C1.039,366.541,7.882,360.129,16.324,360.129z"/>
	<path fill="#1E78BE" d="M203.386,360.129h111.165c8.441,0,15.284,6.412,15.284,14.324v96.732c0,7.912-6.843,14.324-15.284,14.324
		H203.386c-8.442,0-15.286-6.412-15.286-14.324v-96.732C188.1,366.541,194.943,360.129,203.386,360.129z"/>
	<path fill="#1E78BE" d="M385.55,360.129h111.166c8.44,0,15.284,6.412,15.284,14.324v96.732c0,7.912-6.844,14.324-15.284,14.324
		H385.55c-8.44,0-15.284-6.412-15.284-14.324v-96.732C370.265,366.541,377.107,360.129,385.55,360.129z"/>
</g>
</svg>
`;
