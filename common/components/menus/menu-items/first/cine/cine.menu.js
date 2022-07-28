import { BaseMenuItem } from "../../base/base-menu-item.js";

export class CineMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Cine",
        name: "Cine",
        icon: svgIcon,
      },
      options: { outlined: true },
    });
  }
}

const svgIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><defs><style>.cls-1{opacity:0.6;}.cls-2{opacity:0.54;}.cls-3{fill:#5A9600;}</style></defs><g id="Layouts"><path class="cls-3" d="M80,8.71H48C25.52,8.71,8,27.35,8,49.83,8,70.71,26,88.71,46.88,88.71c22.68,0,41.12-17.52,41.12-40v-32A8,8,0,0,0,80,8.71Zm-12,52-12-8v8H28v-24H56v8l12-8Z"/></g></svg>
`;
