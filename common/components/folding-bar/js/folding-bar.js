import { ToggleExpandIcon } from "../../toggle-expand-icon1/index.js";

const rx = rxjs;

const Selectors = {
  ToggleIcon: "irapha-toggle-expand",

  LayoutColumn: "--layout-column",
  ShrinkVertical: "--shrink-v",
  ShrinkHorizontal: "--shrink-h",
};

const ShrinkDirection = {
  Vertical: "vertical",
  Horizontal: "horizontal",
};

export class FoldingBar {
  #root;

  #isLayoutColumn$;
  #isExpanded$;
  #isPreview$;
  #shrinkDirection$;

  constructor({
    element,
    isLayoutColumn$,
    isExpanded$,
    isPreview$,
    shrinkDirection$,
  }) {
    this.#root = element;

    this.#initStates({
      isLayoutColumn$,
      isExpanded$,
      isPreview$,
      shrinkDirection$,
    });
    this.#initMouseEvent();

    new ToggleExpandIcon({
      element: this.#root.querySelector(`.${Selectors.ToggleIcon}`),
      isExpanded$: this.#isExpanded$,
      onClick: () => this.#toggle(),
    });
  }

  // private
  #initStates({ isLayoutColumn$, isExpanded$, isPreview$, shrinkDirection$ }) {
    isLayoutColumn$.subscribe((isLayoutColumn) =>
      this.#handleLayoutChange(isLayoutColumn)
    );
    this.#isLayoutColumn$ = isLayoutColumn$;

    shrinkDirection$.subscribe((shrinkDirection) =>
      this.#handleShrinkDirectionChange(shrinkDirection)
    );
    this.#shrinkDirection$ = shrinkDirection$;

    isExpanded$.subscribe((isExpanded) => this.#handleExpanded(isExpanded));
    this.#isExpanded$ = isExpanded$;

    this.#isPreview$ = isPreview$;
  }

  #initMouseEvent() {
    // 마우스 호버 시 임시로 보이기
    rx.fromEvent(this.#root, "mouseenter").subscribe(() => {
      if (this.#isPreview$.getValue()) return this.#isExpanded$.next(false);
    });

    // 마우스 호버 벗어나면 원상태 복귀
    rx.fromEvent(this.#root, "mouseleave").subscribe(() => {
      const old = this.#isExpanded$.getValue();

      if (this.#isPreview$.getValue()) return this.#setExpand(!old);
    });
  }

  // handler
  #handleLayoutChange(isLayoutColumn) {
    if (isLayoutColumn) return this.#layoutColumn();

    return this.#resetLayout();
  }

  #handleExpanded(isExpanded) {
    if (!isExpanded) return this.#setShrinkDirection(null);

    if (!this.#isLayoutColumn$.getValue())
      return this.#setShrinkDirection(ShrinkDirection.Vertical);

    return this.#setShrinkDirection(ShrinkDirection.Horizontal);
  }

  #handleShrinkDirectionChange(shrinkDirection) {
    if (shrinkDirection === ShrinkDirection.Vertical)
      return this.#shrinkVertical();

    if (shrinkDirection === ShrinkDirection.Horizontal)
      return this.#shrinkHorizontal();

    return this.#resetShrinkState();
  }

  // layout control
  #layoutColumn() {
    this.#root.classList.add(Selectors.LayoutColumn);
  }

  #resetLayout() {
    this.#root.classList.remove(Selectors.LayoutColumn);
  }

  // shrink control
  #shrinkVertical() {
    this.#root.classList.add(Selectors.ShrinkVertical);
  }

  #shrinkHorizontal() {
    this.#root.classList.add(Selectors.ShrinkHorizontal);
  }

  #resetShrinkState() {
    this.#root.classList.remove(Selectors.ShrinkVertical);
    this.#root.classList.remove(Selectors.ShrinkHorizontal);
  }

  #setShrinkDirection(shrinkDirection) {
    this.#shrinkDirection$.next(shrinkDirection);
  }

  // set states
  #setExpand(isExpanded) {
    this.#isExpanded$.next(isExpanded);
  }

  #toggle() {
    const isPreview = this.#isPreview$.getValue();

    if (!isPreview) {
      this.#isExpanded$.next(!this.#isExpanded$.getValue());
    }

    this.#isPreview$.next(!isPreview);
  }
}
