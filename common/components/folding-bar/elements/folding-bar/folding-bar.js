import { createElementFromHTML } from "../../../../utils/dom/index.js";
import { BaseElement } from "../../../base/base-element.js";
import { LayoutColumnType, ShrinkType } from "../../common/index.js";

const { fromEvent } = rxjs;

const Selectors = {
  Root: "irapha-folding-bar",
};

function FoldingBarComp() {
  return createElementFromHTML(`<div class="${Selectors.Root}"></div>`);
}

/**
 * Constructor types
 *
 * @type states: {
 *  isLayoutColumn$: BehaviorSubject<boolean>,
 *  isExpanded$: BehaviorSubject<boolean>,
 *  shrinkDirection$: BehaviorSubject<ShrinkType>,
 * }
 *
 * @type isLayoutColumn$: BehaviorSubject<boolean>
 * 폴딩바 레이아웃 상태가 세로형태인지
 *
 * @type isPreview$: BehaviorSubject<boolean>
 * 현재 상태가 마우스 오버로 인해 프리뷰하고 있는지
 *
 * @type shrinkDirection$: BehaviorSubject<ShrinkType>
 * null이 아닌 경우 폴딩 상태를 의미, 접힌 방향 값을 가짐
 *
 * @type $children: Element
 */
export class FoldingBar extends BaseElement {
  #states;

  #$children;

  constructor({ states, $children }) {
    super({ $element: new FoldingBarComp() });
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
    fromEvent($root, "mouseenter").subscribe(() => handleMouseEnter());

    // 마우스 호버 벗어나면 원상태 복귀
    fromEvent($root, "mouseleave").subscribe(() => handleMouseLeave());
  }

  #initChildren() {
    const $root = this.getEl();
    const $children = this.#$children;

    $root.appendChild($children);
  }

  // handlers
  #handleLayoutChange(isLayoutColumn) {
    const $root = this.getEl();
    $root.setAttribute(LayoutColumnType.Key, isLayoutColumn);
  }

  #handleExpanded(isExpanded) {
    const { isLayoutColumn$, shrinkDirection$ } = this.#states;

    if (!isExpanded) return shrinkDirection$.next(null);

    const { Vertical, Horizontal } = ShrinkType;
    const isLayoutNotColumn = !isLayoutColumn$.getValue();
    const shrinkType = isLayoutNotColumn ? Vertical.value : Horizontal.value;

    shrinkDirection$.next(shrinkType);
  }

  #handleShrinkDirectionChange(shrinkDirection) {
    const $root = this.getEl();
    const { Key, Vertical, Horizontal } = ShrinkType;

    switch (shrinkDirection) {
      case Vertical.value:
        return $root.setAttribute(Key, Vertical.value);
      case Horizontal.value:
        return $root.setAttribute(Key, Horizontal.value);
      default:
        return $root.removeAttribute(Key);
    }
  }
}
