import { BaseMenuItem } from "../../base/base-menu-item.js";

export class TransformationsMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Transformations",
        name: "Transformations",
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
	<path fill="#5A963C" d="M267.463,55.947V0.5L166.189,81.282l101.273,74.664v-49.329c83.887,0.071,151.872,68.057,151.944,151.942
		c0.088,24.749-6.001,49.125-17.716,70.926l36.992,36.927c59.781-94.337,31.768-219.275-62.569-279.056
		C343.62,66.765,305.93,55.869,267.463,55.947z"/>
	<path fill="#5A963C" d="M246.167,410.503c-83.885-0.07-151.873-68.058-151.944-151.944c-0.089-24.747,6-49.125,17.715-70.924
		l-36.994-36.993c-59.78,94.38-31.732,219.354,62.648,279.135c32.474,20.569,70.135,31.458,108.574,31.396V512l101.273-76.162
		L246.166,361.28L246.167,410.503L246.167,410.503z"/>
</g>
</svg>
`;
