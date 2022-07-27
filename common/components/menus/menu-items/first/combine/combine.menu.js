import { BaseMenuItem } from "../../base/base-menu-item.js";

export class CombineMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Combine",
        name: "Combine",
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
	<path fill="#5A9642" d="M480.96,171.432H341.313V38.829c0-20.843-13.952-37.849-31.04-37.849H31.04C13.952,0.98,0,17.987,0,38.829
		v265.204c0,20.842,13.952,37.913,31.04,37.913h139.649v132.603c0,20.842,13.951,37.914,31.039,37.914H480.96
		c17.087,0,31.04-17.071,31.04-37.914V209.345C512,188.502,498.049,171.432,480.96,171.432z M170.688,209.345v94.879H32.833V38.638
		h273v132.794H201.472C184.64,171.432,170.688,188.502,170.688,209.345z M473.167,475.073l-265-0.334V341.946h102.361
		c17.087,0,31.039-17.069,31.039-37.913v-94.88l131.6,0.334V475.073z"/>
</g>
</svg>
`;
