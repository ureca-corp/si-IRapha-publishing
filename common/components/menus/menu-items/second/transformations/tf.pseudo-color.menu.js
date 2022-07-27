import { BaseMenuItem } from "../../base/base-menu-item.js";

export class TransformationsPseudoColorMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Pseudo Color",
        name: "Pseudo Color",
        icon: svgIcon,
      },
      options: { horizontal: true },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<g id="Layouts">
	<path fill="#5A9642" d="M255.687,0.646C114.474,0.646,0,115.122,0,256.334c0,141.214,114.474,255.689,255.687,255.689
		c23.535-0.009,42.61-19.09,42.604-42.625c-0.001-10.606-3.959-20.829-11.098-28.673c-15.59-17.563-13.988-44.441,3.576-60.031
		c7.799-6.922,17.868-10.735,28.294-10.718h50.265c78.502-0.052,142.098-63.729,142.046-142.233l0,0
		C511.373,102.356,396.914,0.646,255.687,0.646z M99.433,256.333c-23.536,0-42.616-19.08-42.616-42.615
		c0-23.534,19.08-42.613,42.616-42.613s42.615,19.079,42.615,42.613c0.049,23.487-18.947,42.565-42.433,42.615
		C99.555,256.333,99.493,256.333,99.433,256.333z M184.663,142.695c-23.536,0-42.617-19.08-42.615-42.616
		c0-23.535,19.078-42.615,42.615-42.615c23.536,0,42.614,19.08,42.614,42.615c0,0.062,0,0.122,0,0.182
		C227.227,123.748,208.148,142.744,184.663,142.695L184.663,142.695z M326.71,142.695c-23.533,0-42.614-19.08-42.614-42.616
		c0-23.535,19.081-42.615,42.616-42.615c23.534,0,42.615,19.08,42.615,42.615c0,0.062,0,0.122-0.002,0.182
		C369.273,123.748,350.195,142.744,326.71,142.695L326.71,142.695z M411.94,256.333c-23.536,0-42.616-19.08-42.616-42.615
		c0-23.534,19.08-42.613,42.616-42.613c23.535,0,42.614,19.079,42.614,42.613c0.052,23.487-18.948,42.565-42.434,42.615
		C412.061,256.333,412,256.333,411.94,256.333z"/>
</g>
</svg>
`;
