import "../../store/store.js";

import { BaseElement } from "../../../components/base/base-element.js";
import { DicomViewBox } from "../../../components/dicom-viewbox/index.js";
import {
  PanningIcon,
  ReportIcon,
  WindowLevelIcon,
} from "../../../components/icons/index.js";
import { BottomSheet } from "../../../components/modals/index.js";
import { Tabs } from "../../../components/tabs/index.js";
import { ThumbnailList } from "../../../components/thumbnail-box/index.js";
import { createElementFromHTML } from "../../../utils/dom/index.js";
import { MobileAppbarWithMenu } from "../../components/appbar/with-menu.js";
import { getViewModel } from "./viewer.vm.js";
import { MobileViewerBottom } from "./viewer.bottom.js";

const Selectors = {
  Root: "irapha-mobile__viewer__root",
  HeaderWrapper: "irapha-mobile__viewer__header-wrapper",
  Content: "irapha-mobile__viewer__content",
  StudyInfoWrapper: "irapha-mobile__viewer__study-info-wrapper",
  ThumbnailListWrapper: "irapha-mobile__viewer__thumbnail-list-wrapper",
  ViewBoxWrapper: "irapha-mobile__viewer__viewbox-wrapper",
  BottomWrapper: "irapha-mobile__viewer__bottom-wrapper",

  StudyInfo: "irapha-mobile__viewer__study-info",
  StudyInfoDesc: "irapha-mobile__viewer__study-info__desc",
};

export class MobileViewerPage extends BaseElement {
  #vm = getViewModel();

  constructor() {
    super({ $element: new MobileViewerPageComp() });

    this.#init();
  }

  #init() {
    this.#initHeader();
    this.#initStudyInfo();
    this.#initThumbnailBox();
    this.#initViewBox();
    this.#initBottom();
  }

  #initHeader() {
    const { $headerWrapper } = this.#getElements();

    $headerWrapper.appendChild(
      new MobileAppbarWithMenu({ title: "Patient Name" })
    );
  }

  #initStudyInfo() {
    const { $studyInfoWrapper } = this.#getElements();
    const { studyInfoModel } = this.#vm;

    $studyInfoWrapper.appendChild(new StudyInfoComp(studyInfoModel));
  }

  #initThumbnailBox() {
    const { $thumbnailListWrapper } = this.#getElements();
    const { thumbnailModels } = this.#vm;

    const $thumbnailBox = new ThumbnailList({
      models: thumbnailModels,
    }).getEl();

    $thumbnailListWrapper.appendChild($thumbnailBox);
  }

  #initViewBox() {
    const { $viewBoxWrapper } = this.#getElements();
    const { dicomViewBoxModel } = this.#vm;

    const $dicomViewBox = new DicomViewBox(dicomViewBoxModel).getEl();

    $viewBoxWrapper.appendChild($dicomViewBox);
  }

  #initBottom() {
    const { $bottomWrapper } = this.#getElements();
    $bottomWrapper.appendChild(new ViewerBottom());
  }

  #getElements() {
    const $headerWrapper = this.getElementByClassName(Selectors.HeaderWrapper);
    const $content = this.getElementByClassName(Selectors.Content);
    const $studyInfoWrapper = this.getElementByClassName(
      Selectors.StudyInfoWrapper
    );
    const $thumbnailListWrapper = this.getElementByClassName(
      Selectors.ThumbnailListWrapper
    );
    const $viewBoxWrapper = this.getElementByClassName(
      Selectors.ViewBoxWrapper
    );
    const $bottomWrapper = this.getElementByClassName(Selectors.BottomWrapper);

    return {
      $headerWrapper,
      $content,
      $studyInfoWrapper,
      $thumbnailListWrapper,
      $viewBoxWrapper,
      $bottomWrapper,
    };
  }
}

function MobileViewerPageComp() {
  return createElementFromHTML(`
  <div class="${Selectors.Root}">
    <header class="${Selectors.HeaderWrapper}"></header>

    <div class="${Selectors.Content}">
      <div class="${Selectors.StudyInfoWrapper}"></div>
      <div class="${Selectors.ThumbnailListWrapper}"></div>
      <div class="${Selectors.ViewBoxWrapper}"></div>
      <div class="${Selectors.BottomWrapper}"></div>
    </div>
  </div>`);
}

function StudyInfoComp({ birthDay, sex, age, studyDesc }) {
  return createElementFromHTML(`
  <div class="${Selectors.StudyInfo}">
    <p class="${Selectors.StudyInfoDesc}">Birth: ${birthDay} / Sex: ${sex} / Age: ${age}</p>
    <p class="${Selectors.StudyInfoDesc}">Study Desc: ${studyDesc}</p>
  </div>
  `);
}

function ViewerBottom() {
  const open$ = new rxjs.BehaviorSubject(false);

  const $bottomSheet = new BottomSheet({
    $children: new MobileViewerBottom({
      onReportClick: () => open$.next(!open$.getValue()),
      isVisibleContent$: open$,
    }).getEl(),
    open$,
  }).getEl();

  return $bottomSheet;
}
