import { BaseMenuItem } from "../../base/base-menu-item.js";

export class NaviInterStudyMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Inter Study",
        name: "Inter Study",
        icon: svgIcon,
      },
      options: { horizontal: true },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<line fill="none" stroke="#5A963C" stroke-width="30" stroke-miterlimit="10" x1="0" y1="318.462" x2="137.451" y2="318.462"/>
<line fill="none" stroke="#5A963C" stroke-width="30" stroke-miterlimit="10" x1="230.916" y1="318.462" x2="368.368" y2="318.462"/>
<line fill="none" stroke="#5A963C" stroke-width="30" stroke-miterlimit="10" x1="184.184" y1="134.346" x2="184.184" y2="271.73"/>
<line fill="none" stroke="#5A963C" stroke-width="30" stroke-miterlimit="10" x1="184.184" y1="365.262" x2="184.184" y2="502.646"/>
<line fill="none" stroke="#5A963C" stroke-width="30" stroke-miterlimit="10" x1="265.329" y1="126.981" x2="357.386" y2="126.981"/>
<line fill="none" stroke="#5A963C" stroke-width="30" stroke-miterlimit="10" x1="419.986" y1="126.981" x2="512.045" y2="126.981"/>
<line fill="none" stroke="#5A963C" stroke-width="30" stroke-miterlimit="10" x1="388.721" y1="6" x2="388.721" y2="96.25"/>
<line fill="none" stroke="#5A963C" stroke-width="30" stroke-miterlimit="10" x1="388.721" y1="157.712" x2="388.721" y2="248.03"/>
</svg>
`;
