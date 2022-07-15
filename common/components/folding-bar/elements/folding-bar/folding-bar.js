import { PinIcon } from "../../../icons/index.js";
import {
  Selectors,
  LayoutClassType,
  ShrinkClassType,
  ShrinkType,
} from "../../common/index.js";

const rx = rxjs;

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

    this.#initToggleIcon();
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
      console.log("ok");
      if (this.#isPreview$.getValue()) return this.#isExpanded$.next(false);
    });

    // 마우스 호버 벗어나면 원상태 복귀
    rx.fromEvent(this.#root, "mouseleave").subscribe(() => {
      const old = this.#isExpanded$.getValue();

      if (this.#isPreview$.getValue()) return this.#setExpand(!old);
    });
  }

  #initToggleIcon() {
    const toggleExpandIcon = this.#root.querySelector(
      `.${Selectors.ToggleIcon}`
    );

    if (!!toggleExpandIcon) {
      const isActive$ = new rx.BehaviorSubject();
      this.#isExpanded$.subscribe((isExpanded) => isActive$.next(!isExpanded));

      new PinIcon({
        element: this.#root.querySelector(`.${Selectors.ToggleIcon}`),
        isActive$: isActive$,
        onClick: () => this.#toggle(),
      });
    }
  }

  // handler
  #handleLayoutChange(isLayoutColumn) {
    if (isLayoutColumn) return this.#layoutColumn();

    return this.#resetLayout();
  }

  #handleExpanded(isExpanded) {
    if (!isExpanded) return this.#setShrinkDirection(null);

    if (!this.#isLayoutColumn$.getValue())
      return this.#setShrinkDirection(ShrinkType.Vertical);

    return this.#setShrinkDirection(ShrinkType.Horizontal);
  }

  #handleShrinkDirectionChange(shrinkDirection) {
    if (shrinkDirection === ShrinkType.Vertical) return this.#shrinkVertical();

    if (shrinkDirection === ShrinkType.Horizontal)
      return this.#shrinkHorizontal();

    return this.#resetShrinkState();
  }

  // layout control
  #layoutColumn() {
    this.#root.classList.add(LayoutClassType.Column);
  }

  #resetLayout() {
    this.#root.classList.remove(LayoutClassType.Column);
  }

  // shrink control
  #shrinkVertical() {
    this.#root.classList.add(ShrinkClassType.Column);
  }

  #shrinkHorizontal() {
    this.#root.classList.add(ShrinkClassType.Row);
  }

  #resetShrinkState() {
    this.#root.classList.remove(ShrinkClassType.Column);
    this.#root.classList.remove(ShrinkClassType.Row);
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
