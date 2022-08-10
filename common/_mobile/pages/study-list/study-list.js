import "../../store/store.js";

import { createElementFromHTML } from "../../../utils/dom/index.js";
import { BaseElement } from "../../../components/base/base-element.js";
import { MobileAppbar } from "../../components/index.js";
import { MenuIcon } from "../../../components/icons/index.js";
import { Accordion, SelectInput } from "../../../components/kit/index.js";
import {
  CustomTable,
  Tr,
  Th,
  Td,
} from "../../../components/tables/custom-table/custom-table.js";
import { getViewModel } from "./study-list.vm.js";
import { MobileAppbarWithMenu } from "../../components/appbar/with-menu.js";

const Selectors = {
  Root: "irapha-mobile__study-list__root",
  HeaderWrapper: "irapha-mobile__study-list__header-wrapper",
  MainTitle: "irapha-mobile__study-list__main-title",
  HeaderMenuWrapper: "irapha-mobile__study-list__header__menu-wrapper",
  Content: "irapha-mobile__study-list__content",
  SelectWrapper: "irapha-mobile__study-list__select-wrapper",
  TableWrapper: "irapha-mobile__study-list__table-wrapper",
};

export class MobileStudyListPage extends BaseElement {
  #vm = getViewModel();

  constructor() {
    super({ $element: new MobileStudyListPageComp() });

    this.#init();
  }

  #init() {
    this.#initHeader();
    this.#initSelectWrapper();
    this.#initContent();
  }

  #initHeader() {
    const { $headerWrapper } = this.#getElements();
    const $appbar = MobileAppbarWithMenu({ title: "Study List" });

    $headerWrapper.appendChild($appbar);
  }

  #initSelectWrapper() {
    const { selectInputItems } = this.#vm;
    const { $selectWrapper } = this.#getElements();

    $selectWrapper.appendChild(
      new SelectInput({
        items: selectInputItems,
      })
    );
  }

  #initContent() {
    const { tableHeaderItems, studyInfoModels } = this.#vm;
    const { $tableWrapper } = this.#getElements();

    const accordionModel = studyInfoModels
      .map(({ id, name, studyDate, mod, view, ...contentModel }) => ({
        tdModel: {
          id,
          name,
          studyDate,
          mod,
          view,
        },
        contentModel,
      }))
      .map(({ tdModel, contentModel }) => ({
        $title: new Tr(Object.values(tdModel).map((it) => new Td(it))),
        $content: new StudyListDataComp(contentModel),
      }));

    const $customTable = new CustomTable({
      $theadChildren: new Tr(tableHeaderItems.map((it) => new Th(it))),
      $tbodyChildren: new Accordion(accordionModel),
    }).getEl();

    $tableWrapper.appendChild($customTable);
  }

  #getElements() {
    const $headerWrapper = this.getElementByClassName(Selectors.HeaderWrapper);
    const $mainTitle = this.getElementByClassName(Selectors.MainTitle);
    const $headerMenuWrapper = this.getElementByClassName(
      Selectors.HeaderMenuWrapper
    );

    const $selectWrapper = this.getElementByClassName(Selectors.SelectWrapper);
    const $tableWrapper = this.getElementByClassName(Selectors.TableWrapper);

    return {
      $headerWrapper,
      $mainTitle,
      $headerMenuWrapper,
      $selectWrapper,
      $tableWrapper,
    };
  }
}

function MobileStudyListPageComp() {
  return createElementFromHTML(`
  <div class="${Selectors.Root}">
    <header class="${Selectors.HeaderWrapper}"></header>

    <div class="${Selectors.Content}">
      <div class="${Selectors.SelectWrapper}"></div>
      <div class="${Selectors.TableWrapper}"></div>
    </div>
  </div>
  `);
}

function StudyListDataComp({ birthDay, sex, age, studyDesc }) {
  return createElementFromHTML(`
  <div class="irapha-mobile__study-list__data">
    <p>Birthday: ${birthDay}</p>
    <p>Sex: ${sex}</p>
    <p>Age: ${age}</p>
    <p>Study Desc: ${studyDesc}</p>
  </div>
  `);
}
