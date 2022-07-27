import { BaseMenuItem } from "../../base/base-menu-item.js";

export class TransformationsRotateLeftMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Rotate Left",
        name: "Rotate Left",
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
<g id="Layouts">
	<path fill="#5A963C" d="M114.623,190.927l-44.105-31.263c-19.257,26.076-35.838,68.617-38.676,108.15l53.685,6.022
		C88.443,240.34,97.655,216.055,114.623,190.927z M34.281,324.666c8.02,42.502,20.079,69.76,47.318,105.394l42.084-33.816
		c-18.953-22.542-30.76-50.806-36.399-80.662L34.281,324.666z M121.268,468.261c35.239,25.819,64.303,36.264,108.423,43.699
		l7.017-53.479c-29.188-1.846-64.312-17.909-83.309-33.602L121.268,468.261z M277.564,0L153.5,86.5l124.988,86.511v-56.292
		c82.955,12.077,150.722,79.071,150.722,170.79c0,72.248-49.009,155.906-150.722,170.792l6.08,53.555
		c128.091-14.43,198.636-117.094,198.636-224.347c0-98.419-69.506-210.969-205.64-225.145V0L277.564,0z"/>
</g>
</svg>
`;
