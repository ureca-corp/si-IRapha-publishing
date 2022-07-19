import { BaseIcon } from "./base/icon.js";

export class ArrowLeftDoubleIcon extends BaseIcon {
  constructor({ element, isActive$, onClick }) {
    super({ element, isActive$, onClick });
    element.innerHTML = svgIcon;
  }
}

const svgIcon = `
<svg width="20" height="20" viewBox="0 0 24 24" data-testid="KeyboardDoubleArrowLeftIcon"><path d="M17.59 18 19 16.59 14.42 12 19 7.41 17.59 6l-6 6z"></path><path d="m11 18 1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z"></path></svg>
`;
