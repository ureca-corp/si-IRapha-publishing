import { createElementFromHTML } from "../../../../../utils/dom/CreateElementFromHTML.js";
import { BaseElement } from "../../../../base/base-element.js";
import { Selectors, Attributes } from "../../common/index.js";

const { BehaviorSubject, fromEvent } = rxjs;

export class GridSelectorItem extends BaseElement {
  #$root;

  #isActive$ = new BehaviorSubject();

  constructor({ $element }) {
    super({ $element });
    this.#$root = $element;

    this.#initStates();
  }

  static create({ row, col }) {
    return createElementFromHTML(`
    <div 
      class="${Selectors.GridSelectorItem}" 
      ${Attributes.Row}="${row}"
      ${Attributes.Column}="${col}"
    >
      </div>
    `);
  }

  // private
  #initStates() {
    this.#isActive$.subscribe((isActive) =>
      this.#handleIsActiveChange(isActive)
    );
  }

  #active() {
    this.getEl().setAttribute(
      Attributes.GridSelector.key,
      Attributes.GridSelector.active
    );
  }

  #inactive() {
    this.getEl().removeAttribute(Attributes.GridSelector.key);
  }

  // handler
  #handleIsActiveChange(isActive) {
    const $root = this.getEl();

    isActive
      ? $root.setAttribute(
          Attributes.GridSelector.key,
          Attributes.GridSelector.active
        )
      : $root.removeAttribute(Attributes.GridSelector.key);
  }

  // public
  getRow() {
    return this.getEl().getAttribute(Attributes.Row);
  }

  getCol() {
    return this.getEl().getAttribute(Attributes.Column);
  }

  getRowCol() {
    return {
      row: this.getRow(),
      col: this.getCol(),
    };
  }

  isTargetTobeActivated({ row, col }) {
    const isBiggerNewRowIndex = this.getRow() <= +row;
    const isBiggerNewColIndex = this.getCol() <= +col;

    return isBiggerNewRowIndex && isBiggerNewColIndex;
  }

  setActive(isActive) {
    this.#isActive$.next(isActive);
  }

  // set event listener
  setOnMouseEnterListener({ callback }) {
    fromEvent(this.#$root, "mouseenter").subscribe(callback);
  }

  setOnMouseLeaveListener({ callback }) {
    fromEvent(this.#$root, "mouseleave").subscribe(callback);
  }

  setOnClickListener({ callback }) {
    fromEvent(this.#$root, "click").subscribe(callback);
  }
}
