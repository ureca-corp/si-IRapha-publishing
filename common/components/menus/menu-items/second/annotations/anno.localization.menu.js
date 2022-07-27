import { BaseMenuItem } from "../../base/base-menu-item.js";

export class AnnotationsLocalizationMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Localization",
        name: "Localization",
        icon: svgIcon,
      },
      options: { horizontal: true },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<g id="레이어_9">
	<circle fill="#1F79BE" cx="256.155" cy="255.044" r="83.831"/>
</g>
</svg>
`;
