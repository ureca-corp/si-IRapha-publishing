const rx = rxjs;

const MutationClasses = {
  LayoutColumnTwo: "is-layout--column-two",
  HideIconName: "is-state--name-hide",
};

const LayoutTypes = {
  ColumnTwo: "columnTwo",
};

export class ToolboxMenu {
  constructor(element) {
    this._element = element;

    this._initStates();
  }

  // private
  _initStates() {
    const layout$ = new rx.BehaviorSubject();
    layout$.subscribe((layout) => this._handleLayoutChange(layout));
    this._layout$ = layout$;

    const isHideIconName$ = new rx.BehaviorSubject();
    isHideIconName$.subscribe((hide) => this._handleHideIconNameChange(hide));
    this._isHideIconName$ = isHideIconName$;
  }

  _setLayoutColumnTwo() {
    this._element.classList.add(MutationClasses.LayoutColumnTwo);
  }

  _resetLayout() {
    this._element.classList.remove(MutationClasses.LayoutColumnTwo);
  }

  // handler
  _handleLayoutChange(layout) {
    if (layout === LayoutTypes.ColumnTwo) return this._setLayoutColumnTwo();

    return this._resetLayout();
  }

  _handleHideIconNameChange(isHideIconName) {
    if (isHideIconName)
      return this._element.classList.add(MutationClasses.HideIconName);

    return this._element.classList.remove(MutationClasses.HideIconName);
  }

  // public
  setLayout(layout) {
    this._layout$.next(layout);
  }

  setHideIconName(isHideIconName) {
    this._isHideIconName$.next(isHideIconName);
  }
}
