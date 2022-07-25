import {} from "../../libs/lodash-4.17.21/lodash.js";
import {} from "../../libs/uikit-3.14.3/js/uikit.min.js";
import {} from "../../libs/uikit-3.14.3/js/uikit-icons.min.js";

import {} from "../../common/store/store.js";

import { Toolbox } from "../../common/components/toolbox/index.js";
const toolbox = new Toolbox({
  $element: document.querySelector("#irapha-toolbox"),
});

import { ThumbnailBox } from "../../common/components/thumbnail-box/index.js";
const thumbnailBox = new ThumbnailBox({
  $element: document.querySelector("#irapha-thumbnail-box"),
});

import { StickyMenu } from "../../common/components/sticky-menu/index.js";
new StickyMenu({
  dropSuccessCallback: ({ isVertical, hasElement }) => {
    if (hasElement("#irapha-toolbox")) {
      toolbox.setLayoutColumn(isVertical);
    }

    if (hasElement("#irapha-thumbnail-box")) {
      thumbnailBox.setLayoutColumn(isVertical);
    }
  },
});

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

new RelatedStudyLayerPopup({
  $element: document.querySelector("#irapha-related-study-popup"),
  open$: window.store.relatedStudyOpen$,
});

new ExportDicomLayerPopup({
  $element: document.querySelector("#irapha-export-dicom-popup"),
  open$: window.store.exportDicomOpen$,
});

// =================================================================
new CustomContextMenu({
  $element: document.querySelector("#irapha-viewbox-context-menu"),
  open$: window.store.viewboxContextMenuOpen$,
  autoClose: false,
});

import { GridSelector } from "../../common/components/selectors/index.js";
new GridSelector({
  $element: document.querySelector("#test1234"),
});

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

document.querySelector("#testBBB").appendChild(virtualLayout.getRootElement());
