const AppViewModel = {
  thumbnailBoxModel: {
    kinModels: ["Option 01", "Option 02"],
    thumbnailModels: Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      topLeft: ["S:0", "#1"],
      topRight: ["US"],
      bottomLeft: ["Cardiology"],
    })),
  },
};

export const getViewModel = () => AppViewModel;
