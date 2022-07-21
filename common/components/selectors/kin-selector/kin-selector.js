/**
 * Constructor types
 *
 * @type $element: Element
 *
 * @type isHide$: BehaviorSubject<boolean>
 */
export class KinSelector {
  #$root;

  constructor({ $element, isHide$ }) {
    this.#$root = $element;

    $element.classList.add("uk-select");

    isHide$.subscribe((isHide) => this.#handleDisplayChange(isHide));
  }

  #handleDisplayChange(isHide) {
    if (!!isHide) return (this.#$root.style.display = "none");

    return (this.#$root.style.display = "unset");
  }
}
