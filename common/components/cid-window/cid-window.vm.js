const { BehaviorSubject } = rxjs;

const CidWindowViewModel = {
  appbarModel$: new BehaviorSubject({
    title: "CID (55667788)",
  }),

  tabsModels$: new BehaviorSubject(
    Array.from({ length: 20 }, (_, index) => ({
      id: index + 1,
      title: "CID_1",
      desc: "Final",
    }))
  ),

  contentHeaderModel$: new BehaviorSubject({
    title: "Tech note",
    cid: "#CID_1",
    createdAt: "2022-06-21 19:07",
    author: "test bm01",
  }),

  contentItemModels$: new BehaviorSubject(
    Array.from({ length: 25 }, (_, index) => ({
      id: index + 1,
      question: "question 1",
      answer: "12345\n12345",
    }))
  ),
};

export const getViewModel = () => CidWindowViewModel;
