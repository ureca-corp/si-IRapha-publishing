import { createElementFromHTML } from "../../../../../utils/dom/CreateElementFromHTML.js";
import { createSearchBar } from "../../../../kit/index.js";
import { DraggablePopup } from "../../../base/index.js";
import { DataGrid } from "../data-grid/data-grid.js";
import { Selectors } from "../../common/index.js";
import { getViewModel } from "./dicom-information.vm.js";

const { fromEvent } = rxjs;

const $inner = createElementFromHTML(`
<div class="${Selectors.Inner}">
  <div class="${Selectors.SearchBar}"></div>
  
  <div class="${Selectors.DataGrid}">
    <div class="${Selectors.DataGridCaptions}">
      <span class="${Selectors.DataGridTotal}">Total 0</span>
    </div>
  </div>

  <div class="${Selectors.Footer}">
    <button class="${Selectors.CloseButton}">Close</button>
  </div>
</div>
`);

export class DicomInformationLayerPopup extends DraggablePopup {
  #vm = getViewModel();

  constructor() {
    super({
      open$: window.store.dicomInformationsOpen$,
      title: "Dicom Information",
      $children: $inner,
    });

    this.#init();
  }

  #init() {
    this.#initSearchBar();
    this.#initDataGrid();
    this.#initCloseButton();
  }

  #initSearchBar() {
    const { $searchWrapper } = useElements();

    $searchWrapper.appendChild(
      createSearchBar({
        onSubmit: () => alert("submit"),
        onChange: (e) => console.log(e.target.value),
      })
    );
  }

  #initDataGrid() {
    const { $dataGridWrapper, $dataGridTotal } = useElements();

    const { dicomInfoList$ } = this.#vm;

    const $dataGrid = new DataGrid({ dicomInfoList$ }).getEl();
    $dataGridWrapper.prepend($dataGrid);

    dicomInfoList$.subscribe(
      (list) => ($dataGridTotal.innerHTML = `Total ${list.length}`)
    );
  }

  #initCloseButton() {
    const { $closeButton } = useElements();

    fromEvent($closeButton, "click").subscribe(() => alert("Todo close"));
  }
}

// =================================================================
const useElements = () => {
  const $searchWrapper = $inner.querySelector(`.${Selectors.SearchBar}`);
  const $dataGridWrapper = $inner.querySelector(`.${Selectors.DataGrid}`);
  const $dataGridTotal = $dataGridWrapper.querySelector(
    `.${Selectors.DataGridTotal}`
  );

  const $footer = $inner.querySelector(`.${Selectors.Footer}`);
  const $closeButton = $footer.querySelector(`.${Selectors.CloseButton}`);

  return {
    $searchWrapper,
    $dataGridWrapper,
    $dataGridTotal,
    $closeButton,
  };
};
