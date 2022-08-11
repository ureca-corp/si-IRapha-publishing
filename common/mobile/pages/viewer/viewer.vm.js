const ViewerViewModel = {
  studyInfoModel: {
    birthDay: "1974-01-26",
    sex: "M",
    age: "049Y",
    studyDesc: "Abdomen",
  },
  thumbnailModels: Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    topLeft: ["S:0", "#1"],
    topRight: ["US"],
    bottomLeft: ["Cardiology"],
  })),
  dicomViewBoxModel: {
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
};

export const getViewModel = () => ViewerViewModel;
