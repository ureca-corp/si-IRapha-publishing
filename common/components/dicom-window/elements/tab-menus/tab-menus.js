import { createElementFromHTML } from "../../../../utils/dom/index.js";
import { BaseElement } from "../../../base/index.js";

const { fromEvent } = rxjs;

const Selectors = {
  Menus: "irapha-dicom-window__tab-content__menus",
  CID: "irapha-dicom-window__tab-content__menus__cid",
  RelatedStudy: "irapha-dicom-window__tab-content__menus__rs",
  Closeicon: "irapha-dicom-window__tab-content__menus__close",
};

export class TabMenus extends BaseElement {
  constructor() {
    super({ $element: new TabMenusComp() });

    this.getEl().append(
      ...[new CidIcon(), new RelatedStudyIcon(), new CloseIcon()]
    );
  }
}

// =================================================================
function TabMenusComp() {
  return createElementFromHTML(`<ul class="${Selectors.Menus}"</ul>`);
}

function CidIcon() {
  const $cidIcon = createElementFromHTML(`
    <li 
      class="${Selectors.CID}"
      title="Show CID Data"
      uk-icon="tag"
    ></li>
  `);

  fromEvent($cidIcon, "click").subscribe(() => window.openCidWindow());

  return $cidIcon;
}

function RelatedStudyIcon() {
  const $rsIcon = createElementFromHTML(`
  <li 
    class="${Selectors.RelatedStudy}"
    title="Show Related Study Data"
    uk-icon="link"
  ></li>
`);

  fromEvent($rsIcon, "click").subscribe((e) =>
    window.store.relatedStudyOpen$.next({ x: e.clientX, y: e.clientY })
  );

  return $rsIcon;
}

function CloseIcon() {
  const $closeIcon = createElementFromHTML(`
  <li 
    class="${Selectors.CID}"
    title="Close Tab"
    uk-icon="close"
  ></li>
`);

  fromEvent($closeIcon, "click").subscribe((e) => {
    alert("Todo: close this tab");
  });

  return $closeIcon;
}
