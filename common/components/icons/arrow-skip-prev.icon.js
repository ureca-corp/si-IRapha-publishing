import { BaseIcon } from "./base/icon.js";

export class ArrowSkipPrevIcon extends BaseIcon {
  constructor({ element, isActive$, onClick }) {
    super({ element, isActive$, onClick });
    element.innerHTML = svgIcon;
  }
}

const svgIcon = `
<svg width="20" height="20" viewBox="0 0 24 24" data-testid="SkipPreviousRoundedIcon"><path d="M7 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1zm3.66 6.82 5.77 4.07c.66.47 1.58-.01 1.58-.82V7.93c0-.81-.91-1.28-1.58-.82l-5.77 4.07c-.57.4-.57 1.24 0 1.64z"></path></svg>
`;
