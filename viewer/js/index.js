import "../../common/store/store.js";
import "../../libs/index.js";

import { App } from "../../common/components/app/app.js";

new App({ $element: document.querySelector("#irapha-app") });

// 임시로 팝업 오픈
window.store.annotationContextMenuOpen$.next({ x: 200, y: 200 });
window.store.dicomInformationsOpen$.next({ x: 400, y: 600 });
