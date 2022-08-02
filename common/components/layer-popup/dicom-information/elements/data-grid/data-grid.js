import { createElementFromHTML } from "../../../../../utils/dom/CreateElementFromHTML.js";
import { BaseElement } from "../../../../base/index.js";

const Template = `
<div class="uk-table uk-table-divider">
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Tag</th>
        <th>Name</th>
        <th>VR</th>
        <th>Length</th>
        <th>Value</th>
      </tr>
    </thead>

    <tbody></tbody>
  </table>
</div>
`;

export class DataGrid extends BaseElement {
  constructor({ dicomInfoList$ }) {
    super({ $element: createElementFromHTML(Template) });

    dicomInfoList$.subscribe((dicomInfoList) =>
      this.#handleDicomInfoListChange(dicomInfoList)
    );
  }

  #handleDicomInfoListChange(dicomInfoList) {
    const $tbody = this.getEl().querySelector("tbody");
    $tbody.innerHTML = "";

    const $trList = dicomInfoList.map((it) =>
      createTableRow([it.id, it.tag, it.name, it.vr, it.length, it.value])
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
