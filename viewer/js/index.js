import {} from "../../libs/lodash-4.17.21/lodash.js";
import {} from "../../libs/uikit-3.14.3/js/uikit-icons.min.js";
import {} from "../../libs/uikit-3.14.3/js/uikit.min.js";

import {} from "../../common/store/store.js";

import { Toolbox } from "../../common/components/toolbox/index.js";
const toolbox = new Toolbox();

import { ThumbnailBox } from "../../common/components/thumbnail-box/index.js";
const thumbnailBox = new ThumbnailBox();

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
  element: document.querySelector("#irapha-thumbnail-context-menu"),
  open$: window.store.thumbnailContextMenuOpen$,
});

// =================================================================
import { Tabs } from "../../common/components/tabs/index.js";
new Tabs({ element: document.querySelector(".irapha-tabs") });

new CustomContextMenu({
  element: document.querySelector("#irapha-tabs-context-menu"),
  open$: window.store.tabsContextMenuOpen$,
});

document
  .querySelector("#irapha-export-dicom-menu")
  .addEventListener("click", (e) => {
    window.store.exportDicomOpen$.next({ x: e.clientX, y: e.clientY });
  });

// =================================================================
import {
  RelatedStudyLayerPopup,
  ExportDicomLayerPopup,
} from "../../common/components/layer-popup/index.js";

new RelatedStudyLayerPopup({
  element: document.querySelector("#irapha-related-study-popup"),
  open$: window.store.relatedStudyOpen$,
});

new ExportDicomLayerPopup({
  element: document.querySelector("#irapha-export-dicom-popup"),
  open$: window.store.exportDicomOpen$,
});

// =================================================================

import { DicomWindow } from "../../common/components/dicom-window/index.js";

const dummyViewBox = Array.from({ length: 10 }, () => 0).map((_, index) => {
  const dummy = document.createElement("div");
  dummy.classList.add(`index:${index}`);
  return dummy;
});

new DicomWindow({
  element: document.querySelector("#irapha-dicom-window"),
  items: dummyViewBox,
  layout$: window.store.dicomWindowLayout$,
});
