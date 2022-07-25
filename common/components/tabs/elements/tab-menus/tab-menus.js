import { Selectors } from "../../common/index.js";
import { BaseElement } from "../../../base/index.js";
import { createElementFromHTML } from "../../../../utils/dom/index.js";

const rx = rxjs;

export class TabMenus extends BaseElement {
  static template = `
    <ul 
      class="${Selectors.Menus}"
    </ul>
  `;

  constructor() {
    super({ $element: createElementFromHTML(TabMenus.template) });

    this.getRootElement().append(
      ...[createCidIcon(), createRelatedStudyIcon(), createCloseIcon()]
    );
  }
}

// =================================================================
const createCidIcon = () => {
  const template = `
  <li 
    class="${Selectors.CID}"
    title="Show CID Data"
    uk-icon="tag"
  ></li>`;

  const $cidIcon = createElementFromHTML(template);

  rx.fromEvent($cidIcon, "click").subscribe((e) => {
    alert("Todo: show CID Popup");
  });

  return $cidIcon;
};

const createRelatedStudyIcon = () => {
  const template = `
    <li 
      class="${Selectors.RelatedStudy}"
      title="Show Related Study Data"
      uk-icon="link"
    ></li>
  `;

  const $rsIcon = createElementFromHTML(template);

  rx.fromEvent($rsIcon, "click").subscribe((e) =>
    window.store.relatedStudyOpen$.next({ x: e.clientX, y: e.clientY })
  );

  return $rsIcon;
};

const createCloseIcon = () => {
  const template = `
    <li 
      class="${Selectors.CID}"
      title="Close Tab"
      uk-icon="close"
    ></li>
  `;

  const $closeIcon = createElementFromHTML(template);

  rx.fromEvent($closeIcon, "click").subscribe((e) => {
    alert("Todo: close this tab");
  });

  return $closeIcon;
};
