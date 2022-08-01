import { BaseIcon2 } from "./base/icon.js";

export class FullScreenIcon extends BaseIcon2 {
  constructor({ states, options }) {
    super({ states, options });

    this.getEl().innerHTML = svgIcon;
  }
}

const svgIcon = `
<svg 
  xmlns="http://www.w3.org/2000/svg" 
  height="24" 
  width="24" 
  viewBox="0 0 47 47"
>
  <path 
    d="M10 38V28.35H13V35H19.65V38ZM10 19.65V10H19.65V13H13V19.65ZM28.35 38V35H35V28.35H38V38ZM35 19.65V13H28.35V10H38V19.65Z"
  />
</svg>
`;
