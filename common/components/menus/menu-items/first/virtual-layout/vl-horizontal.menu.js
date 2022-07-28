import { BaseMenuItem } from "../../base/base-menu-item.js";

const rx = rxjs;

export class VirtualLayoutHorizontalMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Horizontal Layout",
        name: "Horizontal",
        icon: svgIcon,
      },
      options: {
        horizontal: true,
        hidableName: false,
      },
    });

    rx.fromEvent(this.getRootElement(), "click").subscribe(() =>
      this.#handleClick()
    );
  }

  #handleClick() {
    // mutate global state
    window.store.virtualLayoutMode$.next({ layout: "horizontal" });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<g id="Layouts">
	<path fill="#5A9642" d="M465.311,23.747H46.673C21.007,23.849,0.225,44.63,0.123,70.296v279.112
		c0.103,25.668,20.884,46.449,46.55,46.55h162.523v46.736h-46.242v46.55h186.076v-46.55h-46.487v-46.736h162.769
		c25.666-0.103,46.448-20.882,46.549-46.55V70.296C511.759,44.63,490.978,23.849,465.311,23.747z M465.311,349.408H46.673V70.296
		h418.638V349.408z"/>
</g>
<rect x="316.861" y="197.241" fill="#5A9641" width="41.185" height="32.269"/>
<rect x="399.232" y="197.241" fill="#5A9641" width="41.186" height="32.269"/>
<rect x="234.578" y="197.241" fill="#5A9641" width="41.184" height="32.269"/>
<rect x="69.835" y="197.241" fill="#5A9641" width="41.186" height="32.269"/>
<rect x="152.206" y="197.241" fill="#5A9641" width="41.186" height="32.269"/>
</svg>
`;
