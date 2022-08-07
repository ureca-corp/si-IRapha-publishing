import "../../common/store/store.js";
import "../../libs/index.js";

const rx = rxjs;
// =================================================================
import { ThumbnailBox } from "../../common/components/thumbnail-box/index.js";
import { Toolbox } from "../../common/components/toolbox/index.js";

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
const $stickyMenu = new StickyMenu({
  dropCallback: ({ isVertical, hasElement }) => {
    if (hasElement(".irapha-toolbox")) {
      toolboxLayoutColumn$.next(isVertical);
    }

    if (hasElement(".irapha-thumbnail-box")) {
      thumbnailboxLayoutColumn$.next(isVertical);
    }
  },
}).getEl();

document.querySelector("#irapha-app").appendChild($stickyMenu);

document
  .querySelector(".irapha-sticky-menu__dropzone[position='top']")
  .appendChild(toolbox.getEl());

document
  .querySelector(".irapha-sticky-menu__dropzone[position='left']")
  .appendChild(thumbnailBox.getEl());

// =================================================================

import {
  TabsContextMenu,
  ThumbnailContextMenu,
} from "../../common/components/modals/index.js";

const $thumbnailContextMenu = new ThumbnailContextMenu().getEl();
document
  .querySelector("#global-popup-group")
  .appendChild($thumbnailContextMenu);

const $tabsContextMenu = new TabsContextMenu().getEl();
document.querySelector("#global-popup-group").appendChild($tabsContextMenu);

// =================================================================
import { ExportDicomLayerPopup } from "../../common/components/modals/index.js";

import { RelatedStudyLayerPopup } from "../../common/components/modals/index.js";

const relatedStudyLayerPopup = new RelatedStudyLayerPopup({
  open$: window.store.relatedStudyOpen$,
});
document
  .querySelector("#global-popup-group")
  .appendChild(relatedStudyLayerPopup.getEl());

const exportDicomLayerPopup = new ExportDicomLayerPopup({
  open$: window.store.exportDicomOpen$,
});

document
  .querySelector("#global-popup-group")
  .appendChild(exportDicomLayerPopup.getEl());

// =================================================================
import { ViewboxContextMenu } from "../../common/components/modals/index.js";

const viewboxContextMenu = new ViewboxContextMenu();

document
  .querySelector("#global-popup-group")
  .appendChild(viewboxContextMenu.getEl());

// =================================================================
import { MainLayout } from "../../common/components/main-layout/main-layout.js";

const mainLayout = new MainLayout();

// =================================================================
import { VirtualLayout } from "../../common/components/virtual-layout/index.js";
const virtualLayout = new VirtualLayout({
  layout$: window.store.virtualLayoutMode$,
  children: mainLayout,
});

document.querySelector("#testBBB").appendChild(virtualLayout.getEl());

// =================================================================
import { AnnotationContextMenu } from "../../common/components/modals/index.js";

const annotationContextMenu = new AnnotationContextMenu();
document
  .querySelector("#global-popup-group")
  .appendChild(annotationContextMenu.getEl());

window.store.annotationContextMenuOpen$.next({ x: 200, y: 200 });

// =================================================================
import { ReviseLayerPopup } from "../../common/components/modals/index.js";
const reviseLayerPopup = new ReviseLayerPopup();
document
  .querySelector("#global-popup-group")
  .appendChild(reviseLayerPopup.getEl());

// =================================================================
import { DicomInformationLayerPopup } from "../../common/components/modals/index.js";
const dicomInfoLayerPopup = new DicomInformationLayerPopup();
document
  .querySelector("#global-popup-group")
  .appendChild(dicomInfoLayerPopup.getEl());
window.store.dicomInformationsOpen$.next({ x: 400, y: 600 });

// =================================================================
import { ViewerInfoPopup } from "../../common/components/viewer-info/index.js";
const $viewerInfoPopup = new ViewerInfoPopup().getEl();
document.querySelector("#global-popup-group").appendChild($viewerInfoPopup);
