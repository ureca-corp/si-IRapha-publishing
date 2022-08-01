import {} from "../../libs/lodash-4.17.21/lodash.js";
import {} from "../../libs/uikit-3.14.3/js/uikit.min.js";
import {} from "../../libs/uikit-3.14.3/js/uikit-icons.min.js";

import {} from "../../common/store/store.js";

const rx = rxjs;
// =================================================================
import { Toolbox } from "../../common/components/toolbox/index.js";
import { ThumbnailBox } from "../../common/components/thumbnail-box/index.js";

const toolboxLayoutColumn$ = new rx.BehaviorSubject();
const thumbnailboxLayoutColumn$ = new rx.BehaviorSubject();

const thumbnailBoxModel = {
  kinModels: ["Option 01", "Option 02"],
  thumbnailModels: Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    topLeft: ["S:0", "#1"],
    topRight: ["US"],
    bottomLeft: ["Cardiology"],
  })),
};

const toolbox = new Toolbox({ isLayoutColumn$: toolboxLayoutColumn$ });
const thumbnailBox = new ThumbnailBox({
  isLayoutColumn$: thumbnailboxLayoutColumn$,
  model: thumbnailBoxModel,
});

import { StickyMenu } from "../../common/components/sticky-menu/index.js";
new StickyMenu({
  dropSuccessCallback: ({ isVertical, hasElement }) => {
    if (hasElement(".irapha-toolbox")) {
      toolboxLayoutColumn$.next(isVertical);
    }

    if (hasElement("#irapha-thumbnail-box")) {
      thumbnailboxLayoutColumn$.next(isVertical);
    }
  },
});

document
  .querySelector(".irapha-sticky-menu__dropzone.--top")
  .appendChild(toolbox.getEl());

document
  .querySelector(".irapha-sticky-menu__dropzone.--left")
  .appendChild(thumbnailBox.getEl());

// =================================================================

import { CustomContextMenu } from "../../common/components/layer-popup/index.js";
new CustomContextMenu({
  $element: document.querySelector("#irapha-thumbnail-context-menu"),
  open$: window.store.thumbnailContextMenuOpen$,
});

new CustomContextMenu({
  $element: document.querySelector("#irapha-tabs-context-menu"),
  open$: window.store.tabsContextMenuOpen$,
});

document
  .querySelector("#irapha-export-dicom-menu")
  .addEventListener("click", (e) => {
    window.store.exportDicomOpen$.next({ x: e.clientX, y: e.clientY });
  });

// =================================================================
import {
  ExportDicomLayerPopup,
  RelatedStudyLayerPopup,
} from "../../common/components/layer-popup/index.js";

const relatedStudyLayerPopup = new RelatedStudyLayerPopup({
  open$: window.store.relatedStudyOpen$,
});
document
  .querySelector("#global-popup-group")
  .appendChild(relatedStudyLayerPopup.getEl());

new ExportDicomLayerPopup({
  $element: document.querySelector("#irapha-export-dicom-popup"),
  open$: window.store.exportDicomOpen$,
});

// =================================================================
import { ViewboxContextMenu } from "../../common/components/layer-popup/index.js";

const viewboxContextMenu = new ViewboxContextMenu();

document
  .querySelector("#global-popup-group")
  .appendChild(viewboxContextMenu.getEl());

// =================================================================
import { tabsDummyData, windowDummyData } from "../../common/data/index.js";
import { MainLayout } from "../../common/components/main-layout/main-layout.js";

const mainLayout = new MainLayout({
  data: {
    tabsData: tabsDummyData,
    windowData: windowDummyData,
  },
});

// =================================================================
import { VirtualLayout } from "../../common/components/virtual-layout/index.js";
const virtualLayout = new VirtualLayout({
  layout$: window.store.virtualLayoutMode$,
  children: mainLayout,
});

document.querySelector("#testBBB").appendChild(virtualLayout.getEl());

// =================================================================
import { AnnotationContextMenu } from "../../common/components/layer-popup/index.js";

const annotationContextMenu = new AnnotationContextMenu();
document
  .querySelector("#global-popup-group")
  .appendChild(annotationContextMenu.getEl());

window.store.annotationContextMenuOpen$.next({ x: 200, y: 200 });
