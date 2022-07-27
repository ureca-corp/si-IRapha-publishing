import { BaseMenuItem } from "../../base/base-menu-item.js";

export class UtilityResetMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Reset",
        name: "Reset",
        icon: svgIcon,
      },
      options: { horizontal: true, hidableName: false },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<g id="레이어_9">
	<path fill="#0078C8" d="M346.014,255.199c0-39.317-31.873-71.19-71.19-71.19c-39.315,0-71.189,31.872-71.189,71.19
		c0,39.316,31.874,71.188,71.189,71.188l0,0C314.103,326.289,345.914,294.473,346.014,255.199z M274.073,38
		C153.719,38.034,56.159,135.593,56.126,255.949L0,255.954l80.377,96.873l80.643-96.873l-56.455-0.005
		c-0.066-93.685,75.825-169.687,169.51-169.753c93.687-0.067,169.688,75.825,169.754,169.511
		c0.067,93.686-75.823,169.685-169.511,169.752c-35.324,0.025-69.773-10.977-98.542-31.473l-34.371,34.864
		c95.492,73.283,232.308,55.277,305.59-40.213c73.283-95.493,55.279-232.31-40.212-305.591C368.712,53.83,322.064,37.996,274.073,38
		z"/>
</g>
</svg>
`;
