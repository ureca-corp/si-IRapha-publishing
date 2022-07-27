import { BaseMenuItem } from "../../base/base-menu-item.js";

export class MeasurementsMagnifyingMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Magnifying",
        name: "Magnifying",
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
<g id="Layouts">
	<path fill="#5A963C" stroke="#5A9600" stroke-miterlimit="10" d="M365.433,321.535h-23.134l-8.196-7.924
		C402.172,234.22,392.999,114.68,313.61,46.61c-79.389-68.07-198.929-58.897-267,20.493c-68.07,79.39-58.896,198.929,20.493,267
		c70.918,60.81,175.587,60.81,246.507,0l7.833,8.197v23.042L467.624,511.07l43.536-43.534L365.433,321.535z M190.015,321.535
		c-72.685,0.052-131.651-58.832-131.7-131.519c-0.05-72.686,58.833-131.65,131.518-131.7c72.685-0.049,131.649,58.833,131.7,131.518
		c0,0.031,0,0.062,0,0.091c0.149,72.535-58.529,131.458-131.062,131.61C190.319,321.535,190.167,321.535,190.015,321.535z"/>
</g>
</svg>
`;
