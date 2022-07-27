import { BaseMenuItem } from "../../base/base-menu-item.js";

export class AnnotationsFreeLineMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Free Line",
        name: "Free Line",
        icon: svgIcon,
      },
      options: { horizontal: true },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<path fill="none" stroke="#1F79BE" stroke-width="50" stroke-miterlimit="10" d="M17.235,89.633
	C62.914,48.96,101.54,26.47,125.733,48.111C153,72.5,138.5,107,82.5,197.5s-57.973,138.33-28,158c32,21,46.466,21.505,151.5-90
	c105.5-112,145.512-105.017,169-88c14.563,10.551,35.36,40.22,39,91.5c3.369,47.476,5.634,125.365-32.5,170
	c-29.428,34.444-68.072,51.734-95.5,46.47c-21.5-4.127-38.665-25.74-41.5-52.47c-3.5-33,20.644-74.648,44-93
	c28-22,57.05-36.271,92-41c33.849-4.579,69.334-5,131.5-5"/>
</svg>
`;
