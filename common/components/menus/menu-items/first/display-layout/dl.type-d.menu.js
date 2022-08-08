import { LayoutAttributeType } from "../../../../dicom-window/index.js";
import { BaseMenuItem } from "../../base/base-menu-item.js";

const { fromEvent } = rxjs;

export class DisplayLayoutTypeDMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Type-D",
        name: "Type-D",
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
      layout: LayoutAttributeType.D,
    });
  }
}

const svgIcon = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2" y="2" width="20" height="9" rx="1" fill="#1E78BE"/>
<rect x="2" y="13" width="9" height="9" rx="1" fill="#1E78BE"/>
<rect x="13" y="13" width="9" height="9" rx="1" fill="#1E78BE"/>
</svg>
`;
