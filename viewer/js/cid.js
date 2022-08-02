import {} from "../../libs/lodash-4.17.21/lodash.js";
import {} from "../../libs/uikit-3.14.3/js/uikit.min.js";
import {} from "../../libs/uikit-3.14.3/js/uikit-icons.min.js";

import {} from "../../common/store/store.js";
import { CidWindow } from "../../common/components/cid-window/index.js";

const rx = rxjs;
// =================================================================

const cidWindow = new CidWindow();
document.querySelector("#irapha-cid-window").appendChild(cidWindow.getEl());
