import { createElementFromHTML } from "../../../../utils/dom/CreateElementFromHTML.js";
import { BaseElement } from "../../../base/base-element.js";
import {
  LayoutClassType,
  ShrinkClassType,
  ShrinkType,
} from "../../common/index.js";

const rx = rxjs;

/**
 * Constructor types
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

const Template = `
<div class="irapha-folding-bar"></div>
`;

export class FoldingBar extends BaseElement {
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
    const $root = this.getEl();
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
    const $root = this.getEl();
    const children = this.#$children;

    $root.appendChild(children);
  }

  // handler
  #handleLayoutChange(isLayoutColumn) {
    const $root = this.getEl();

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
    const $root = this.getEl();

    if (shrinkDirection === ShrinkType.Vertical)
      return $root.classList.add(ShrinkClassType.Column);

    if (shrinkDirection === ShrinkType.Horizontal)
      return $root.classList.add(ShrinkClassType.Row);

    return this.#resetShrinkState();
  }

  // shrink control
  #resetShrinkState() {
    const $root = this.getEl();

    $root.classList.remove(ShrinkClassType.Column);
    $root.classList.remove(ShrinkClassType.Row);
  }
}
