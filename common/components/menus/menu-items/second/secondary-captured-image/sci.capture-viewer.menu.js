import { BaseMenuItem } from "../../base/base-menu-item.js";

export class SciCaptureViewerMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Capture Viewer Layout",
        name: "Capture Viewer Layout",
        icon: svgIcon,
      },
      options: { horizontal: true },
    });
  }
}

const svgIcon = `
<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 153" viewBox="0 0 48.93 48.93">
<rect width="48" height="48" x="1" y="1" fill="none" stroke="#1E78BE" stroke-miterlimit="10" stroke-width="4" rx="6.62"/>
<path fill="none" stroke="#1E78BE" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M374.66,1239.62c6.52,14,24.41,14.22,31.29,0C399.44,1225.67,381.54,1225.41,374.66,1239.62Z" transform="translate(-365.84 -1215.16)"/>
<circle cx="24.47" cy="24.47" r="3.88" fill="none" stroke="#1E78BE" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
</svg>
`;
