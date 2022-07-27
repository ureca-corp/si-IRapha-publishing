import { BaseMenuItem } from "../../base/base-menu-item.js";

export class TransformationsInvertMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Invert",
        name: "Invert",
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
	<g id="Page-1">
		<g id="Core">
			<g id="invert-colors">
				<path id="Shape" fill="#5A9642" d="M255.876,113.125c0.124,23.25,0,283.959,0,283.959c81.291,0,145.624-55.488,145.624-141.322
					C401.5,164.596,334.5,113.125,255.876,113.125z M454.84,0H56.912C25.584,0.097,0.214,25.47,0.115,56.797v397.931
					c0.097,31.325,25.468,56.695,56.797,56.797H454.84c31.327-0.099,56.697-25.47,56.798-56.797V56.619
					C511.44,25.361,486.099,0.097,454.84,0z M463.943,451.96l-208.067,0.041v-54.917c-84.376,0-142.887-61.466-142.887-141.084
					c0-80.382,60.511-142.875,142.887-142.875c0-26.024,0.124-59.938,0.124-59.938l207.667-0.021l0.274,398.614v0.18H463.943z"/>
			</g>
		</g>
	</g>
</g>
</svg>
`;
