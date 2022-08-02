import { createElementFromHTML } from "../../../../../utils/dom/CreateElementFromHTML.js";
import { createSearchBar } from "../../../../kit/index.js";
import { DraggablePopup } from "../../../base/index.js";
import { DataGrid } from "../data-grid/data-grid.js";
import { Selectors } from "../../common/index.js";

const rx = rxjs;

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
  #dicomInfoList$ = new rx.BehaviorSubject(dicomInfoListDummyData);

  constructor() {
    super({
      open$: window.store.dicomInformationsOpen$,
      $children: $inner,
    });

    this.#init();
  }

  #init() {
    this.#initSearchBar();
    this.#initDataGrid();
    this.#initFooter();
  }

  #initSearchBar() {
    const $searchWrapper = $inner.querySelector(`.${Selectors.SearchBar}`);

    $searchWrapper.appendChild(
      createSearchBar({
        onSubmit: () => alert("submit"),
        onChange: (e) => console.log(e.target.value),
      })
    );
  }

  #initDataGrid() {
    const $dataGridWrapper = $inner.querySelector(`.${Selectors.DataGrid}`);

    const dataGrid = new DataGrid({ dicomInfoList$: this.#dicomInfoList$ });
    $dataGridWrapper.prepend(dataGrid.getEl());

    const $total = $dataGridWrapper.querySelector(
      `.${Selectors.DataGridTotal}`
    );

    this.#dicomInfoList$.subscribe((it) => {
      $total.innerHTML = `Total ${it.length}`;
    });
  }

  #initFooter() {
    const $footer = $inner.querySelector(`.${Selectors.Footer}`);
    const $closeButton = $footer.querySelector(`.${Selectors.CloseButton}`);

    rx.fromEvent($closeButton, "click").subscribe(() => alert("Todo close"));
  }
}

// dummy data
const dicomInfoListDummyData = Array.from({ length: 40 }, (_, index) => ({
  id: index + 1,
  tag: "(0002, 0001)",
  name: "FileMetaInformationsFileMetaInformationsFileMetaInformationsFileMetaInformationsFileMetaInformationsFileMetaInformations",
  vr: "OB",
  length: "0",
  value:
    "123132131321312321321312321213211231321313213123213213123212132112313213132131232132131232121321",
}));
