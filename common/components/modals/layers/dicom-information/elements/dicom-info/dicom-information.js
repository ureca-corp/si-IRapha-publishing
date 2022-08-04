import { useMouseDragTracking } from "../../../../../../hooks/index.js";
import { createElementFromHTML } from "../../../../../../utils/dom/index.js";
import { Button, createSearchBar } from "../../../../../kit/index.js";
import { LayerPopupTemplate, PopupAppbar } from "../../../base/index.js";
import { Selectors } from "../../common/index.js";
import { DataGrid } from "../data-grid/data-grid.js";
import { getViewModel } from "./dicom-information.vm.js";

function Inner() {
  return createElementFromHTML(`
    <div class="${Selectors.Inner}">
      <div class="${Selectors.SearchBar}"></div>
      
      <div class="${Selectors.DataGrid}">
        <div class="${Selectors.DataGridCaptions}">
          <span class="${Selectors.DataGridTotal}">Total 0</span>
        </div>
      </div>
    </div>
  `);
}

function Footer() {
  return createElementFromHTML(`<div class="${Selectors.Footer}"></div>`);
}

export class DicomInformationLayerPopup extends LayerPopupTemplate {
  #vm = getViewModel();

  #$inner;
  #$footer;

  #open$;

  constructor() {
    const open$ = window.store.dicomInformationsOpen$;
    const $inner = new Inner();
    const $footer = new Footer();

    const $popupAppbar = new PopupAppbar({
      title: "Dicom Information",
      onClose: () => this.#handleClose(),
    }).getEl();

    super({
      open$,
      $top: $popupAppbar,
      $body: $inner,
      $bottom: $footer,
    });

    this.#$inner = $inner;
    this.#$footer = $footer;
    this.#open$ = open$;

    useMouseDragTracking({ $emitter: $popupAppbar, $target: this.getEl() });

    this.#init();
  }

  #init() {
    this.#initSearchBar();
    this.#initDataGrid();
    this.#initFooter();
  }

  #initSearchBar() {
    const { $searchWrapper } = this.#getElements();

    $searchWrapper.appendChild(
      createSearchBar({
        onSubmit: () => alert("submit"),
        onChange: (e) => console.log(e.target.value),
      })
    );
  }

  #initDataGrid() {
    const { $dataGridWrapper, $dataGridTotal } = this.#getElements();

    const { dicomInfoList$ } = this.#vm;

    const $dataGrid = new DataGrid({ dicomInfoList$ }).getEl();
    $dataGridWrapper.prepend($dataGrid);

    dicomInfoList$.subscribe(
      (list) => ($dataGridTotal.innerHTML = `Total ${list.length}`)
    );
  }

  #initFooter() {
    this.#$footer.appendChild(
      new Button({
        label: "Close",
        variant: "outlined",
        onClick: () => this.#handleClose(),
      })
    );
  }

  #handleClose() {
    this.#open$.next(null);
  }

  #getElements() {
    const $inner = this.#$inner;

    const $searchWrapper = $inner.querySelector(`.${Selectors.SearchBar}`);
    const $dataGridWrapper = $inner.querySelector(`.${Selectors.DataGrid}`);
    const $dataGridTotal = $dataGridWrapper.querySelector(
      `.${Selectors.DataGridTotal}`
    );

    return {
      $searchWrapper,
      $dataGridWrapper,
      $dataGridTotal,
    };
  }
}
