import { Toolbox } from "../../common/components/toolbox/index.js";
const toolbox = new Toolbox();

import { StickyMenu } from "../../common/components/sticky-menu/index.js";
new StickyMenu({
  dropSuccessCallback: ({ isVertical, hasChildClassName }) => {
    if (hasChildClassName("irapha-toolbox")) {
      toolbox.setLayoutColumn(isVertical);
    }

    if (hasChildClassName("irapha-thumbnail-box")) {
      console.log("thumbnail");
    }
  },
});

// import { FoldingBar } from "../../common/components/folding-bar/index.js";
// const foldingbar = new FoldingBar({
//   element: document.querySelector(".irapha-folding-bar"),
// });

// foldingbar.setLayoutColumn(true);
// foldingbar.setExpand(true);
