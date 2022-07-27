import { BaseMenuItem } from "../../base/base-menu-item.js";

export class AnnotationsEllipseMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Ellipse",
        name: "Ellipse",
        icon: svgIcon,
      },
      options: { horizontal: true },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<g id="레이어_9">
	<path fill="none" stroke="#1E78BE" stroke-width="50" stroke-miterlimit="10" d="M348.485,398.176
		c-116.792,78.04-252.458,79.971-303.009,4.318c-50.551-75.649,3.159-200.247,119.965-278.289
		c116.792-78.042,252.459-79.986,303.01-4.335C519.002,195.524,465.291,320.12,348.485,398.176z"/>
</g>
</svg>
`;
