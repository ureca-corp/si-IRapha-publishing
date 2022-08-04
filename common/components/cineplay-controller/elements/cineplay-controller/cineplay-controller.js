import { Selectors } from "../../common/index.js";
import {
  ArrowPlayIcon,
  ArrowSkipNextIcon,
  ArrowSkipPrevIcon,
  ArrowLeftDoubleIcon,
  ArrowRightDoubleIcon,
  MarkStartAIcon,
  MarkEndBIcon,
} from "../../../icons/index.js";
import { BaseElement } from "../../../base/base-element.js";
import { createElementFromHTML } from "../../../../utils/dom/index.js";

const { BehaviorSubject, fromEvent } = rxjs;

const Template = `
<div class="${Selectors.CinePlayController}"></div>
`;

export class CinePlayController extends BaseElement {
  constructor({ isHideController$ }) {
    super({ $element: createElementFromHTML(Template) });
    this.#init();

    isHideController$?.subscribe((isHideController) =>
      this.#handleHideControllerChange(isHideController)
    );
  }

  // private
  #init() {
    const $root = this.getEl();
    $root.append(...[createProgressBar(), createControl()]);
  }

  // handlers
  #handleHideControllerChange(isHideController) {
    const rootStyle = this.getEl().style;

    isHideController
      ? (rootStyle.display = "none")
      : (rootStyle.display = "flex");
  }
}

// =========================================================================

// Progress bar
const createProgressBar = () => {
  const min = 0;
  const max = 100;
  const value = 30;

  return createElementFromHTML(
    `
    <progress 
      class="${Selectors.Progress} ${Selectors.UkProgress}"
      min="${min}"
      max="${max}"
      value="${value}"
    />
    `
  );
};

// Control Container
const createControl = () => {
  const $control = createElementFromHTML(
    `<div class="${Selectors.Wrapper}"></div>`
  );

  $control.append(
    ...[
      createControllerPlayType(),
      createControllerNav(),
      createFpsBox(),
      createLoopBox(),
    ]
  );

  return $control;
};

// PlayType Selector
const createControllerPlayType = () => {
  const $select = createElementFromHTML(
    `<select class="${Selectors.PlayType} ${Selectors.UkSelect}"></select>`
  );

  const items = ["Loop", "Yoyo"];
  const $options = items.map((it) =>
    createElementFromHTML(`<option value="${it}">${it}</option>`)
  );

  $select.append(...$options);

  // TODO PlayType Change
  fromEvent($select, "change").subscribe((e) =>
    alert(`Todo ${e.target.value}`)
  );

  return $select;
};

// 재생 컨트롤 박스
const createControllerNav = () => {
  const $nav = createElementFromHTML(`<ul class="${Selectors.Nav}"></ul>`);

  // TODO Skip Prev
  const $skipPrevIcon = new ArrowSkipPrevIcon({
    element: document.createElement("li"),
    onClick: () => alert("Todo Skip Prev"),
  }).getEl();

  // TODO Skip Next
  const $skipNextIcon = new ArrowSkipNextIcon({
    element: document.createElement("li"),
    onClick: () => alert("Todo Skip Next"),
  }).getEl();

  // TODO Play
  const $playIcon = new ArrowPlayIcon({
    element: document.createElement("li"),
    onClick: () => alert("Todo Play"),
  }).getEl();

  // TODO Left Double
  const $leftDoubleIcon = new ArrowLeftDoubleIcon({
    element: document.createElement("li"),
    onClick: () => alert("Todo Left Double"),
  }).getEl();

  // TODO Right Double
  const $rightDoubleIcon = new ArrowRightDoubleIcon({
    element: document.createElement("li"),
    onClick: () => alert("Todo Right Double"),
  }).getEl();

  $nav.append(
    ...[
      $skipPrevIcon,
      $leftDoubleIcon,
      $playIcon,
      $rightDoubleIcon,
      $skipNextIcon,
    ]
  );

  return $nav;
};

// FPS Box
const createFpsBox = () => {
  const $fpsBox = createElementFromHTML(
    `
    <div class="${Selectors.FpsBox}">
      <div class="${Selectors.FpsBoxInputWrapper}">
        <span class="${Selectors.UkFormIcon}">FPS</span>
        <input class="${Selectors.UkInput}" type="number" />
      </div>

      <div class="${Selectors.FpsBoxFrameCount}">
        32 / 91
      </div>
    </div>
    `
  );

  return $fpsBox;
};

// Loop Control Box
const createLoopBox = () => {
  const isMarked$ = new BehaviorSubject(false);
  const toggleInMark = () => isMarked$.next(!isMarked$.getValue());
  const resetInMark = () => isMarked$.next(false);

  const $loopBox = createElementFromHTML(
    `<div class="${Selectors.LoopBox}"></div>`
  );

  const loopBoxItemTemplate = `
  <div class="${Selectors.LoopBoxItem}"></div>
  `;

  const $markStartWrapper = createElementFromHTML(loopBoxItemTemplate);
  const $markEndWrapper = createElementFromHTML(loopBoxItemTemplate);

  $markStartWrapper.appendChild(
    new MarkStartAIcon({
      options: { events: { onClick: () => toggleInMark() } },
    }).getEl()
  );

  $markEndWrapper.appendChild(
    new MarkEndBIcon({
      options: { events: { onClick: () => resetInMark() } },
    }).getEl()
  );

  //
  $loopBox.append(...[$markStartWrapper, $markEndWrapper]);

  isMarked$.subscribe((isMarked) =>
    $markStartWrapper.setAttribute("marked", isMarked)
  );

  return $loopBox;
};
