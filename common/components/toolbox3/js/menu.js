const rx = rxjs;

const MutationClasses = {
  LayoutColumnTwo: "is-layout--column-two",
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

  // public
  setLayout(layout) {
    this._layout$.next(layout);
  }
}
