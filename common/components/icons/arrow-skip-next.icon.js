import { BaseIcon } from "./base/icon.js";

export class ArrowSkipNextIcon extends BaseIcon {
  constructor({ element, isActive$, onClick }) {
    super({ element, isActive$, onClick });
    element.innerHTML = svgIcon;
  }
}

const svgIcon = `
<svg width="20" height="20" viewBox="0 0 24 24" data-testid="SkipNextRoundedIcon"><path d="m7.58 16.89 5.77-4.07c.56-.4.56-1.24 0-1.63L7.58 7.11C6.91 6.65 6 7.12 6 7.93v8.14c0 .81.91 1.28 1.58.82zM16 7v10c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1s-1 .45-1 1z"></path></svg>
`;