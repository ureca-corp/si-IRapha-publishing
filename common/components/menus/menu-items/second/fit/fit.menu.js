import { BaseMenuItem } from "../../base/base-menu-item.js";

export class FitMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Fit",
        name: "Fit",
        icon: svgIcon,
      },
      options: { outlined: true },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<g id="레이어_9">
	<g>
		<path fill="#643C78" d="M341.412,0l170.352,170.668V0H341.412z M-0.001,170.666L170.035-0.001H-0.001V170.666z M170.666,512
			L-0.001,341.334V512H170.666L170.666,512z M512,341.334L341.412,512H512V341.334z"/>
	</g>
</g>
</svg>
`;
