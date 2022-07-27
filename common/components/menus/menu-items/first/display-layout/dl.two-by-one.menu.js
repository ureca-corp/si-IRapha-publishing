import { LayoutAttributeType } from "../../../../dicom-window/index.js";
import { BaseMenuItem } from "../../base/base-menu-item.js";

const rx = rxjs;

export class DisplayLayoutTwoByOneMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "2:1 Mode",
        name: "2:1 Mode",
        icon: svgIcon,
      },
      options: {
        horizontal: true,
        hidableName: false,
      },
    });

    rx.fromEvent(this.getRootElement(), "click").subscribe(() =>
      this.#mutateDicomWindowLayout()
    );
  }

  #mutateDicomWindowLayout() {
    window.store.dicomWindowLayout$.next({
      layout: LayoutAttributeType.TwoByOne,
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<g id="Layouts">
	<path fill="#1E78BE" d="M24.653,25.034h462.692c13.617,0,24.654,10.411,24.654,23.253V189.17c0,12.842-11.037,23.253-24.654,23.253
		H24.653C11.038,212.423,0,202.012,0,189.17V48.288C0,35.445,11.038,25.034,24.653,25.034z"/>
	<path fill="#1E78BE" d="M24.785,300.909h462.432c13.688,0,24.784,10.467,24.784,23.379v140.635
		c0,12.91-11.097,23.377-24.784,23.377H24.785C11.097,488.3,0,477.833,0,464.923V324.288C0,311.376,11.097,300.909,24.785,300.909z"
		/>
	<polygon fill="#1E78BE" points="0.066,244.482 512,244.012 512,268.443 0.066,268.913 	"/>
</g>
</svg>
`;
