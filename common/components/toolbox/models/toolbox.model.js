import { parseCustomAttributeOptions } from "/common/utils/IrmOptionParser.js";

// 툴 박스 - 루트 컨테이너
export class ToolboxContainer {
  constructor(element) {
    this._element = element;
  }

  isTypeColumn() {
    const options = this.getOptions();

    if (!options) return false;

    return options.type === "column";
  }

  getOptions() {
    const toolboxOptions = this._element.getAttribute("irm-toolbox");

    if (!toolboxOptions) return null;

    return parseCustomAttributeOptions(toolboxOptions);
  }

  setDirectionColumn() {
    return this._element.classList.add("--type-column");
  }

  removeDirectionColumn() {
    return this._element.classList.remove("--type-column");
  }
}
