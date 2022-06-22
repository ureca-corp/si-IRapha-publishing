const rx = rxjs;

// 툴 박스 - 폴딩 토글 버튼
export class FoldingToggleButton {
  constructor(element) {
    this._element = element;
  }

  init() {
    const initialIconState =
      this._element.getAttribute("uk-icon") === "icon: expand";

    const isExpanded$ = new rx.BehaviorSubject(initialIconState);
    isExpanded$.subscribe((isExpanded) =>
      this.handleChangeExpanded(isExpanded)
    );

    this._isExpanded$ = isExpanded$;

    this.setIconShrink();
  }

  // private
  _setAttributeToExpandIcon() {
    this._element.setAttribute("uk-icon", "icon: expand");
  }

  _setAttributeToShrinkIcon() {
    this._element.setAttribute("uk-icon", "icon: shrink");
  }

  // handler
  handleChangeExpanded(isExpanded) {
    if (isExpanded) return this._setAttributeToExpandIcon();

    return this._setAttributeToShrinkIcon();
  }

  // public
  getDomElement() {
    return this._element;
  }

  isExpanded() {
    return this._isExpanded$.getValue();
  }

  setIconExpand() {
    this._isExpanded$.next(true);
  }

  setIconShrink() {
    this._isExpanded$.next(false);
  }
}
