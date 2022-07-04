import { Toolbox } from "../../common/components/toolbox/index.js";
const toolbox = new Toolbox();

import { ThumbnailBar } from "../../common/components/thumbnail-bar/index.js";
const thumbnailBar = new ThumbnailBar();

import { StickyMenu } from "../../common/components/sticky-menu/index.js";
new StickyMenu({
  dropSuccessCallback: ({ isVertical, hasElement }) => {
    if (hasElement("#irapha-toolbox")) {
      console.log(isVertical);
      toolbox.setLayoutColumn(isVertical);
    }

    if (hasElement("#irapha-thumbnail-bar")) {
      console.log(isVertical);
      thumbnailBar.setLayoutColumn(isVertical);
    }
  },
});
