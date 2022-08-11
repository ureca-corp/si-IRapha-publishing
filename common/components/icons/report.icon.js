import { BaseIcon2 } from "./base/icon.js";

export class ReportIcon extends BaseIcon2 {
  constructor({ states, options }) {
    super({ states, options });

    this.getEl().innerHTML = svgIcon;
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<g id="레이어_9">
	<path fill="#5A963C" d="M419.992,0.833H93.458C65.633,0.931,43.109,23.48,43.044,51.306v409.453
		c0.097,27.803,22.612,50.317,50.413,50.413h326.536c27.917,0.068,50.611-22.495,50.709-50.413V51.306
		C470.636,23.366,447.934,0.769,419.992,0.833L419.992,0.833z M412.31,193.149l-6.62,9.278l-47.28,63.359l-22.872,30.908
		l-72.754,98.581l-66.371,10.342l-10.52-65.011l32.329-43.912H91.035v-30.908h150.176l46.867-63.357H91.035V171.34h220.093
		l39.243-53.191l76.832,54.668L412.31,193.149z M443.219,151.424l-61.879-43.853H91.035V76.365h290.364l11.821-16.371
		c5.88-7.847,16.942-9.577,24.939-3.9l45.154,31.56v30.614L443.219,151.424z"/>
</g>
</svg>
`;
