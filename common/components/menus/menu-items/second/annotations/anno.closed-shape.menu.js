import { BaseMenuItem } from "../../base/base-menu-item.js";

export class AnnotationsClosedShapeMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Closed Shape",
        name: "Closed Shape",
        icon: svgIcon,
      },
      options: { horizontal: true, hidableName: false },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<g id="레이어_9">
	<path fill="#1E78BE" d="M195.134,201.092c0,45.697-37.04,82.735-82.737,82.735c-45.682,0-82.722-37.038-82.722-82.735
		c0-45.696,37.04-82.736,82.722-82.736C158.095,118.355,195.134,155.396,195.134,201.092z"/>
	<path fill="none" stroke="#1E78BE" stroke-width="50" stroke-miterlimit="10" d="M461.432,237.033
		c-49.704,47.514-37.323,29.889-61.455,100.696c-19.481,57.275-106.147,80.223-169.157,37.739
		c-38.952-26.345-141.123,25.702-184.528-25.145c-62.087-72.785,38.174-130.139,61.465-138.425
		c78.381-27.822,61.532-75.826,123.13-100.683c61.599-24.857,92.052,26.768,169.09,25.134
		C482.678,134.651,512.766,188.108,461.432,237.033z"/>
</g>
</svg>
`;
