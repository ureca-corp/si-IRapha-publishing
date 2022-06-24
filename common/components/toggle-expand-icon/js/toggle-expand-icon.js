const rx = rxjs;

const SelectorClasses = {
  ToggleExpandButton: ".irm-toggle-expand",
};

export class ToggleExpandIcon {
  constructor(onClick) {
    this._element = document.querySelector(SelectorClasses.ToggleExpandButton);

    rx.fromEvent(this._element, "click").subscribe(() => onClick());
  }

  setExpandIcon() {
    this._element.setAttribute("uk-icon", "icon: expand");
  }

  setShrinkIcon() {
    this._element.setAttribute("uk-icon", "icon: shrink");
  }
}
