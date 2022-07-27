import { BaseMenuItem } from "../../base/base-menu-item.js";

export class UtilityMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Utility",
        name: "Utility",
        icon: svgIcon,
      },
      options: { outlined: true, more: true },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<g>
	<path fill="#558B2F" d="M432.271,185.314l-30.019,30.241h30.371v-30.262L432.271,185.314z"/>
	<path fill="#558B2F" d="M94.435,214.848l32.755-0.241l-20.385-35.365c-1.284-2.021-1.054-3.891,1.492-5.649
		c7.813-5.394,24.61-17.052,24.61-17.052l-0.046-6.768c0,0-15.771-10.181-23.469-15.426c-4.565-3.11-5.071-4.834-1.628-10.26
		c5.898-9.297,30.246-40.793,30.246-40.793l-99.78,0.912C17.118,84.206,0,99.813,0,119.059v219.827l48.306-96.136
		C56.544,226.354,74.651,214.848,94.435,214.848L94.435,214.848z"/>
	<path fill="#558B2F" d="M473.212,85.871l-22.447,22.605c-3.946,3.974-10.351,3.988-14.325,0.042
		c-27.479-27.258-27.009-20.258,5.836-53.352c8.434-8.489-16.43-23.415-34.111-10.801c-33.759,24.024-30.872,27.894-33.047,71.367
		l-99.078,99.823h75.491l61.632-62.09l27.056-1.551c14.209-0.809,27.279-8.08,35.456-19.745l8.605-12.268
		C496.647,102.245,481.77,77.26,473.212,85.871z"/>
	<path fill="#558B2F" d="M482.362,257.98H111.688c-11.598,0-22.117,6.938-26.945,17.756l-65.465,146.68
		c-2.448,5.479-2.008,11.861,1.161,16.93c3.176,5.069,8.64,8.14,14.519,8.14h397.936c6.75,0,12.877-4.035,15.68-10.331
		l60.736-136.08c4.2-9.416,3.445-20.381-2.01-29.104C501.853,263.25,492.451,257.98,482.362,257.98L482.362,257.98z"/>
</g>
<path fill="#558B2F" d="M279.652,153.311c0.044-0.453,0.081-1.228,0.103-2.55c-0.016-17.528-13.897-31.895-31.412-32.5
	c-17.96-0.613-33.019,13.438-33.641,31.398c-0.613,17.953,13.438,33.012,31.398,33.633c2.849,0.044,3.813-0.015,3.864,0.044
	l-31.434,31.726c-5.787-2.317-11.252-5.377-16.265-9.089l-24.04,9.294c-2.191,0.782-4.625-0.065-5.852-2.045l-19.232-32.056
	c-1.176-1.988-0.694-4.538,1.125-5.97l20.232-15.424c-0.906-6.028-0.906-12.159,0-18.187l-20.313-15.345
	c-1.87-1.395-2.36-3.989-1.125-5.969l19.231-32.055c1.184-2.031,3.668-2.895,5.853-2.046l24.039,9.294
	c5.02-3.683,10.485-6.73,16.265-9.054l3.69-24.639c0.306-2.338,2.331-4.07,4.683-4.004h38.428c2.357-0.051,4.384,1.667,4.727,4.004
	l3.646,24.639c5.802,2.323,11.267,5.393,16.264,9.133l24.041-9.294c2.19-0.796,4.638,0.059,5.852,2.046l9.229,15.249l-49.357,49.782
	C279.652,153.317,279.652,153.317,279.652,153.311z"/>
<path fill="#558B2F" d="M298.508,173.438c0.019,0,0.084-0.284,0.158-0.651C298.582,173.621,298.508,173.438,298.508,173.438z"/>
</svg>
`;
