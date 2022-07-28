import { createElementFromHTML } from "../../../../utils/dom/CreateElementFromHTML.js";
import { BaseElement } from "../../../base/base-element.js";
import { PinIcon } from "../../../icons/index.js";
import {
  Selectors,
  LayoutClassType,
  ShrinkClassType,
  ShrinkType,
} from "../../common/index.js";

const rx = rxjs;

/**
 * Constructor types
 *
 * @type element: Element
 *
 * @type isLayoutColumn$: BehaviorSubject<boolean>
 * 폴딩바 레이아웃 상태가 세로형태인지
 *
 * @type isPreview$: BehaviorSubject<boolean>
 * 현재 상태가 마우스 오버로 인해 프리뷰하고 있는지
 *
 * @type shrinkDirection$: BehaviorSubject<ShrinkType>
 * null이 아닌 경우 폴딩 상태를 의미, 접힌 방향 값을 가짐
 */
export class FoldingBar {
  #$root;

  #isLayoutColumn$;
  #isExpanded$;
  #isPreview$;
  #shrinkDirection$;

  constructor({
    $element,
    isLayoutColumn$,
    isExpanded$,
    isPreview$,
    shrinkDirection$,
  }) {
    this.#$root = $element;

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
    rx.fromEvent(this.#$root, "mouseenter").subscribe(() => {
      if (this.#isPreview$.getValue()) return this.#isExpanded$.next(false);
    });

    // 마우스 호버 벗어나면 원상태 복귀
    rx.fromEvent(this.#$root, "mouseleave").subscribe(() => {
      const old = this.#isExpanded$.getValue();

      if (this.#isPreview$.getValue()) return this.#setExpand(!old);
    });
  }

  #initToggleIcon() {
    const toggleExpandIcon = this.#$root.querySelector(
      `.${Selectors.ToggleIcon}`
    );

    if (!!toggleExpandIcon) {
      const isActive$ = new rx.BehaviorSubject();
      this.#isExpanded$.subscribe((isExpanded) => isActive$.next(!isExpanded));

      new PinIcon({
        element: this.#$root.querySelector(`.${Selectors.ToggleIcon}`),
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
    this.#$root.classList.add(LayoutClassType.Column);
  }

  #resetLayout() {
    this.#$root.classList.remove(LayoutClassType.Column);
  }

  // shrink control
  #shrinkVertical() {
    this.#$root.classList.add(ShrinkClassType.Column);
  }

  #shrinkHorizontal() {
    this.#$root.classList.add(ShrinkClassType.Row);
  }

  #resetShrinkState() {
    this.#$root.classList.remove(ShrinkClassType.Column);
    this.#$root.classList.remove(ShrinkClassType.Row);
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

const Template = `
<div class="irapha-folding-bar"></div>
`;

export class FoldingBar2 extends BaseElement {
  #states;

  #$children;

  constructor({ states, $children }) {
    super({ $element: createElementFromHTML(Template) });
    this.#states = states;
    this.#$children = $children;

    this.#init();
  }

  // private
  #init() {
    this.#initStates();
    this.#initMouseEvent();

    this.#initChildren();
  }

  #initStates() {
    const { isLayoutColumn$, isExpanded$, shrinkDirection$ } = this.#states;

    isLayoutColumn$.subscribe((isLayoutColumn) =>
      this.#handleLayoutChange(isLayoutColumn)
    );

    shrinkDirection$.subscribe((shrinkDirection) =>
      this.#handleShrinkDirectionChange(shrinkDirection)
    );

    isExpanded$.subscribe((isExpanded) => this.#handleExpanded(isExpanded));
  }

  #initMouseEvent() {
    const $root = this.getRootElement();
    const { isPreview$, isExpanded$ } = this.#states;

    const handleMouseEnter = () =>
      isPreview$.getValue() && isExpanded$.next(false);

    const handleMouseLeave = () =>
      isPreview$.getValue() && isExpanded$.next(!isExpanded$.getValue());

    // 마우스 호버 시 임시로 보이기
    rx.fromEvent($root, "mouseenter").subscribe(() => handleMouseEnter());

    // 마우스 호버 벗어나면 원상태 복귀
    rx.fromEvent($root, "mouseleave").subscribe(() => handleMouseLeave());
  }

  #initChildren() {
    const $root = this.getRootElement();
    const children = this.#$children;

    $root.appendChild(children);
  }

  // handler
  #handleLayoutChange(isLayoutColumn) {
    const $root = this.getRootElement();

    if (isLayoutColumn) return $root.classList.add(LayoutClassType.Column);

    return $root.classList.remove(LayoutClassType.Column);
  }

  #handleExpanded(isExpanded) {
    const { isLayoutColumn$, shrinkDirection$ } = this.#states;
    const isLayoutNotColumn = !isLayoutColumn$.getValue();

    if (!isExpanded) return shrinkDirection$.next(null);

    if (isLayoutNotColumn) return shrinkDirection$.next(ShrinkType.Vertical);

    return shrinkDirection$.next(ShrinkType.Horizontal);
  }

  #handleShrinkDirectionChange(shrinkDirection) {
    const $root = this.getRootElement();

    if (shrinkDirection === ShrinkType.Vertical)
      return $root.classList.add(ShrinkClassType.Column);

    if (shrinkDirection === ShrinkType.Horizontal)
      return $root.classList.add(ShrinkClassType.Row);

    return this.#resetShrinkState();
  }

  // shrink control
  #resetShrinkState() {
    const $root = this.getRootElement();

    $root.classList.remove(ShrinkClassType.Column);
    $root.classList.remove(ShrinkClassType.Row);
  }
}
