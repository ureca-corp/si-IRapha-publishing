import {
  NavigateBeforeIcon,
  NavigateNextIcon,
} from "../../../../../../icons/index.js";
import { Selectors } from "../../common/index.js";

const rx = rxjs;
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
export class Navigator {
  #$navigator;
  #$navPageCount;

  #navBeforeDisabled$ = new rx.BehaviorSubject(false);
  #navNextDisabled$ = new rx.BehaviorSubject(false);
  #currentPage$;

  #pagesCount;

  #onChangeCurrentPage;

  constructor({ $element, currentPage$, onChangeCurrentPage, options }) {
    this.#$navigator = $element;
    this.#$navPageCount = this.#$navigator.querySelector(
      `.${Selectors.NavPageCount}`
    );

    this.#currentPage$ = currentPage$;
    this.#onChangeCurrentPage = onChangeCurrentPage;

    const { chunkSize, itemsCount } = options;
    this.#pagesCount = Math.ceil(itemsCount / chunkSize);

    new NavigateBeforeIcon({
      element: this.#$navigator.querySelector(`.${Selectors.NavBefore}`),
      disabled$: this.#navBeforeDisabled$,
      onClick: () => this.#handleNavigateBefore(),
    });

    new NavigateNextIcon({
      element: this.#$navigator.querySelector(`.${Selectors.NavNext}`),
      disabled$: this.#navNextDisabled$,
      onClick: () => this.#handleNavigateNext(),
    });

    currentPage$.subscribe((currentPage) => this.#updateNavigator(currentPage));
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
    this.#$navPageCount.innerHTML = `(${currentPage}/${this.#pagesCount})`;
  }
}
