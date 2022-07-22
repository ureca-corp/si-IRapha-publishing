import { Selectors } from "../../common/index.js";

const rx = rxjs;
const uk = UIkit;

export class TabMenus {
  #$root;

  constructor({ $element }) {
    this.#$root = $element;

    this.#initCidIcon();
    this.#initRelatedStudyIcon();
    this.#initCloseIcon();
  }

  #initCidIcon() {
    const $cidIcon = this.#$root.querySelector(`.${Selectors.CID}`);
    $cidIcon.setAttribute("title", "Show CID Data");
    uk.icon($cidIcon, { icon: "tag" });

    rx.fromEvent($cidIcon, "click").subscribe((e) => {
      alert("Todo: show CID Popup");
    });
  }

  #initRelatedStudyIcon() {
    const $rsIcon = this.#$root.querySelector(`.${Selectors.RelatedStudy}`);
    $rsIcon.setAttribute("title", "Show Related Study Data");
    uk.icon($rsIcon, { icon: "link" });

    rx.fromEvent($rsIcon, "click").subscribe((e) =>
      window.store.relatedStudyOpen$.next({ x: e.clientX, y: e.clientY })
    );
  }

  #initCloseIcon() {
    const $closeIcon = this.#$root.querySelector(`.${Selectors.CloseIcon}`);
    $closeIcon.setAttribute("title", "Close Tab");
    uk.icon($closeIcon, { icon: "close" });

    rx.fromEvent($closeIcon, "click").subscribe((e) => {
      alert("Todo: close this tab");
    });
  }
}
