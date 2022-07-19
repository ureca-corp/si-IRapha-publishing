import { LayoutAttributeType } from "../../../../../../dicom-window/common/index.js";

const rx = rxjs;

export class DisplayLayoutOneByTwo {
  constructor({ element }) {
    rx.fromEvent(element, "click").subscribe(() =>
      this.#mutateDicomWindowLayout()
    );
  }

  #mutateDicomWindowLayout() {
    window.store.dicomWindowLayout$.next({
      layout: LayoutAttributeType.OneByTwo,
    });
  }
}
