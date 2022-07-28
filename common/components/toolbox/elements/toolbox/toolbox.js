import { FoldingBar2 } from "../../../folding-bar/index.js";
import { Logo } from "../../../logo/index.js";
import { ToolboxMenusContainer } from "../menus-container/menus-container.js";

import { createElementFromHTML } from "../../../../utils/dom/CreateElementFromHTML.js";
import { BaseElement } from "../../../base/base-element.js";
import { LayoutClassType, Selectors, ShrinkType } from "../../common/index.js";

const rx = rxjs;

const Template = `
<div class="${Selectors.Toolbox}" draggable="true" priority="1"></div>
`;

export class Toolbox extends BaseElement {
  #isLayoutColumn$;

  #isExpanded$ = new rx.BehaviorSubject();
  #isPreview$ = new rx.BehaviorSubject(false);
  #shrinkDirection$ = new rx.BehaviorSubject();
  #isHideIconName$ = new rx.BehaviorSubject();

  constructor({ isLayoutColumn$ }) {
    super({ $element: createElementFromHTML(Template) });
    this.#isLayoutColumn$ = isLayoutColumn$;

    this.#initStates();
    this.#initChilds();
  }

  // private
  #initChilds() {
    const $root = this.getRootElement();

    const logo = new Logo({
      states: { shrinkDirection$: this.#shrinkDirection$ },
      events: { onPinClick: () => this.#toggle() },
    });

    const menusContainer = new ToolboxMenusContainer({
      states: {
        isLayoutColumn$: this.#isLayoutColumn$,
        isHideIconName$: this.#isHideIconName$,
        shrinkDirection$: this.#shrinkDirection$,
      },
    });

    const foldingbar = new FoldingBar2({
      states: {
        isLayoutColumn$: this.#isLayoutColumn$,
        isExpanded$: this.#isExpanded$,
        isPreview$: this.#isPreview$,
        shrinkDirection$: this.#shrinkDirection$,
      },
      $children: createInner({ logo, menusContainer }),
    });

    $root.appendChild(foldingbar.getRootElement());
  }

  #initStates() {
    this.#isLayoutColumn$.subscribe((isLayoutColumn) =>
      this.#handleLayoutChange(isLayoutColumn)
    );

    this.#shrinkDirection$.subscribe((shrinkDirection) =>
      this.#handleShrinkDirectionChange(shrinkDirection)
    );
  }

  // handler
  #handleLayoutChange(isLayoutColumn) {
    const rootClassList = this.getRootElement().classList;

    if (isLayoutColumn) return rootClassList.add(LayoutClassType.Column);

    return rootClassList.remove(LayoutClassType.Column);
  }

  #handleShrinkDirectionChange(shrinkDirection) {
    const rootClassList = this.getRootElement().classList;
    const { Vertical, Horizontal } = ShrinkType;

    if (shrinkDirection === Vertical.value)
      return rootClassList.add(Vertical.className);

    if (shrinkDirection === Horizontal.value)
      return rootClassList.add(Horizontal.className);

    rootClassList.remove(Vertical.className);
    rootClassList.remove(Horizontal.className);
  }

  #toggle() {
    const isNotPreview = !this.#isPreview$.getValue();
    const isExpanded$ = this.#isExpanded$;

    isNotPreview && isExpanded$.next(!isExpanded$.getValue());

    this.#isPreview$.next(isNotPreview);
  }

  // public
  setLayoutColumn(isLayoutColumn) {
    this.#isLayoutColumn$.next(isLayoutColumn);
  }
}

// =================================================================
const createInner = ({ logo, menusContainer }) => {
  const template = `
  <div>
    <div class="${Selectors.Logo}"></div>
  </div>
  `;
  const $template = createElementFromHTML(template);
  const $logoContainer = $template.querySelector(`.${Selectors.Logo}`);

  $logoContainer.appendChild(logo.getRootElement());
  $template.appendChild(menusContainer.getRootElement());

  return $template;
};
