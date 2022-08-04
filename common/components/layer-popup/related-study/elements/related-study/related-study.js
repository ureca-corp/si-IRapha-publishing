import { useMouseDragTracking } from "../../../../../hooks/index.js";
import { createElementFromHTML } from "../../../../../utils/dom/index.js";
import { LayerPopupTemplate } from "../../../base/index.js";
import { Selectors } from "../../common/index.js";
import { DataGrid } from "../data-grid/data-grid.js";
import { UserInfo } from "../user-info/user-info.js";
import { getViewModel } from "./related-study.vm.js";

const { fromEvent } = rxjs;

function HeaderComp() {
  return createElementFromHTML(`
  <div class="${Selectors.Header}">
    <button class="${Selectors.CloseButton}" uk-close></button>
  </div>
  `);
}

function InnerComp() {
  return createElementFromHTML(`<div class="${Selectors.Inner}"></div>`);
}

export class RelatedStudyLayerPopup extends LayerPopupTemplate {
  #vm = getViewModel();

  #$header;
  #$inner;

  #open$;

  constructor({ open$ }) {
    const $header = new HeaderComp();
    const $inner = new InnerComp();

    super({
      open$,
      $top: $header,
      $body: $inner,
    });

    this.#$header = $header;
    this.#$inner = $inner;

    this.#open$ = open$;

    useMouseDragTracking({ $emitter: $header, $target: this.getEl() });

    this.#init();
  }

  // private
  #init() {
    this.#initUserInfo();
    this.#initDataGrid();
    this.#initCloseIcon();
  }

  #initUserInfo() {
    const $header = this.#$header;

    const { currentStudy$ } = this.#vm;

    const $userInfo = new UserInfo({ currentStudy$ }).getEl();
    $header.appendChild($userInfo);
  }

  #initDataGrid() {
    const $inner = this.#$inner;
    const { studyInfoList$ } = this.#vm;

    const $dataGrid = new DataGrid({ studyInfoList$ }).getEl();
    $inner.appendChild($dataGrid);
  }

  #initCloseIcon() {
    const { $closeIcon } = this.#getElements();
    const open$ = this.#open$;

    fromEvent($closeIcon, "click").subscribe(() => open$.next(null));
  }

  #getElements() {
    const $header = this.#$header;
    const $closeIcon = $header.querySelector(`.${Selectors.CloseButton}`);

    return {
      $closeIcon,
    };
  }
}
