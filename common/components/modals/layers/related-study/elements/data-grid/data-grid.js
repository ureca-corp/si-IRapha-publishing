import { createElementFromHTML } from "../../../../../../utils/dom/index.js";
import { BaseElement } from "../../../../../base/index.js";
import { Selectors } from "../../common/index.js";

function DataGridComp() {
  return createElementFromHTML(`
  <div class="${Selectors.DataGrid} uk-table uk-table-divider">
    <table>
      <thead>
        <tr>
          <th>Patient ID</th>
          <th>Study Date</th>
          <th>Accession No</th>
          <th>Study Description</th>
          <th>Modality</th>
          <th>#Ser</th>
          <th>#Ins</th>
        </tr>
      </thead>
  
      <tbody></tbody>
    </table>
  </div>
  `);
}

export class DataGrid extends BaseElement {
  constructor({ studyInfoList$ }) {
    super({ $element: new DataGridComp() });

    studyInfoList$.subscribe((studyInfoList) =>
      this.#handleStudyInfoListChange(studyInfoList)
    );
  }

  #handleStudyInfoListChange(studyInfoList) {
    const $tbody = this.getEl().querySelector("tbody");
    $tbody.innerHTML = "";

    const $trList = studyInfoList.map((it) =>
      createTableRow([
        it.patientId,
        it.studyDate,
        it.accesionNo,
        it.studyDescription,
        it.modality,
        it.ser,
        it.ins,
      ])
    );

    $tbody.append(...$trList);
  }
}

// =================================================================
const createTableRow = (dataArray) => {
  const $tr = document.createElement("tr");
  $tr.innerHTML = dataArray.map((it) => `<td>${it}</td>`).join("");

  return $tr;
};
