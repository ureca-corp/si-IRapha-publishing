const StudyListViewModel = {
  selectInputItems: ["Option 1", "Option 2", "All Groups"],
  tableHeaderItems: ["ID", "Name", "Study Date", "Mod.", "View"],
  studyInfoModels: Array.from({ length: 25 }, (_, index) => ({
    id: 2830709 + index,
    name: "matching, studies",
    studyDate: "2022-04-19 11:27",
    mod: "US,CT",
    view: "View",
    birthDay: "1974-01-26",
    sex: "M",
    age: "049Y",
    studyDesc: "Abdomen",
  })),
};

export const getViewModel = () => StudyListViewModel;
