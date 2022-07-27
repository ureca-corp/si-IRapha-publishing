import { BaseMenuItem } from "../base/base-menu-item.js";

export class DisplayInfoMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Display Info",
        name: "Info",
        icon: svgIcon,
      },
      options: {
        outlined: true,
        more: true,
      },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<g id="Layouts">
	<path fill="#5A9741" d="M466.725,50.56H47.235C21.549,50.661,0.752,70.747,0.646,95.554v315.017
		c0.07,24.831,20.878,44.953,46.589,45.056h419.489c25.712-0.103,46.519-20.225,46.589-45.056V95.554
		C513.208,70.747,492.412,50.661,466.725,50.56z M466.725,410.88H47.235V95.554h419.489V410.88z"/>
	<path fill="#5A9741" d="M133.107,284.563H96.451v-35.4h36.656V284.563z M133.107,231.463H96.451v-35.339h36.656V231.463z
		 M133.107,178.423H96.451v-35.338h36.656V178.423z M261.272,284.563h-91.574v-35.4h91.574V284.563z M316.193,231.71H169.698
		v-35.586h146.495V231.71z M316.193,178.671H169.698v-35.586h146.495V178.671z"/>
</g>
</svg>
`;
