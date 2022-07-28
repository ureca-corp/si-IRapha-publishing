import { BaseMenuItem } from "../../base/base-menu-item.js";

export class TransformationsRotateRightMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Rotate Right",
        name: "Rotate Right",
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
	<path fill="#5A963C" d="M429.52,273.838l53.686-6.021c-2.838-39.534-19.419-82.075-38.676-108.151l-44.104,31.263
		C417.392,216.055,426.604,240.34,429.52,273.838z M427.763,315.58c-5.64,29.855-17.446,58.12-36.398,80.662l42.084,33.816
		c27.239-35.634,39.298-62.892,47.317-105.394L427.763,315.58z M361.647,424.88c-18.997,15.691-54.12,31.756-83.31,33.602
		l7.018,53.479c44.119-7.437,73.184-17.88,108.423-43.699L361.647,424.88z M237.481,62.364
		C101.349,76.54,31.843,189.09,31.843,287.509c0,107.252,70.545,209.917,198.636,224.346l6.08-53.554
		C134.846,443.415,85.837,359.757,85.837,287.509c0-91.719,67.767-158.713,150.722-170.79v56.292L361.547,86.5L237.481,0V62.364z"/>
</g>
</svg>
`;
