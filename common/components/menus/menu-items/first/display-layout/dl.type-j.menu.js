import { LayoutAttributeType } from "../../../../dicom-window/index.js";
import { BaseMenuItem } from "../../base/base-menu-item.js";

const { fromEvent } = rxjs;

export class DisplayLayoutTypeJMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Type-J",
        name: "Type-J",
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
      layout: LayoutAttributeType.J,
    });
  }
}

const svgIcon = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="14" y="2" width="8" height="20" rx="1" fill="#1E78BE"/>
<rect x="2" y="2" width="4" height="9" rx="1" fill="#1E78BE"/>
<rect x="2" y="13" width="4" height="9" rx="1" fill="#1E78BE"/>
<rect x="8" y="13" width="4" height="9" rx="1" fill="#1E78BE"/>
<rect x="8" y="2" width="4" height="9" rx="1" fill="#1E78BE"/>
</svg>
`;
