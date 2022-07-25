import {} from "../../libs/lodash-4.17.21/lodash.js";
import {} from "../../libs/uikit-3.14.3/js/uikit-icons.min.js";
import {} from "../../libs/uikit-3.14.3/js/uikit.min.js";

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

// =================================================================
import { MainLayout } from "../../common/components/main-layout/main-layout.js";
const createItem = ({ children }) => {
  const div = document.createElement("div");
  div.innerHTML = children;

  return div;
};

const windowData = Array.from({ length: 40 }, (_, index) => ({
  descItems: {
    topLeft: createItem({
      children: `
      O^YEONG SU
      <br/>
      064Y / M
      <br/>
      2019-11-25
      <br/>
      06:26:49
  `,
    }),
    topCenter: "A",
    topRight: createItem({
      children: `
      Test11
      <br/>
      Institution:VHS Medical Center 3T
      <br/>
      tof_cs_acc7.2
      <br/>
      S:5
      <br/>
      I:4
  `,
    }),
    left: createItem({
      children: `
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
      SL: 104.50 / SI: 0.00`,
    }),
    right: "L",
    bottomLeft: createItem({
      children: `
      520 X 576
      <br/>
      Zoom:63.54%
    `,
    }),
    bottomRight: createItem({
      children: `
      Linear
      <br/>
      W:338 L:146
      <br/>
      MANETOM Vida
    `,
    }),
  },
  hasController: index % 2 === 0,
}));

const mainLayout = new MainLayout({
  data: {
    tabsData: [
      {
        id: 1,
        title: "Patient Name 1",
        topDesc: "Patient ID / Age / Sex",
        bottomDesc: "Study Date / Modality / Study description",
      },
      {
        id: 2,
        title: "Patient Name 2",
        topDesc: "Patient ID / Age / Sex",
        bottomDesc: "Study Date / Modality / Study description",
      },
      {
        id: 3,
        title: "Patient Name 3",
        topDesc: "Patient ID / Age / Sex",
        bottomDesc: "Study Date / Modality / Study description",
      },
      {
        id: 4,
        title: "Patient Name 4",
        topDesc: "Patient ID / Age / Sex",
        bottomDesc: "Study Date / Modality / Study description",
      },
    ],
    windowData: windowData,
  },
});

document.querySelector("#testAAA").appendChild(mainLayout.getRootElement());

// =================================================================

class VirtualLayout {
  #$root;
  #$item;

  constructor({ $element, layout$ }) {
    this.#$root = $element;
    this.#$item = this.#$root.querySelector(".irapha-virtual-layout__item");

    layout$.subscribe(({ layout }) => this.#handleLayoutChange(layout));
  }

  #handleLayoutChange(layout) {
    this.#$root.setAttribute("layout", layout);

    if (layout === "vertical") {
    }

    if (layout === "horizontal") {
    }
  }
}

new VirtualLayout({
  $element: document.querySelector("#irapha-virtual-layout"),
  layout$: window.store.virtualLayoutMode$,
});
