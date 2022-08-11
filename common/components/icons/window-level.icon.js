import { BaseIcon2 } from "./base/icon.js";

export class WindowLevelIcon extends BaseIcon2 {
  constructor({ states, options }) {
    super({ states, options });

    this.getEl().innerHTML = svgIcon;
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<g id="레이어_9">
	<path fill="#643C78" d="M436.819,330.761l75.129-75.13l-75.129-75.13V75.13H330.823L255.691,0l-74.816,75.13H75.13v105.996
		L0,256.256l75.13,75.13v105.37h106.059l74.816,75.129l75.131-75.129h105.684V330.761z M256.005,391.552V120.333
		c74.895,0,135.61,60.715,135.61,135.61C391.615,330.839,330.899,391.552,256.005,391.552z"/>
</g>
</svg>
`;
