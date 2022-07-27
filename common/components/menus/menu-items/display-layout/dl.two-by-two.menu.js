import { BaseMenuItem } from "../base/base-menu-item.js";

export class DisplayLayoutTwoByTwoMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "2:2 Mode",
        name: "2:2 Mode",
        icon: svgIcon,
      },
      options: {
        horizontal: true,
      },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<line fill="none" stroke="#1E78BE" stroke-width="20" stroke-miterlimit="10" x1="0" y1="259.217" x2="512" y2="259.217"/>
<line fill="none" stroke="#1E78BE" stroke-width="20" stroke-miterlimit="10" x1="258.485" y1="27.554" x2="258.485" y2="487.098"/>
<path fill="#1E78BE" d="M23.327,27.554h166.668c12.848,0,23.262,9.744,23.262,21.765v148.882c0,12.021-10.414,21.765-23.262,21.765
	H23.327c-12.847,0-23.262-9.744-23.262-21.765V49.318C0.066,37.298,10.48,27.554,23.327,27.554z"/>
<path fill="#1E78BE" d="M322.07,27.554h166.668c12.848,0,23.262,9.745,23.262,21.765v146.154c0,12.021-10.414,21.765-23.262,21.765
	H322.07c-12.848,0-23.26-9.745-23.26-21.765V49.319C298.811,37.298,309.225,27.554,322.07,27.554z"/>
<path fill="#1E78BE" d="M24.056,294.686h166.668c12.848,0,23.262,9.744,23.262,21.764v148.883c0,12.021-10.414,21.766-23.262,21.766
	H24.056c-12.847,0-23.262-9.744-23.262-21.766V316.449C0.795,304.43,11.208,294.686,24.056,294.686z"/>
<path fill="#1E78BE" d="M322.07,294.064h166.668c12.848,0,23.262,9.744,23.262,21.766v149.504c0,12.02-10.414,21.764-23.262,21.764
	H322.07c-12.848,0-23.26-9.744-23.26-21.764V315.83C298.811,303.809,309.225,294.064,322.07,294.064z"/>
</svg>
`;
