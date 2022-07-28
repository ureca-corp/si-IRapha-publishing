import { BaseMenuItem } from "../../base/base-menu-item.js";

export class ZoomMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Zoom",
        name: "Zoom",
        icon: svgIcon,
      },
      options: { outlined: true },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<path fill="#653D79" d="M366.007,322.149h-23.119l-8.159-7.752c68.214-79.479,59.081-199.211-20.401-267.425
	c-79.479-68.214-199.209-59.081-267.423,20.4c-68.214,79.48-59.082,199.212,20.4,267.425c71.052,60.979,175.974,60.979,247.025,0
	l7.888,8.159v23.117L468.413,512L512,468.414L366.007,322.149z M190.504,322.149c-72.706,0-131.646-58.94-131.646-131.645
	c0-72.706,58.939-131.645,131.646-131.645s131.646,58.939,131.646,131.645l0,0c0.112,72.594-58.646,131.53-131.238,131.645
	C190.775,322.149,190.64,322.149,190.504,322.149L190.504,322.149z"/>
</svg>
`;
