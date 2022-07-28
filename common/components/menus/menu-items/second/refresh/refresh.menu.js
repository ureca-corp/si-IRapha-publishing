import { BaseMenuItem } from "../../base/base-menu-item.js";

export class RefreshMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Refresh",
        name: "Refresh",
        icon: svgIcon,
      },
      options: { outlined: true },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<g id="레이어_9">
	<path fill="#1E78BE" d="M308.43,0.911H103.954C75.785,0.983,52.998,23.86,53.033,52.031v408.953
		c-0.036,28.146,22.711,51.01,50.856,51.12h306.78c28.188-0.108,51.011-22.933,51.12-51.12V154.269L308.43,0.911z M257.312,409.864
		c-50.797-0.05-96.749-30.158-117.079-76.711h43.667c28.191,40.696,84.035,50.835,124.731,22.645
		c40.697-28.189,50.835-84.034,22.645-124.73c-28.189-40.698-84.033-50.836-124.731-22.645
		c-11.999,8.312-21.788,19.431-28.515,32.386l40.896,40.896H116.685V179.796l32.979,32.98
		c38.324-59.205,117.387-76.133,176.592-37.81c59.204,38.323,76.132,117.387,37.81,176.59
		C340.618,387.782,300.463,409.715,257.312,409.864z"/>
</g>
</svg>
`;
