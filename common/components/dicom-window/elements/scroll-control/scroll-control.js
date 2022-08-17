import { createElementFromHTML } from "../../../../utils/dom/index.js";
import { BaseElement } from "../../../base/index.js";
import { ArrowDropUpIcon, ArrowDropDownIcon } from "../../../icons/index.js";

const { fromEvent, BehaviorSubject, map, tap } = rxjs;

const Selectors = {
  Root: "irapha-dicom-window__scroll-control-root",
  NavTopWrapper: "irapha-dicom-window__scroll-control__nav-top",
  NavBotWrapper: "irapha-dicom-window__scroll-control__nav-bottom",
  BarWrapper: "irapha-dicom-window__scroll-control__bar-wrapper",
  Bar: "irapha-dicom-window__scroll-control__bar",
};

export class DicomWindowScrollControl extends BaseElement {
  #maxStep = 0;
  #step$ = new BehaviorSubject(1);

  #wheelEvent$;

  constructor({ wheelEvent$, maxStep }) {
    super({ $element: new DicomWindowScrollControlComp() });
    this.#maxStep = maxStep;
    this.#wheelEvent$ = wheelEvent$;

    this.#init();
  }

  #init() {
    this.#initNav();
    this.#initActions();
  }

  #initNav() {
    const { $navTopWrapper, $navBotWrapper } = this.#getElements();
    const { increaseStepIfPossible, decreaseStepIfPossible } = useStep(
      this.#step$
    );

    $navTopWrapper.appendChild(
      new ArrowDropUpIcon({
        options: {
          size: "small",
          events: {
            onClick: () => decreaseStepIfPossible(),
          },
        },
      }).getEl()
    );
    $navBotWrapper.appendChild(
      new ArrowDropDownIcon({
        options: {
          size: "small",
          events: {
            onClick: () => increaseStepIfPossible(),
          },
        },
      }).getEl()
    );
  }

  #initActions() {
    const maxStep = this.#maxStep;
    const step$ = this.#step$;
    const wheelEvent$ = this.#wheelEvent$;

    const { $bar } = this.#getElements();

    const { increaseStepIfPossible, decreaseStepIfPossible } = useStep(step$);

    step$
      .pipe(
        map((step) => (100 / maxStep) * step),
        tap((height) => ($bar.style.height = `${height}%`))
      )
      .subscribe();

    wheelEvent$
      .pipe(
        map((e) => e.deltaY > 0),
        tap((isDown) => isDown && increaseStepIfPossible()),
        tap((isDown) => isDown || decreaseStepIfPossible())
      )
      .subscribe();
  }

  #getElements() {
    const $navTopWrapper = this.getElementByClassName(Selectors.NavTopWrapper);
    const $navBotWrapper = this.getElementByClassName(Selectors.NavBotWrapper);
    const $barWrapper = this.getElementByClassName(Selectors.BarWrapper);
    const $bar = this.getElementByClassName(Selectors.Bar);

    return {
      $navTopWrapper,
      $navBotWrapper,
      $barWrapper,
      $bar,
    };
  }
}

// =================================================================
function DicomWindowScrollControlComp() {
  return createElementFromHTML(`
  <div class="${Selectors.Root}">
    <div class="${Selectors.NavTopWrapper}"></div>
    <div class="${Selectors.BarWrapper}">
      <div class="${Selectors.Bar}"></div>
    </div>
    <div class="${Selectors.NavBotWrapper}"></div>
  </div>
  `);
}

const useStep = (step$) => {
  const isOverMaxStep = () => step$.getValue() >= 4;
  const isUnderMinStep = () => step$.getValue() <= 1;
  const increaseStep = () => step$.next(step$.getValue() + 1);
  const decreaseStep = () => step$.next(+step$.getValue() - 1);

  const increaseStepIfPossible = () => !isOverMaxStep() && increaseStep();
  const decreaseStepIfPossible = () => !isUnderMinStep() && decreaseStep();

  return {
    isOverMaxStep,
    isUnderMinStep,
    increaseStep,
    decreaseStep,
    increaseStepIfPossible,
    decreaseStepIfPossible,
  };
};
