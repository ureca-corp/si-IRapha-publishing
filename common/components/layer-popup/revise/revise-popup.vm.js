const rx = rxjs;

class RevisePopupViewModel {
  markingValue$ = rx.BehaviorSubject();

  isCheckedReverse$ = rx.BehaviorSubject();
  isCheckedFlip$ = rx.BehaviorSubject();
  isCheckedRotate$ = rx.BehaviorSubject();
  rotateValue$ = rx.BehaviorSubject();

  isCheckedShutter$ = rx.BehaviorSubject();
  shutterSelectedValue$ = rx.BehaviorSubject();
  circleStepValue$ = rx.BehaviorSubject();
  rectStepValue$ = rx.BehaviorSubject();

  isCheckedDelete$ = rx.BehaviorSubject();

  constructor() {}

  getValueSet() {
    return {
      markingValue: this.markingValue$.getValue(),
      isCheckedReverse: this.isCheckedReverse$.getValue(),
      isCheckedFlip: this.isCheckedFlip$.getValue(),
      isCheckedRotate: this.isCheckedRotate$.getValue(),
      rotateValue: this.rotateValue$.getValue(),
      isCheckedShutter: this.isCheckedShutter$.getValue(),
      shutterSelectedValue: this.shutterSelectedValue$.getValue(),
      circleStepValue: this.circleStepValue$.getValue(),
      rectStepValue: this.rectStepValue$.getValue(),
      isCheckedDelete: this.isCheckedDelete$.getValue(),
    };
  }
}

const revisePopupViewModel = new RevisePopupViewModel();

export const getViewModel = () => revisePopupViewModel;
