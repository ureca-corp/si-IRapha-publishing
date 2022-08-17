import { BaseIcon2 } from "./base/icon.js";

export class ArrowDropDownIcon extends BaseIcon2 {
  constructor({ states, options }) {
    super({ states, options });

    this.getEl().innerHTML = svgIcon;
  }
}

const svgIcon = `
<svg viewBox="0 0 24 24"><path d="m8.71 11.71 2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path></svg>
`;
