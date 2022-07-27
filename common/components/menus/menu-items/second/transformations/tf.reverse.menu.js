import { BaseMenuItem } from "../../base/base-menu-item.js";

export class TransformationsReverseMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Reverse",
        name: "Reverse",
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
<rect x="240.725" y="130.231" fill="#5A963C" width="32.269" height="50.072"/>
<rect x="240.725" y="30.087" fill="#5A963C" width="32.269" height="50.072"/>
<rect x="240.725" y="230.271" fill="#5A963C" width="32.269" height="50.07"/>
<rect x="240.725" y="430.56" fill="#5A963C" width="32.269" height="50.071"/>
<rect x="240.725" y="330.414" fill="#5A963C" width="32.269" height="50.072"/>
<polygon fill="#5A963C" points="512,0 512,512 312.754,255.054 "/>
<polygon fill="none" stroke="#5A963C" stroke-width="30" stroke-miterlimit="10" points="15.381,468.631 15.381,43.087 183.833,256 
	"/>
</svg>
`;
