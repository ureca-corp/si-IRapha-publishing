const { BehaviorSubject } = rxjs;

const RevisePopupViewModel = {
  markingValue$: new BehaviorSubject(),

  transformReverseChecked$: new BehaviorSubject(false),
  transformFlipChecked$: new BehaviorSubject(false),
  transfromRotateChecked$: new BehaviorSubject(false),
  rotateValue$: new BehaviorSubject(),

  isCheckedShutter$: new BehaviorSubject(false),
  shutterOption$: new BehaviorSubject(),
  shutterCircleValue$: new BehaviorSubject(),
  shutterRectValue$: new BehaviorSubject(),
};

export const getViewModel = () => RevisePopupViewModel;
