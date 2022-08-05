import { BaseElement } from "../../../../../../base/base-element.js";
import {
  NavigateBeforeIcon,
  NavigateNextIcon,
} from "../../../../../../icons/index.js";
import { Selectors } from "../../common/index.js";

const { BehaviorSubject } = rxjs;
const PageMinNumber = 1;

/**
 * Constructor types
 *
 * @type $element: Element
 *
 * @type currentPage$: BehaviorSubject<number>
 *
 * @type onChangeCurrentPage: (currentPage: number) => void
 *
 * @type options: {
 *   chunkSize: number,
 *   itemsCount: number
 * }
 */

export class Navigator extends BaseElement {
  #navBeforeDisabled$ = new BehaviorSubject(false);
  #navNextDisabled$ = new BehaviorSubject(false);
  #currentPage$;

  #pagesCount;

  #onChangeCurrentPage;

  constructor({ $element, currentPage$, onChangeCurrentPage, options }) {
    super({ $element });

    this.#currentPage$ = currentPage$;
    this.#onChangeCurrentPage = onChangeCurrentPage;

    const { chunkSize, itemsCount } = options;
    this.#pagesCount = Math.ceil(itemsCount / chunkSize);

    this.#init();
  }

  #init() {
    this.#initNavIcons();

    this.#currentPage$.subscribe((currentPage) =>
      this.#updateNavigator(currentPage)
    );
  }

  #initNavIcons() {
    const { $navBeforeIcon, $navNextIcon } = this.#getElements();

    new NavigateBeforeIcon({
      element: $navBeforeIcon,
      disabled$: this.#navBeforeDisabled$,
      onClick: () => this.#handleNavigateBefore(),
    });

    new NavigateNextIcon({
      element: $navNextIcon,
      disabled$: this.#navNextDisabled$,
      onClick: () => this.#handleNavigateNext(),
    });
  }

  #handleNavigateBefore() {
    const currentPage = this.#currentPage$.getValue();

    if (currentPage <= PageMinNumber) return;

    this.#onChangeCurrentPage(currentPage - 1);
  }

  #handleNavigateNext() {
    const currentPage = this.#currentPage$.getValue();

    if (currentPage >= this.#pagesCount) return;

    this.#onChangeCurrentPage(currentPage + 1);
  }

  #updateNavigator(currentPage) {
    this.#updateNavPageCount(currentPage);

    this.#navBeforeDisabled$.next(currentPage === PageMinNumber);
    this.#navNextDisabled$.next(currentPage === this.#pagesCount);
  }

  #updateNavPageCount(currentPage) {
    const { $navPageCount } = this.#getElements();

    $navPageCount.innerHTML = `(${currentPage}/${this.#pagesCount})`;
  }

  #getElements() {
    const $root = this.getEl();

    const $navPageCount = $root.querySelector(`.${Selectors.NavPageCount}`);
    const $navBeforeIcon = $root.querySelector(`.${Selectors.NavBefore}`);
    const $navNextIcon = $root.querySelector(`.${Selectors.NavNext}`);

    return {
      $navPageCount,
      $navBeforeIcon,
      $navNextIcon,
    };
  }
}
