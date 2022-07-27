import { BaseMenuItem } from "../../base/base-menu-item.js";

export class AnnotationsRectangleMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Rectangle",
        name: "Rectangle",
        icon: svgIcon,
      },
      options: { horizontal: true, hidableName: false },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<g id="Layouts">
	<path fill="none" stroke="#1E78BE" stroke-width="50" stroke-miterlimit="10" d="M71.842,26.5h370.316
		c25.595,0,46.342,20.705,46.342,46.243v369.515c0,25.539-20.747,46.242-46.342,46.242H71.842
		c-25.593,0-46.342-20.703-46.342-46.242V72.745C25.5,47.205,46.248,26.5,71.842,26.5z"/>
</g>
</svg>
`;
