const rx = rxjs;

const SelectorClasses = {
  ToggleExpandButton: ".irapha-toggle-expand",
};

export class ToggleExpandIcon {
  #element;

  constructor(onClick) {
    this.#element = document.querySelector(SelectorClasses.ToggleExpandButton);

    rx.fromEvent(this.#element, "click").subscribe(() => onClick());
  }

  setExpandIcon() {
    this.#element.setAttribute("uk-icon", "icon: expand");
  }

  setShrinkIcon() {
    this.#element.setAttribute("uk-icon", "icon: shrink");
  }
}
