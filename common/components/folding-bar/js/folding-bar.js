const rx = rxjs;

const Selectors = {
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
  #shrinkDirection$;

  constructor({ element }) {
    this.#root = element;

    this.#initStates();
  }

  #initStates() {
    const isLayoutColumn$ = new rx.BehaviorSubject();
    isLayoutColumn$.subscribe((isLayoutColumn) =>
      this.#handleLayoutChange(isLayoutColumn)
    );
    this.#isLayoutColumn$ = isLayoutColumn$;

    const isExpanded$ = new rx.BehaviorSubject();
    isExpanded$.subscribe((isExpanded) => this.#handleExpanded(isExpanded));
    this.#isExpanded$ = isExpanded$;

    const shrinkDirection$ = new rx.BehaviorSubject();
    shrinkDirection$.subscribe((shrinkDirection) =>
      this.#handleShrinkDirectionChange(shrinkDirection)
    );
    this.#shrinkDirection$ = shrinkDirection$;
  }

  // handler
  #handleLayoutChange(isLayoutColumn) {
    if (isLayoutColumn) {
      return this.#layoutColumn();
    }

    return this.#resetLayout();
  }

  #handleExpanded(isExpanded) {
    if (!isExpanded) {
      return this.#resetShrinkState();
    }

    if (!this.#isLayoutColumn$.getValue()) {
      return this.#setShrinkDirection(ShrinkDirection.Vertical);
    }

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

  // public
  setLayoutColumn(isLayoutColumn) {
    this.#isLayoutColumn$.next(isLayoutColumn);
  }

  setExpand(isExpanded) {
    this.#isExpanded$.next(isExpanded);
  }
}
