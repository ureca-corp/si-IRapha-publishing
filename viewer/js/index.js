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
  ExportDicomLayerPopup,
  RelatedStudyLayerPopup,
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

import { DicomViewBox } from "../../common/components/dicom-viewbox/index.js";
import { DicomWindow } from "../../common/components/dicom-window/index.js";

const viewBoxes = Array.from(
  { length: 40 },
  () =>
    new DicomViewBox({
      descItems: {
        topLeft: `<p>
          O^YEONG SU
          <br/>
          064Y / M
          <br/>
          2019-11-25
          <br/>
          06:26:49
        </p>`,
        topCenter: "A",
        topRight: `<p>
          Test11
          <br/>
          Institution:VHS Medical Center 3T
          <br/>
          tof_cs_acc7.2
          <br/>
          S:5
          <br/>
          I:4
        </p>`,
        left: `<p>
          MR
          <br/>
          TE:3.69
          <br/>
          TR: 21.00
          <br/>
          PP: HFS
          <br/>
          ST: 0.50
          <br/>
          SL: 104.50 / SI: 0.00
        </p>`,
        right: "L",
        bottomLeft: `<p>
          520 X 576
          <br/>
          Zoom:63.54%
        </p>`,
        bottomRight: `<p>
          Linear
          <br/>
          W:338 L:146
          <br/>
          MANETOM Vida
        </p>`,
      },
    })
);

new DicomWindow({
  element: document.querySelector("#irapha-dicom-window"),
  items: viewBoxes.map((it) => it.getDomElement()),
  layout$: window.store.dicomWindowLayout$,
});
