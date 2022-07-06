export class ThumbnailBoxPaginationInfo {
  #root;

  constructor({ element, isHide$ }) {
    this.#root = element;

    isHide$.subscribe((isHide) => this.#handleVisibilityChange(isHide));
  }

  #handleVisibilityChange(isHide) {
    if (isHide) return this.#hide();

    return this.#visible();
  }

  #hide() {
    this.#root.style.display = "none";
  }

  #visible() {
    this.#root.style.display = "flex";
  }
}
