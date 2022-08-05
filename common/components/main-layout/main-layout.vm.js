const { BehaviorSubject } = rxjs;

const MainLayoutViewModel = {
  tabsModels$: new BehaviorSubject(),
  windowModels$: new BehaviorSubject(),
};

// Dummy Data
MainLayoutViewModel.tabsModels$.next([
  {
    id: 1,
    title: "Patient Name 1",
    topDesc: "Patient ID / Age / Sex",
    bottomDesc: "Study Date / Modality / Study description",
  },
  {
    id: 2,
    title: "Patient Name 2",
    topDesc: "Patient ID / Age / Sex",
    bottomDesc: "Study Date / Modality / Study description",
  },
  {
    id: 3,
    title: "Patient Name 3",
    topDesc: "Patient ID / Age / Sex",
    bottomDesc: "Study Date / Modality / Study description",
  },
  {
    id: 4,
    title: "Patient Name 4",
    topDesc: "Patient ID / Age / Sex",
    bottomDesc: "Study Date / Modality / Study description",
  },
]);

MainLayoutViewModel.windowModels$.next(
  Array.from({ length: 40 }, (_, index) => ({
    viewBoxModel: {
      topLeft: ["O^YEONG SU", "064Y / M", "2019-11-25", "06:26:49"],
      topCenter: ["A"],
      topRight: [
        "Test11",
        "Institution:VHS Medical Center 3T",
        "tof_cs_acc7.2",
        "S:5",
        "I:4",
      ],
      left: [
        "MR",
        "TE:3.69",
        "TR: 21.00",
        "PP: HFS",
        "ST: 0.50",
        "SL: 104.50 / SI: 0.00",
      ],
      right: ["L"],
      bottomLeft: ["520 X 576", "Zoom:63.54%"],
      bottomRight: ["Linear", "W:338 L:146", "MANETOM Vida"],
    },
    hasController: index % 2 === 0,
  }))
);

export const getViewModel = () => MainLayoutViewModel;
