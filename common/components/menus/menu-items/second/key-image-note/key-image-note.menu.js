import { BaseMenuItem } from "../../base/base-menu-item.js";

export class KeyImageNoteMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Key Image Note",
        name: "Key Image Note",
        icon: svgIcon,
      },
      options: { outlined: true },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<path fill="#5A9600" d="M242.143,179.003c-7.665-20.383-25.552-33.123-48.549-33.123c-28.105,0-51.103,22.931-51.103,50.958
	c0,28.026,22.998,50.956,51.103,50.956c22.998,0,40.884-15.288,48.549-33.122h86.875v33.122h33.219v-35.67h17.886v-33.122
	L242.143,179.003L242.143,179.003z M193.593,215.207c-10.22,0-17.886-7.644-17.886-17.834c0-10.192,7.667-17.835,17.886-17.835
	c10.223,0,17.886,7.644,17.886,17.835C211.479,207.563,201.259,215.207,193.593,215.207z"/>
<g>
	<path fill="#5A9600" d="M460.898,0H52.07C23.964,0,0.967,22.93,0.967,50.957v458.609l102.206-101.914L512,407.501V50.957
		C512,22.93,489.003,0,460.898,0z M454.5,351.5l-400.445,0.109V54.956h400.736L454.5,351.5z"/>
</g>
</svg>
`;
