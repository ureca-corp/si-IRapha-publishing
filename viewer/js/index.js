import { Toolbox } from "../../common/components/toolbox/index.js";
const toolbox = new Toolbox();

import { ThumbnailBox } from "../../common/components/thumbnail-box/index.js";
const thumbnailBox = new ThumbnailBox();

import { StickyMenu } from "../../common/components/sticky-menu/index.js";
new StickyMenu({
  dropSuccessCallback: ({ isVertical, hasElement }) => {
    if (hasElement("#irapha-toolbox")) {
      console.log(isVertical);
      toolbox.setLayoutColumn(isVertical);
    }

    if (hasElement("#irapha-thumbnail-box")) {
      console.log(isVertical);
      thumbnailBox.setLayoutColumn(isVertical);
    }
  },
});
