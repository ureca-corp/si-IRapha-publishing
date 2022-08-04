import { createElementFromHTML } from "../../../../../utils/dom/index.js";
import { BaseElement } from "../../../../base/index.js";
import { Selectors } from "../../common/index.js";

const $root = createElementFromHTML(`
<div class="${Selectors.UserInfo}">
  <div class="${Selectors.UserInfoRow}">
    <dl class="${Selectors.UserInfoItem}">
      <dt class="${Selectors.UserInfoTitle}">Name</dt>
      <dd class="${Selectors.UserInfoData}" data-name="name"></dd>
    </dl>

    <dl class="${Selectors.UserInfoItem}">
      <dt class="${Selectors.UserInfoTitle}">ID</dt>
      <dd class="${Selectors.UserInfoData}" data-name="patientId"></dd>
    </dl>

    <dl class="${Selectors.UserInfoItem}">
      <dt class="${Selectors.UserInfoTitle}">Gender</dt>
      <dd class="${Selectors.UserInfoData}" data-name="gender"></dd>
    </dl>
  </div>

  <div class="${Selectors.UserInfoRow}">
    <dl class="${Selectors.UserInfoItem}">
      <dt class="${Selectors.UserInfoTitle}">Date</dt>
      <dd class="${Selectors.UserInfoData}" data-name="studyDate"></dd>
    </dl>

    <dl class="${Selectors.UserInfoItem}">
      <dt class="${Selectors.UserInfoTitle}">
        Modalityality
      </dt>
      <dd class="${Selectors.UserInfoData}" data-name="modality"></dd>
    </dl>

    <dl class="${Selectors.UserInfoItem}">
      <dt class="${Selectors.UserInfoTitle}">Desc</dt>
      <dd class="${Selectors.UserInfoData}" data-name="description"></dd>
    </dl>
  </div>
</div>
`);

export class UserInfo extends BaseElement {
  constructor({ currentStudy$ }) {
    super({ $element: $root });

    currentStudy$.subscribe((currentStudy) =>
      this.#handleCurrentStudy(currentStudy)
    );
  }

  #handleCurrentStudy(currentStudy) {
    if (!currentStudy) return;

    const { $name, $patientId, $gender, $studyDate, $modality, $description } =
      useElements();

    $name.innerHTML = currentStudy.name;
    $patientId.innerHTML = currentStudy.patientId;
    $gender.innerHTML = currentStudy.gender;
    $studyDate.innerHTML = currentStudy.studyDate;
    $modality.innerHTML = currentStudy.modality;
    $description.innerHTML = currentStudy.studyDescription;
  }
}

const useElements = () => {
  const $name = $root.querySelector("[data-name='name']");
  const $patientId = $root.querySelector("[data-name='patientId']");
  const $gender = $root.querySelector("[data-name='gender']");
  const $studyDate = $root.querySelector("[data-name='studyDate']");
  const $modality = $root.querySelector("[data-name='modality']");
  const $description = $root.querySelector("[data-name='description']");

  return {
    $name,
    $patientId,
    $gender,
    $studyDate,
    $modality,
    $description,
  };
};
