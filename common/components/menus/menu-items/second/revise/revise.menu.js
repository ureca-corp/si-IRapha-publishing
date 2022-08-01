import { BaseMenuItem } from "../../base/base-menu-item.js";

const rx = rxjs;

export class ReviseMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Revise",
        name: "Revise",
        icon: svgIcon,
      },
      options: { outlined: true },
    });

    this.#init();
  }

  #init() {
    rx.fromEvent(this.getEl(), "click").subscribe(() =>
      window.store.reviseOpen$.next({
        x: window.innerWidth / 3,
        y: window.innerHeight / 5,
      })
    );
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<g>
	<path fill="#1E78BE" d="M457.367,154.313c0,35.672-10.854,65.922-32.546,90.763c-21.698,24.84-55.221,43.25-100.573,55.222v1.529
		l139.754,210.188H340.541L215.065,314.057h-70.548v197.958H41.633V0.685h170.913c28.273,0,54.59,1.469,78.946,4.395
		c24.357,2.932,45.209,7.327,62.57,13.185c33.031,11.464,58.511,28.471,76.428,51.018
		C448.402,91.83,457.367,120.176,457.367,154.313z M195.329,235.713c23.517,0,43.463-0.956,59.84-2.866
		c16.377-1.911,30.164-4.777,41.363-8.599c20.714-7.129,35.065-16.875,43.042-29.235c7.979-12.354,11.969-26.56,11.969-42.611
		c0-13.757-3.149-25.921-9.448-36.496c-6.3-10.569-17.006-18.917-32.125-25.032c-9.802-4.073-22.117-7.07-36.953-8.981
		c-14.843-1.911-33.175-2.866-55.011-2.866h-73.488v156.686H195.329z"/>
</g>
</svg>
`;
