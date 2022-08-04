const { BehaviorSubject } = rxjs;

const DicomInformationViewModel = {
  dicomInfoList$: new BehaviorSubject([]),
};

// TODO Delete) set dummy Data
DicomInformationViewModel.dicomInfoList$.next(
  Array.from({ length: 40 }, (_, index) => ({
    id: index + 1,
    tag: "(0002, 0001)",
    name: "FileMetaInformationsFileMetaInformationsFileMetaInformationsFileMetaInformationsFileMetaInformationsFileMetaInformations",
    vr: "OB",
    length: "0",
    value:
      "123132131321312321321312321213211231321313213123213213123212132112313213132131232132131232121321",
  }))
);

export const getViewModel = () => DicomInformationViewModel;
