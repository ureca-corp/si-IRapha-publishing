import { BaseMenuItem } from "../../base/base-menu-item.js";

export class NextStudyMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Next Study",
        name: "Next",
        icon: svgIcon,
      },
      options: {
        outlined: true,
      },
    });
  }
}

const svgIcon = `
<svg viewBox="0 0 24 24">
  <path 
    fill="#5A9600" 
    d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z">
  </path>
</svg>
`;
