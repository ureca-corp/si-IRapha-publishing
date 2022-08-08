import { LayoutAttributeType } from "../../../../dicom-window/index.js";
import { BaseMenuItem } from "../../base/base-menu-item.js";

const { fromEvent } = rxjs;

export class DisplayLayoutTypeLMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Type-L",
        name: "Type-L",
        icon: svgIcon,
      },
      options: {
        horizontal: true,
        hidableName: false,
      },
    });

    fromEvent(this.getEl(), "click").subscribe(() =>
      this.#mutateDicomWindowLayout()
    );
  }

  #mutateDicomWindowLayout() {
    window.store.dicomWindowLayoutMode$.next({
      layout: LayoutAttributeType.L,
    });
  }
}

const svgIcon = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2" y="14" width="20" height="8" rx="1" fill="#1E78BE"/>
<rect x="2" y="2" width="9" height="10" rx="1" fill="#1E78BE"/>
<rect x="13" y="8" width="9" height="4" rx="1" fill="#1E78BE"/>
<rect x="13" y="2" width="9" height="4" rx="1" fill="#1E78BE"/>
</svg>
`;
