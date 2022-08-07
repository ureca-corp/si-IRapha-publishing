import { FoldingBar } from "../../../folding-bar/index.js";
import { Logo } from "../../../logo/index.js";
import { ToolboxMenusContainer } from "../menus-container/menus-container.js";

import { createElementFromHTML } from "../../../../utils/dom/index.js";
import { BaseElement } from "../../../base/base-element.js";
import { LayoutAttr, Selectors, ShrinkAttr } from "../../common/index.js";

const { BehaviorSubject, tap } = rxjs;

export class Toolbox extends BaseElement {
  #isLayoutColumn$;

  #isExpanded$ = new BehaviorSubject();
  #isPreview$ = new BehaviorSubject(false);
  #shrinkDirection$ = new BehaviorSubject();
  #isHideIconName$ = new BehaviorSubject();

  constructor({ isLayoutColumn$ }) {
    super({ $element: new ToolboxComp() });
    this.#isLayoutColumn$ = isLayoutColumn$;

    this.#initStates();
    this.#initChilds();
  }

  // private
  #initChilds() {
    const $root = this.getEl();

    const $logo = new Logo({
      states: { shrinkDirection$: this.#shrinkDirection$ },
      events: { onPinClick: () => this.#toggle() },
    }).getEl();

    const $menusContainer = new ToolboxMenusContainer({
      states: {
        isLayoutColumn$: this.#isLayoutColumn$,
        isHideIconName$: this.#isHideIconName$,
        shrinkDirection$: this.#shrinkDirection$,
      },
    }).getEl();

    const $foldingbar = new FoldingBar({
      states: {
        isLayoutColumn$: this.#isLayoutColumn$,
        isExpanded$: this.#isExpanded$,
        isPreview$: this.#isPreview$,
        shrinkDirection$: this.#shrinkDirection$,
      },
      $children: Inner({ $logo, $menusContainer }),
    }).getEl();

    $root.appendChild($foldingbar);
  }

  #initStates() {
    const $root = this.getEl();

    this.#isLayoutColumn$
      .pipe(
        tap((isLayoutColumn = false) =>
          isLayoutColumn
            ? $root.setAttribute(LayoutAttr.Key, LayoutAttr.Column)
            : $root.removeAttribute(LayoutAttr.Key)
        )
      )
      .subscribe();

    this.#shrinkDirection$.subscribe((shrinkDirection) =>
      this.#handleShrinkDirectionChange(shrinkDirection)
    );
  }

  // handler

  #handleShrinkDirectionChange(shrinkDirection) {
    const $root = this.getEl();

    switch (shrinkDirection) {
      case ShrinkAttr.Vertical:
        return $root.setAttribute(ShrinkAttr.Key, ShrinkAttr.Vertical);

      case ShrinkAttr.Horizontal:
        return $root.setAttribute(ShrinkAttr.Key, ShrinkAttr.Horizontal);

      default:
        return $root.removeAttribute(ShrinkAttr.Key);
    }
  }

  #toggle() {
    const isNotPreview = !this.#isPreview$.getValue();
    const isExpanded$ = this.#isExpanded$;

    isNotPreview && isExpanded$.next(!isExpanded$.getValue());

    this.#isPreview$.next(isNotPreview);
  }
}

// =================================================================
function ToolboxComp() {
  return createElementFromHTML(`
    <div 
      class="${Selectors.Toolbox}" 
      draggable="true"
      priority="1"
    ></div>
  `);
}

function Inner({ $logo, $menusContainer }) {
  const $template = createElementFromHTML(`
  <div>
    <div class="${Selectors.Logo}"></div>
  </div>
  `);
  const $logoContainer = $template.querySelector(`.${Selectors.Logo}`);

  $logoContainer.appendChild($logo);
  $template.appendChild($menusContainer);

  return $template;
}
