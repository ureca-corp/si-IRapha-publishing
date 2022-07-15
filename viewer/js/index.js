import store from "../../common/store/store.js";

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
