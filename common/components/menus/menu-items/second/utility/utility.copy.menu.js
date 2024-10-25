import { BaseMenuItem } from "../../base/base-menu-item.js";

export class UtilityCopyMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Copy",
        name: "Copy",
        icon: svgIcon,
      },
      options: { horizontal: true, hidableName: false },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<g id="레이어_9">
	<path fill="#1E78BE" d="M356.995,1.188H77.767C52.083,1.287,31.287,22.084,31.188,47.766v325.808h46.579V47.766h279.229
		L356.995,1.188L356.995,1.188z M426.773,94.285H170.802c-25.556,0.131-46.261,20.781-46.458,46.337v325.749
		c-0.1,25.769,20.69,46.747,46.458,46.879h255.971c25.684-0.099,46.479-20.895,46.578-46.578V140.623
		C473.122,115.033,452.363,94.382,426.773,94.285z M426.773,466.911H170.802V140.623h255.971V466.911z"/>
	<g enable-background="new    ">
		<path fill="#1E78BE" d="M357.132,334.005l35.305,4.588c-3.858,24.334-13.731,43.383-29.62,57.146
			c-15.892,13.763-35.405,20.645-58.543,20.645c-28.99,0-52.294-9.476-69.912-28.425c-17.621-18.948-26.429-46.106-26.429-81.48
			c0-22.869,3.79-42.885,11.369-60.038c7.58-17.154,19.115-30.02,34.606-38.597c15.489-8.577,32.344-12.865,50.564-12.865
			c23.004,0,41.819,5.818,56.449,17.453c14.626,11.637,24.001,28.158,28.123,49.566l-34.904,5.386
			c-3.327-14.228-9.211-24.933-17.654-32.114c-8.446-7.181-18.649-10.771-30.616-10.771c-18.087,0-32.78,6.483-44.083,19.448
			c-11.304,12.965-16.955,33.479-16.955,61.535c0,28.458,5.452,49.137,16.356,62.032c10.902,12.9,25.133,19.349,42.686,19.349
			c14.095,0,25.862-4.32,35.306-12.965C348.619,365.255,354.604,351.956,357.132,334.005z"/>
	</g>
</g>
</svg>
`;
