import { LayoutAttributeType } from "../../../../dicom-window/index.js";
import { BaseMenuItem } from "../../base/base-menu-item.js";

const { fromEvent } = rxjs;

export class DisplayLayoutTypeHMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Type-H",
        name: "Type-H",
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
      layout: LayoutAttributeType.H,
    });
  }
}

const svgIcon = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2" y="2" width="20" height="9" rx="1" fill="#1E78BE"/>
<rect x="2" y="13" width="5" height="9" rx="1" fill="#1E78BE"/>
<rect x="17" y="13" width="5" height="9" rx="1" fill="#1E78BE"/>
<rect x="9" y="13" width="6" height="9" rx="1" fill="#1E78BE"/>
</svg>
`;
