import { TabMenus } from "../tab-menus/tab-menus.js";
import { Selectors } from "../../common/index.js";
import { useCustomContextMenu } from "../../../modals/index.js";
import { createElementFromHTML } from "../../../../utils/dom/index.js";
import { BaseElement } from "../../../base/index.js";

const rx = rxjs;

/**
 * Constructor types
 *
 * @type data: {
 *   id: string,
 *   title: string,
 *   topDesc: string,
 *   bottomDesc: string
 * }
 *
 * @type isActive$: BehaviorSubject<boolean>
 * 현재 탭 활성화 여부
 *
 * @type onClick: () => void
 */

export class TabItem extends BaseElement {
  static template = `
    <li class="${Selectors.TabItem}">
      <div class="${Selectors.TabItemTitleContainer}">
        <p class="${Selectors.TabItemTitle}"></p>
      </div>

      <p class="${Selectors.TabItemDesc}" index="1"></p>
      <p class="${Selectors.TabItemDesc}" index="2"></p>
    </li>
  `;

  constructor({ data, isActive$, onClick }) {
    super({
      $element: createElementFromHTML(TabItem.template),
    });

    this.#getTitleContainer().appendChild(new TabMenus().getEl());

    this.#setData({ data });

    isActive$.subscribe((isActive) => this.#handleActiveChange(isActive));

    rx.fromEvent(this.getEl(), "click").subscribe(() => onClick());

    useCustomContextMenu({
      $emitter: this.getEl(),
      contextMenuOpen$: window.store.tabsContextMenuOpen$,
    });
  }

  #setData({ data }) {
    const { title, topDesc, bottomDesc } = data;

    this.#getTitle().innerHTML = title;
    this.#getTopDescription().innerHTML = topDesc;
    this.#getBottomDescription().innerHTML = bottomDesc;
  }

  // Elements
  #getTitleContainer() {
    return this.getElementByClassName(Selectors.TabItemTitleContainer);
  }

  #getTitle() {
    return this.getElementByClassName(Selectors.TabItemTitle);
  }

  #getTopDescription() {
    return this.getEl().querySelector(`.${Selectors.TabItemDesc}[index="1"]`);
  }

  #getBottomDescription() {
    return this.getEl().querySelector(`.${Selectors.TabItemDesc}[index="2"]`);
  }

  // handler
  #handleActiveChange(isActive) {
    if (isActive) return this.#active();

    return this.#inactive();
  }

  #active() {
    const $root = this.getEl();

    $root.appendChild(createDummy());
    $root.classList.add("--active");
  }

  #inactive() {
    const $root = this.getEl();

    const oldDummy = $root.querySelector(`.${Selectors.Dummy}`);
    oldDummy && $root.removeChild(oldDummy);

    $root.classList.remove("--active");
  }
}

// =================================================================
const createDummy = () => {
  const template = `
    <div class="${Selectors.Dummy}"></div>
  `;

  return createElementFromHTML(template);
};
