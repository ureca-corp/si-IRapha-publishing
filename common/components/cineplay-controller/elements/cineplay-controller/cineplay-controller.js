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

const rx = rxjs;

export class CinePlayController {
  #root;

  constructor({ isHideController$ }) {
    this.#init();

    isHideController$?.subscribe((isHideController) =>
      this.#handleHideControllerChange(isHideController)
    );
  }

  // private
  #init() {
    this.#root = document.createElement("div");
    this.#root.classList.add(Selectors.CinePlayController);

    this.#initProgressbar();
    this.#initControl();
  }

  #initProgressbar() {
    const progress = document.createElement("progress");
    progress.classList.add(Selectors.Progress);
    progress.classList.add(Selectors.UkProgress);

    progress.setAttribute("min", 0);
    progress.setAttribute("max", 100);
    progress.setAttribute("value", 30);

    this.#root.append(progress);
  }

  #initControl() {
    const control = document.createElement("div");
    control.classList.add(Selectors.Wrapper);
    control.append(
      ...[
        createControllerPlayType(),
        createControllerNav(),
        createFpsBox(),
        createLoopBox(),
      ]
    );

    this.#root.append(control);
  }

  // handlers
  #handleHideControllerChange(isHideController) {
    if (isHideController) return (this.#root.style.display = "none");

    return (this.#root.style.display = "flex");
  }

  // public
  getDomElement() {
    return this.#root;
  }
}

// =========================================================================

// PlayType Selector
const createControllerPlayType = () => {
  const select = document.createElement("select");
  select.classList.add(Selectors.PlayType);
  select.classList.add(Selectors.UkSelect);

  const items = ["Loop", "Yoyo"];
  const options = items.map((it) => {
    const option = document.createElement("option");
    option.value = it;
    option.innerHTML = it;

    return option;
  });

  select.append(...options);

  return select;
};

// 재생 컨트롤 박스
const createControllerNav = () => {
  const nav = document.createElement("ul");
  nav.classList.add(Selectors.Nav);

  const skipPrevIcon = document.createElement("li");
  new ArrowSkipPrevIcon({ element: skipPrevIcon });

  const skipNextIcon = document.createElement("li");
  new ArrowSkipNextIcon({ element: skipNextIcon });

  const playIcon = document.createElement("li");
  new ArrowPlayIcon({ element: playIcon });

  const leftDoubleIcon = document.createElement("li");
  new ArrowLeftDoubleIcon({ element: leftDoubleIcon });

  const rightDoubleIcon = document.createElement("li");
  new ArrowRightDoubleIcon({ element: rightDoubleIcon });

  nav.append(
    ...[skipPrevIcon, leftDoubleIcon, playIcon, rightDoubleIcon, skipNextIcon]
  );

  return nav;
};

// FPS Box
const createFpsBox = () => {
  const fpsBox = document.createElement("div");
  fpsBox.classList.add(Selectors.FpsBox);

  fpsBox.innerHTML = `
    <div class="${Selectors.FpsBoxInputWrapper}">
      <span class="${Selectors.UkFormIcon}">FPS</span>
      <input class="${Selectors.UkInput}" type="number" />
    </div>

    <div class="${Selectors.FpsBoxFrameCount}">
      32 / 91
    </div>
  `;

  return fpsBox;
};

// Loop Control Box
const createLoopBox = () => {
  const isInMarked$ = new rx.BehaviorSubject(false);
  const toggleInMark = () => isInMarked$.next(!isInMarked$.getValue());
  const resetInMark = () => isInMarked$.next(false);

  const loopBox = document.createElement("div");
  loopBox.classList.add(Selectors.LoopBox);

  const aStartIcon = document.createElement("div");
  aStartIcon.classList.add(Selectors.LoopBoxItem);
  new MarkStartAIcon({ element: aStartIcon, onClick: () => toggleInMark() });

  const bEndIcon = document.createElement("div");
  bEndIcon.classList.add(Selectors.LoopBoxItem);
  new MarkEndBIcon({ element: bEndIcon, onClick: () => resetInMark() });

  //
  loopBox.append(...[aStartIcon, bEndIcon]);

  isInMarked$.subscribe((isInMarked) => {
    if (isInMarked) return aStartIcon.classList.add("--active");

    aStartIcon.classList.remove("--active");
  });

  return loopBox;
};
