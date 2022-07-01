import { Logo } from "../../logo/index.js";
import { ToggleExpandIcon } from "../../toggle-expand-icon/index.js";
import { ToolboxMenusManager } from "./menu-manager.js";

const rx = rxjs;

const Selectors = {
  Toolbox: "irapha-toolbox",

  LayoutColumn: "is-layout--column",
  ShrinkHorizontal: "is-shrink--horizontal",
  ShrinkVertical: "is-shrink--vertical",
};

const ShrinkDirection = {
  vertical: "vertical",
  horizontal: "horizontal",
};

export class Toolbox {
  #element;
  #logo;
  #toggleExpandButton;
  #menusManager;

  #isLayoutColumn$;
  #isExpanded$;
  #shrinkDirection$;

  constructor() {
    this.#element = document.querySelector(`.${Selectors.Toolbox}`);
    this.#initLogo();
    this.#initToggleExpandButton();
    this.#initMenusManager();

    this.#initStates();
    this.#initMouseEvent();
  }

  // private
  #initLogo() {
    this.#logo = new Logo();
  }

  #initToggleExpandButton() {
    this.#toggleExpandButton = new ToggleExpandIcon(() => this.#toggleExpand());
  }

  #initMenusManager() {
    this.#menusManager = new ToolboxMenusManager();
    this.#menusManager.setHideIconName(true);
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

  #initMouseEvent() {
    // 마우스 호버 시 임시로 보이기
    rx.fromEvent(this.#element, "mouseover").subscribe(() => {
      if (this.#isExpanded$.getValue()) return this.#resetShrinkState();
    });

    // 마우스 호버 벗어나면 원상태 복귀
    rx.fromEvent(this.#element, "mouseout").subscribe(() => {
      const isExpanded = this.#isExpanded$.getValue();

      if (isExpanded) return this.setExpand(isExpanded);
    });
  }

  #setShrinkDirection(shrinkDirection) {
    this.#shrinkDirection$.next(shrinkDirection);
  }

  #shrinkVertical() {
    this.#logo.setShrinkDirection("vertical");
    this.#element.classList.add(Selectors.ShrinkVertical);
  }

  #shrinkHorizontal() {
    this.#logo.setShrinkDirection("horizontal");
    this.#element.classList.add(Selectors.ShrinkHorizontal);
  }

  #resetShrinkState() {
    this.#logo.setShrinkDirection(null);
    this.#element.classList.remove(Selectors.ShrinkVertical);
    this.#element.classList.remove(Selectors.ShrinkHorizontal);
  }

  #toggleExpand() {
    const old = this.#isExpanded$.getValue();
    this.setExpand(!old);
  }

  // handler
  #handleLayoutChange(isLayoutColumn) {
    if (isLayoutColumn) {
      this.#menusManager.setLayoutColumn(true);
      return this.#element.classList.add(Selectors.LayoutColumn);
    }

    this.#menusManager.setLayoutColumn(null);
    return this.#element.classList.remove(Selectors.LayoutColumn);
  }

  #handleExpanded(isExpanded) {
    if (!isExpanded) {
      this.#toggleExpandButton.setExpandIcon();
      return this.#resetShrinkState();
    }

    this.#toggleExpandButton.setShrinkIcon();
    if (!this.#isLayoutColumn$.getValue())
      return this.#setShrinkDirection("vertical");

    return this.#setShrinkDirection("horizontal");
  }

  #handleShrinkDirectionChange(shrinkDirection) {
    if (shrinkDirection === ShrinkDirection.vertical)
      return this.#shrinkVertical();

    if (shrinkDirection === ShrinkDirection.horizontal)
      return this.#shrinkHorizontal();

    return this.#resetShrinkState();
  }

  // public
  setLayoutColumn(isLayoutColumn) {
    this.#isLayoutColumn$.next(isLayoutColumn);
  }

  setExpand(isExpanded) {
    this.#isExpanded$.next(isExpanded);
  }

  setHideIconName(isHideIconName) {
    this.#menusManager.setHideIconName(isHideIconName);
  }
}
