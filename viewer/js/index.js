import { Toolbox } from "../../common/components/toolbox/index.js";
const toolbox = new Toolbox();

// import { FoldingBar } from "../../common/components/folding-bar/index.js";
// const foldingbar = new FoldingBar({
//   element: document.querySelector(".irapha-folding-bar"),
// });

import { ThumbnailBar } from "../../common/components/thumbnail-bar/index.js";
const thumbnailBar = new ThumbnailBar();

import { StickyMenu } from "../../common/components/sticky-menu/index.js";
new StickyMenu({
  dropSuccessCallback: ({ isVertical, hasChildClassName }) => {
    if (hasChildClassName("irapha-toolbox")) {
      toolbox.setLayoutColumn(isVertical);
    }

    if (hasChildClassName("irapha-folding-bar")) {
      console.log(isVertical);
      thumbnailBar.setLayoutColumn(isVertical);
    }
  },
});

// foldingbar.setExpand(null);
