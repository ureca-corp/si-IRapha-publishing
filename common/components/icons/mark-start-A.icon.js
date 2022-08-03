import { BaseIcon2 } from "./base/icon.js";

export class MarkStartAIcon extends BaseIcon2 {
  constructor({ states, options }) {
    super({ states, options });

    this.getEl().innerHTML = svgIcon;
  }
}

const svgIcon = `
<svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_101_2)">
<path d="M12.1855 5.28076L8.65527 15H7.2124L11.2773 4.33594H12.2075L12.1855 5.28076ZM15.1445 15L11.6069 5.28076L11.585 4.33594H12.5151L16.5947 15H15.1445ZM14.9614 11.0522V12.2095H8.97021V11.0522H14.9614Z" />
<path d="M15.58 20.5C15.78 20.0733 15.9733 19.7 16.16 19.38C16.36 19.06 16.5533 18.7933 16.74 18.58H5.08V17.74H16.74C16.5533 17.5133 16.36 17.24 16.16 16.92C15.9733 16.6 15.78 16.2333 15.58 15.82H16.28C17.12 16.7933 18 17.5133 18.92 17.98V18.34C18 18.7933 17.12 19.5133 16.28 20.5H15.58Z" />
</g>
</svg>
`;
