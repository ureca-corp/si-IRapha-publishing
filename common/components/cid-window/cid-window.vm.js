const rx = rxjs;

const CidWindowViewModel = {
  appbarModel$: new rx.BehaviorSubject({
    title: "CID (55667788)",
  }),

  tabsModels$: new rx.BehaviorSubject(
    Array.from({ length: 20 }, (_, index) => ({
      id: index + 1,
      title: "CID_1",
      desc: "Final",
    }))
  ),

  contentHeaderModel$: new rx.BehaviorSubject({
    title: "Tech note",
    cid: "#CID_1",
    createdAt: "2022-06-21 19:07",
    author: "test bm01",
  }),

  contentItemModels$: new rx.BehaviorSubject(
    Array.from({ length: 25 }, (_, index) => ({
      id: index + 1,
      question: "question 1",
      answer: "12345\n12345",
    }))
  ),
};

export const getViewModel = () => CidWindowViewModel;
