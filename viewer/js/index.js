// import { Toolbox } from "../../common/components/toolbox/index.js";
// import { StickyMenu } from "../../common/components/sticky-menu/index.js";

// import { GridSelector } from "../../common/components/grid-selector/index.js";

// const toolbox = new Toolbox();

// new GridSelector();

// new StickyMenu({
//   dropSuccessCallback: ({ isVertical, hasChildClassName }) => {
//     if (hasChildClassName("irapha-toolbox")) {
//       toolbox.setLayoutColumn(isVertical);
//     }

//     if (hasChildClassName("irapha-thumbnail-box")) {
//       alert(isVertical);
//     }
//   },
// });

import { FoldingBar } from "../../common/components/folding-bar/index.js";
const foldingbar = new FoldingBar({
  element: document.querySelector(".irapha-folding-bar"),
});

foldingbar.setLayoutColumn(true);
foldingbar.setExpand(true);
