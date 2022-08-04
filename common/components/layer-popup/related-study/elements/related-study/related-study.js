import { createElementFromHTML } from "../../../../../utils/dom/CreateElementFromHTML.js";
import { setOnMouseDragListener } from "../../../../../utils/events/EventListener.js";
import { BaseElement } from "../../../../base/base-element.js";
import { LayerPopup } from "../../../base/js/layer-popup.js";
import { Selectors } from "../../common/index.js";
import { DataGrid } from "../data-grid/data-grid.js";
import { UserInfo } from "../user-info/user-info.js";
import { getViewModel } from "./related-study.vm.js";

const { fromEvent } = rxjs;

const $root = createElementFromHTML(
  `
<div class="${Selectors.Root} irapha-layer-popup">
  <div class="${Selectors.Inner}">
    <div class="${Selectors.Header}">
      <button class="${Selectors.CloseButton}" uk-close></button>
    </div>
  </div>
</div>
`
);

export class RelatedStudyLayerPopup extends BaseElement {
  #open$;

  #vm = getViewModel();

  constructor({ open$ }) {
    super({ $element: $root });

    this.#open$ = open$;
    this.#init();
  }

  // private
  #init() {
    new LayerPopup({ $element: $root, open$: this.#open$ });

    this.#initUserInfo();
    this.#initDataGrid();
    this.#initCloseButton();
    this.#initMouseDrag();
  }

  #initUserInfo() {
    const { $header } = useElements();
    const { currentStudy$ } = this.#vm;

    const $userInfo = new UserInfo({ currentStudy$ }).getEl();
    $header.appendChild($userInfo);
  }

  #initDataGrid() {
    const { $inner } = useElements();
    const { studyInfoList$ } = this.#vm;

    const $dataGrid = new DataGrid({ studyInfoList$ }).getEl();
    $inner.appendChild($dataGrid);
  }

  #initCloseButton() {
    const { $closeButton } = useElements();
    const open$ = this.#open$;

    fromEvent($closeButton, "click").subscribe(() => open$.next(null));
  }

  // mouse drag
  #initMouseDrag() {
    const { $header } = useElements();

    setOnMouseDragListener({
      emitter: $header,
      dragCallback: ({ event }) => this.#handleMouseDrag(event),
    });
  }

  #handleMouseDrag(event) {
    const rect = this.getEl().getBoundingClientRect();
    const style = this.getEl().style;

    style.top = `${rect.top + event.movementY}px`;
    style.bottom = "unset";
    style.left = `${rect.left + event.movementX}px`;
    style.right = "unset";
  }
}

// =================================================================
const useElements = () => {
  const $header = $root.querySelector(`.${Selectors.Header}`);
  const $inner = $root.querySelector(`.${Selectors.Inner}`);
  const $closeButton = $root.querySelector(`.${Selectors.CloseButton}`);

  return {
    $header,
    $inner,
    $closeButton,
  };
};
