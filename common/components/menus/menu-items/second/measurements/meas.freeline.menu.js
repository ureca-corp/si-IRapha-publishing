import { BaseMenuItem } from "../../base/base-menu-item.js";

export class MeasurementsFreeLineMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Free Line",
        name: "Free Line",
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
<text transform="matrix(1 0 0 1 251 507.3359)" fill="#5A963C" font-family="'ArialUnicodeMS'" font-size="160">mm</text>
<text transform="matrix(1 0 0 1 251 507.3359)" fill="none" stroke="#5A963C" stroke-width="10" stroke-miterlimit="10" font-family="'ArialUnicodeMS'" font-size="160">mm</text>
<path fill="none" stroke="#5A963C" stroke-width="60" stroke-miterlimit="10" d="M31.5,365.5"/>
<path fill="none" stroke="#5A963C" stroke-width="60" stroke-miterlimit="10" d="M482.5,116.5"/>
<path fill="none" stroke="#5A963C" stroke-width="50" stroke-miterlimit="10" d="M14.501,66.34
	C60.34,33.21,99.102,14.892,123.379,32.52c27.362,19.865,12.812,47.966-43.385,121.681
	c-56.197,73.715-58.176,112.674-28.098,128.695c32.113,17.104,46.629,17.515,152.031-73.31
	c105.869-91.227,146.021-85.54,169.593-71.678c14.611,8.594,35.482,32.76,39.138,74.528c3.381,38.671,5.651,102.114-32.616,138.471
	c-29.529,28.054-68.31,42.138-95.833,37.849c-21.575-3.36-38.801-20.965-41.646-42.735c-3.513-26.881,20.717-60.805,44.155-75.752
	c28.1-17.918,57.249-29.543,92.321-33.396c33.967-3.73,69.578-4.072,131.962-4.072"/>
</svg>
`;
