import { BaseMenuItem } from "../../base/base-menu-item.js";

export class UtilityDicomMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Dicom",
        name: "Dicom",
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
	<path fill="#1E78BE" d="M207.514,376.711H45.574L43.553,95.073h316.534l0.428,67.348c0.553,0,2.755,5.266,3.307,5.266
		c15.734,0,46.961,7.653,46.961,11.817V72.727c0-24.858-23.755-45-48.614-45H45.574C20.754,27.691,0.606,47.785,0.573,72.604
		c0,0.082,0,0.163,0,0.244v321.25c0,24.919,20.143,49.96,45.245,49.96h185.635C218.472,423.714,210.286,400.682,207.514,376.711z"/>
	<path fill="#1E78BE" d="M377.047,217.464c-73.949,0-133.899,59.948-133.899,133.898c0,73.951,59.95,133.899,133.899,133.899
		c73.952,0,133.9-59.948,133.9-133.899C510.913,277.425,450.984,217.497,377.047,217.464z M400.741,442.344H352.13V327.302h48.98
		L400.741,442.344z M400.741,311.198H352.13v-45.184h48.98L400.741,311.198z"/>
</g>
</svg>
`;
