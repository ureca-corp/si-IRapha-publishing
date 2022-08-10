import "../../../libs/index.js";
import "../../store/store.js";

import { createElementFromHTML } from "../../utils/dom/CreateElementFromHTML.js";
import { BaseElement } from "../base/index.js";
import { MainLayout } from "../main-layout/index.js";
import {
  AnnotationContextMenu,
  DicomInformationLayerPopup,
  ExportDicomLayerPopup,
  RelatedStudyLayerPopup,
  ReviseLayerPopup,
  TabsContextMenu,
  ThumbnailContextMenu,
  ViewboxContextMenu,
} from "../modals/index.js";
import { StickyMenu } from "../sticky-menu/index.js";
import { ThumbnailBox, ThumbnailSelectors } from "../thumbnail-box/index.js";
import { Toolbox, ToolboxSelectors } from "../toolbox/index.js";
import { ViewerInfoPopup } from "../viewer-info/index.js";
import { VirtualLayout } from "../virtual-layout/index.js";
import { getViewModel } from "./app.vm.js";

const { BehaviorSubject } = rxjs;

export class App extends BaseElement {
  constructor({ $element }) {
    super({ $element });

    this.#init();
  }

  #init() {
    this.#initStickyMenu();
    this.#initGlobalPopupGroup();
  }

  #initStickyMenu() {
    const $root = this.getEl();

    const { thumbnailBoxModel } = getViewModel();

    const toolboxLayoutColumn$ = new BehaviorSubject();
    const thumbnailboxLayoutColumn$ = new BehaviorSubject(true);

    const $toolbox = new Toolbox({
      isLayoutColumn$: toolboxLayoutColumn$,
    }).getEl();

    const $thumbnailBox = new ThumbnailBox({
      isLayoutColumn$: thumbnailboxLayoutColumn$,
      model: thumbnailBoxModel,
    }).getEl();

    const $virtualLayout = new VirtualLayout({
      layout$: window.store.virtualLayoutMode$,
      children: new MainLayout(),
    }).getEl();

    const $stickyMenu = new StickyMenu({
      $top: $toolbox,
      $left: $thumbnailBox,
      $content: $virtualLayout,
      dropCallback: ({ isVertical, hasElement }) => {
        if (hasElement(`.${ToolboxSelectors.Toolbox}`)) {
          toolboxLayoutColumn$.next(isVertical);
        }

        if (hasElement(`.${ThumbnailSelectors.ThumbnailBox}`)) {
          thumbnailboxLayoutColumn$.next(isVertical);
        }
      },
    }).getEl();

    $root.appendChild($stickyMenu);
  }

  #initGlobalPopupGroup() {
    const $root = this.getEl();
    $root.appendChild(new GlobalPopupGroup());
  }
}

// =================================================================
function GlobalPopupGroup() {
  const $globalPopupgroup = createElementFromHTML(
    `<div aria-label="전역 팝업 그룹화"></div>`
  );

  $globalPopupgroup.append(
    ...[
      new ThumbnailContextMenu().getEl(),
      new TabsContextMenu().getEl(),
      new RelatedStudyLayerPopup({
        open$: window.store.relatedStudyOpen$,
      }).getEl(),
      new ExportDicomLayerPopup({
        open$: window.store.exportDicomOpen$,
      }).getEl(),
      new ViewboxContextMenu().getEl(),
      new AnnotationContextMenu().getEl(),
      new ReviseLayerPopup().getEl(),
      new DicomInformationLayerPopup().getEl(),
      new ViewerInfoPopup().getEl(),
    ]
  );

  return $globalPopupgroup;
}
