import { BaseMenuItem } from "../../base/base-menu-item.js";

export class MeasurementsRectangleMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Rectangle",
        name: "Rectangle",
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
	<path fill="#5A9600" d="M189.711,78.221h286.312c19.788,0,35.829,16.041,35.829,35.83v286.31c0,19.79-16.041,35.831-35.829,35.831
		H189.711c-19.789,0-35.83-16.041-35.83-35.831V114.05C153.881,94.262,169.922,78.221,189.711,78.221z"/>
	<path fill="#5A9600" d="M115.196,403.312l0.118-293.468c0.275-17.958-8.558-32.617-19.023-32.621l-76.219-0.074
		c-10.46-0.16-19.043,14.704-19.084,32.584L0.87,403.198c-0.274,17.958,8.56,32.619,19.023,32.624l76.218,0.073
		C106.575,435.899,115.157,421.192,115.196,403.312z M19.925,403.257l0.119-293.465l76.218-0.004l-0.031,32.642l-38.112,0.197
		l-0.031,32.641l38.109-0.041l0.047,32.644l-38.107-0.037l-0.031,32.643l38.107,0.035l-0.03,32.564l-38.107-0.036l0.362,32.412
		l38.109,0.037l-0.348,32.95l-38.259-0.586l0.049,32.644l38.497,0.199l-0.499,32.556L19.925,403.257z"/>
</g>
</svg>
`;
