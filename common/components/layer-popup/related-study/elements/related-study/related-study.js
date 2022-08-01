import { LayerPopup } from "../../../base/js/layer-popup.js";
import { setOnMouseDragListener } from "../../../../../utils/events/EventListener.js";
import { Selectors } from "../../common/index.js";
import { BaseElement } from "../../../../base/base-element.js";
import { createElementFromHTML } from "../../../../../utils/dom/CreateElementFromHTML.js";
import { UserInfo } from "../user-info/user-info.js";
import { DataGrid } from "../data-grid/data-grid.js";
import { fetchData } from "../../fetch-data.js";

const rx = rxjs;

const Template = `
  <div class="${Selectors.Root} irapha-layer-popup">
    <div class="${Selectors.Inner}">
      <div class="${Selectors.Header}">
        <button class="${Selectors.CloseButton}" uk-close></button>
      </div>
    </div>
  </div>
  `;

export class RelatedStudyLayerPopup extends BaseElement {
  #open$;

  #currentStudy$ = new rx.BehaviorSubject();
  #studyInfoList$ = new rx.BehaviorSubject([]);

  constructor({ open$ }) {
    super({ $element: createElementFromHTML(Template) });

    this.#open$ = open$;
    this.#init();
  }

  // private
  #init() {
    const $root = this.getEl();

    new LayerPopup({ $element: $root, open$: this.#open$ });

    this.#initUserInfo();
    this.#initDataGrid();
    this.#initCloseButton();
    this.#initMouseDrag();

    this.#initStates();
  }

  #initUserInfo() {
    const $header = this.getEl().querySelector(`.${Selectors.Header}`);

    const userInfo = new UserInfo({ currentStudy$: this.#currentStudy$ });
    $header.appendChild(userInfo.getEl());
  }

  #initDataGrid() {
    const $inner = this.getEl().querySelector(`.${Selectors.Inner}`);

    const dataGrid = new DataGrid({ studyInfoList$: this.#studyInfoList$ });
    $inner.appendChild(dataGrid.getEl());
  }

  #initCloseButton() {
    const $closeBtn = this.getEl().querySelector(`.${Selectors.CloseButton}`);

    rx.fromEvent($closeBtn, "click").subscribe(() => this.#open$.next(null));
  }

  // mouse drag
  #initMouseDrag() {
    const $dragArea = this.getEl().querySelector(`.${Selectors.TopArea}`);

    setOnMouseDragListener({
      emitter: $dragArea,
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

  // states
  #initStates() {
    this.#open$.subscribe(() => this.#initData());
  }

  // data
  #initData() {
    const { data } = fetchData();
    const { studyInfoList } = data;

    this.#currentStudy$.next(studyInfoList[0]);
    this.#studyInfoList$.next(studyInfoList);
  }
}
