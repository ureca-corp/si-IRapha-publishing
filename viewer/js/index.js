import { Toolbox } from "../../common/components/toolbox/index.js";
const toolbox = new Toolbox();

import { FoldingBar } from "../../common/components/folding-bar/index.js";
const foldingbar = new FoldingBar({
  element: document.querySelector(".irapha-folding-bar"),
});

import { StickyMenu } from "../../common/components/sticky-menu/index.js";
new StickyMenu({
  dropSuccessCallback: ({ isVertical, hasChildClassName }) => {
    if (hasChildClassName("irapha-toolbox")) {
      toolbox.setLayoutColumn(isVertical);
    }

    if (hasChildClassName("irapha-folding-bar")) {
      console.log(isVertical);
      foldingbar.setLayoutColumn(isVertical);
    }
  },
});

foldingbar.setExpand(null);
