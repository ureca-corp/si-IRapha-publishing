import { Toolbox } from "../../common/components/toolbox/index.js";
import { StickyMenu } from "../../common/components/sticky-menu/index.js";

import { GridSelector } from "../../common/components/grid-selector/index.js";
import { StickyMenu1 } from "./sticky-menu1.js";

// const toolbox = new Toolbox();

// const stickyMenu = new StickyMenu(({ isVertical }) => {
//   if (isVertical) {
//     toolbox.setLayoutColumn(true);
//   } else {
//     toolbox.setLayoutColumn(false);
//   }
// });

// new GridSelector();

new StickyMenu1({ dropSuccessCallback: () => console.log("drop ok") });
