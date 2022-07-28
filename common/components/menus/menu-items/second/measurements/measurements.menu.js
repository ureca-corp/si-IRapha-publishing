import { BaseMenuItem } from "../../base/base-menu-item.js";

export class MeasurementsMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Measurements",
        name: "Measurements",
        icon: svgIcon,
      },
      options: { outlined: true, more: true },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<g id="레이어_9">
	<path fill="#5A963C" stroke="#5B9741" stroke-miterlimit="10" d="M312.811,28.081L60.953,386.628
		c-15.423,21.903-17.497,47.178-4.878,56.211l93.298,65.406c12.789,8.972,35.857-1.575,51.258-23.536L452.49,126.16
		c15.345-21.942,17.478-47.234,4.855-56.268L364.09,4.6C351.174-4.713,328.178,6.197,312.811,28.081z M429.205,109.828
		L177.346,468.376l-93.106-65.414l27.993-39.813l46.515,32.688l27.951-39.927l-46.536-32.747l27.993-39.813l46.558,32.804
		l28.015-39.758l-46.613-32.781l27.992-39.815l46.516,32.688l28.137-39.608l-46.538-32.748l27.992-39.813l46.538,32.746
		l27.972-39.868l-46.516-32.688l27.972-39.871L429.205,109.828z"/>
</g>
</svg>
`;
