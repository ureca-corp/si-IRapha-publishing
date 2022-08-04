const { BehaviorSubject } = rxjs;

const RelatedStudyViewModel = {
  currentStudy$: new BehaviorSubject(),
  studyInfoList$: new BehaviorSubject([]),
};

// TODO Delete) set dummy data
RelatedStudyViewModel.studyInfoList$.next(
  Array.from({ length: 15 }, (_, index) => ({
    patientId: index + 1,
    studyDate: "2022-02-21 13:00:00",
    accesionNo: "2171410",
    studyDescription: "Study Description",
    modality: "CT",
    ser: "4",
    ins: "4",
    name: "Patient Name 1",
    gender: "M",
  }))
);
RelatedStudyViewModel.currentStudy$.next(
  RelatedStudyViewModel.studyInfoList$.getValue()[0]
);

export const getViewModel = () => RelatedStudyViewModel;
