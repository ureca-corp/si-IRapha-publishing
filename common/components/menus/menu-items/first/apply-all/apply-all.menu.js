import { BaseMenuItem } from "../../base/base-menu-item.js";

export class ApplyAllMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "ApplyAll",
        name: "ApplyAll",
        icon: svgIcon,
      },
      options: { outlined: true },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<g id="Layouts">
	<path fill="#5A963C" d="M153.738,152.271h-51.221v179.271c0,28.288,22.932,51.222,51.221,51.222h230.491v-51.222H153.738V152.271
		L153.738,152.271z"/>
	<path fill="#5A963C" d="M461.059,24.221h-204.88c-28.289,0-51.22,22.933-51.22,51.221l0,0v153.661
		c0,28.29,22.931,51.221,51.22,51.221h204.88c28.29,0,51.222-22.932,51.222-51.221V75.441
		C512.279,47.153,489.349,24.221,461.059,24.221L461.059,24.221z M333.008,227.822l-66.139-67.034l27.02-27.02l39.63,39.825
		l98.153-98.984l26.825,27.018L333.008,227.822z"/>
	<path fill="#5A963C" d="M51.296,254.713H0.076v179.271c0,28.289,22.932,51.221,51.22,51.221h230.493v-51.221H51.296V254.713z"/>
</g>
</svg>
`;
