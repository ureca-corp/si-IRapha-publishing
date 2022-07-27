import { BaseMenuItem } from "../../base/base-menu-item.js";

export class SciCaptureLayoutMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Capture Layout",
        name: "Capture Layout",
        icon: svgIcon,
      },
      options: { horizontal: true },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	  viewBox="0 0 512 512" transform="scale(0.9)" xml:space="preserve">
<g id="레이어_9">
	<path fill="#1E78BE" d="M0,29.082V482.5h512V29.082H0z M339.476,380.352H185.293V150.404h61.698V316.5h92.485V380.352z"/>
</g>
</svg>
`;
