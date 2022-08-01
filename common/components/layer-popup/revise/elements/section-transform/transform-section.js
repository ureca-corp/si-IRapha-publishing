import { createElementFromHTML } from "../../../../../utils/dom/index.js";
import { Selectors } from "../../common/index.js";
import { createCheckBox } from "../../../../kit/index.js";

export const createTransformSection = () => {
  const template = `
  <div class="${Selectors.ContentSection}">
    <div class="${Selectors.ContentTitle}">Transform</div>
  </div>
  `;

  const $section = createElementFromHTML(template);
  const { $label: $reverseLabel, $input: $reverseCheckBoxInput } =
    createTransformLabel({
      title: "Reverse",
      $input: createCheckBox(),
    });

  const { $label: $flipLabel, $input: $flipCheckBoxInput } =
    createTransformLabel({
      title: "Flip",
      $input: createCheckBox(),
    });

  const { $root: $transformRotateRoot } = createTransformRotate();

  $section.append(...[$reverseLabel, $flipLabel, $transformRotateRoot]);

  return {
    $section,
  };
};

const createTransformRotate = () => {
  const InputName = "transform";

  const template = `
  <div class="${Selectors.ContentRotateRoot}">
    <label>
      <input class="uk-checkbox" type="checkbox" />
      Rotate (CW)
    </label>

    <div class="${Selectors.ContentRotateRow}">
      <label>
        <input class="uk-radio" type="radio" name="${InputName}" />
        90°
      </label>

      <label>
        <input class="uk-radio" type="radio" name="${InputName}" />
        180°
      </label>

      <label>
        <input class="uk-radio" type="radio" name="${InputName}" />
        270°
      </label>
    </div>
  </div>
  `;

  const $root = createElementFromHTML(template);

  return {
    $root,
  };
};

const createTransformLabel = ({ title, $input }) => {
  const $label = document.createElement("label");
  const $title = document.createElement("span");
  $title.innerHTML = title;

  $label.append(...[$input, $title]);

  return { $label, $input };
};
