import { SubMenu } from "../../../../sub-menu/index.js";
import { BaseMenuItem } from "../../base/base-menu-item.js";
import {
  DisplayLayoutTypeAMenu,
  DisplayLayoutTypeBMenu,
  DisplayLayoutTypeCMenu,
  DisplayLayoutTypeDMenu,
  DisplayLayoutTypeEMenu,
  DisplayLayoutTypeFMenu,
  DisplayLayoutTypeGMenu,
  DisplayLayoutTypeHMenu,
  DisplayLayoutTypeIMenu,
  DisplayLayoutTypeJMenu,
  DisplayLayoutTypeKMenu,
  DisplayLayoutTypeLMenu,
  DisplayLayoutTypeMMenu,
  DisplayLayoutTypeNMenu,
} from "./index.js";

export class DisplayExtendLayoutMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Extend Layout",
        name: "Extend Layout",
        icon: svgIcon,
      },
      options: {
        horizontal: true,
        hidableName: false,
      },
    });

    const $subMenu = new SubMenu({
      subMenuItems: [
        new DisplayLayoutTypeAMenu(),
        new DisplayLayoutTypeBMenu(),
        new DisplayLayoutTypeCMenu(),
        new DisplayLayoutTypeDMenu(),

        new DisplayLayoutTypeEMenu(),
        new DisplayLayoutTypeFMenu(),
        new DisplayLayoutTypeGMenu(),
        new DisplayLayoutTypeHMenu(),

        new DisplayLayoutTypeIMenu(),
        new DisplayLayoutTypeJMenu(),
        new DisplayLayoutTypeKMenu(),
        new DisplayLayoutTypeLMenu(),

        new DisplayLayoutTypeMMenu(),
        new DisplayLayoutTypeNMenu(),
      ],
      options: { isLayoutColumnTwo: true },
    }).getEl();

    UIkit.drop($subMenu);

    this.getEl().appendChild($subMenu);
  }
}

const svgIcon = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 0C0.447715 0 0 0.447716 0 1V23C0 23.5523 0.447716 24 1 24H23C23.5523 24 24 23.5523 24 23V1C24 0.447715 23.5523 0 23 0H1ZM14.7344 17C15.2392 17 15.6484 16.5908 15.6484 16.0859V16.0859C15.6484 15.5811 15.2392 15.1719 14.7344 15.1719H11.3594C10.8071 15.1719 10.3594 14.7242 10.3594 14.1719V13.0391C10.3594 12.4868 10.8071 12.0391 11.3594 12.0391H13.9687C14.4606 12.0391 14.8594 11.6403 14.8594 11.1484V11.1484C14.8594 10.6566 14.4606 10.2578 13.9687 10.2578H11.3594C10.8071 10.2578 10.3594 9.8101 10.3594 9.25781V8.46094C10.3594 7.90865 10.8071 7.46094 11.3594 7.46094H14.7227C15.2296 7.46094 15.6406 7.04995 15.6406 6.54297V6.54297C15.6406 6.03599 15.2296 5.625 14.7227 5.625H10.3594H9.59375H9.01562C8.46334 5.625 8.01562 6.07272 8.01562 6.625V16C8.01562 16.5523 8.46334 17 9.01562 17H9.59375H10.3594H14.7344Z" fill="#1E78BE"/>
</svg>
`;
