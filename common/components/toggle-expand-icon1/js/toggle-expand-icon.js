const rx = rxjs;

export class ToggleExpandIcon {
  #element;

  constructor({ element, isExpanded$, onClick }) {
    this.#element = element;

    rx.fromEvent(this.#element, "click").subscribe(() => onClick());

    isExpanded$.subscribe((isExpanded) => this.handleExpandedChane(isExpanded));
  }

  handleExpandedChane(isExpanded) {
    if (isExpanded) return this.setShrinkIcon();

    return this.setExpandIcon();
  }

  setExpandIcon() {
    this.#element.setAttribute("uk-icon", "icon: expand");
  }

  setShrinkIcon() {
    this.#element.setAttribute("uk-icon", "icon: shrink");
  }
}
