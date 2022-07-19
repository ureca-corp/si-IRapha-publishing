import { BaseIcon } from "./base/icon.js";

export class ArrowRightDoubleIcon extends BaseIcon {
  constructor({ element, isActive$, onClick }) {
    super({ element, isActive$, onClick });
    element.innerHTML = svgIcon;
  }
}

const svgIcon = `
<svg width="20" height="20" viewBox="0 0 24 24" data-testid="KeyboardDoubleArrowRightIcon"><path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path><path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path></svg>
`;
