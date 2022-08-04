import "../../libs/index.js";
import "../../common/store/store.js";

import { CidWindow } from "../../common/components/cid-window/index.js";

const cidWindow = new CidWindow();
document.querySelector("#irapha-cid-window").appendChild(cidWindow.getEl());
