const rx = rxjs;

export class ToggleExpandIcon {
  #root;

  constructor({ element, isExpanded$, onClick }) {
    this.#root = element;

    rx.fromEvent(this.#root, "click").subscribe(() => onClick());

    isExpanded$.subscribe((isExpanded) => this.handleExpandedChane(isExpanded));
  }

  handleExpandedChane(isExpanded) {
    if (isExpanded) return this.setShrinkIcon();

    return this.setExpandIcon();
  }

  setExpandIcon() {
    this.#root.setAttribute("uk-icon", "icon: expand");
  }

  setShrinkIcon() {
    this.#root.setAttribute("uk-icon", "icon: shrink");
  }
}
