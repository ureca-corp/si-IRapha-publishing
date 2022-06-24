// import { Logo } from "/common/components/logo/models/index.js";
import { Toolbox } from "/common/components/toolbox3/index.js";
import { StickyMenu } from "/common/components/sticky-menu/index.js";

// const logo = new Logo();
// logo.setShrinkDirection("horizontal");

const toolbox = new Toolbox();
// toolbox.setLayoutColumn(true);
// toolbox.setExpand(true);

const stickyMenu = new StickyMenu(({ isVertical }) => {
  if (isVertical) {
    toolbox.setLayoutColumn(true);
  } else {
    toolbox.setLayoutColumn(false);
  }
});
