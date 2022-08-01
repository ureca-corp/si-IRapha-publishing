import { createElementFromHTML } from "../../../../../utils/dom/index.js";
import {
  createLabelWith,
  createRadioButton,
  createTextInput,
} from "../../../../kit/index.js";
import { Selectors } from "../../common/index.js";

export const createMarkingSection = () => {
  const InputName = "marking";

  const template = `
  <section class="${Selectors.ContentSection}">
    <div class="${Selectors.ContentTitle}">Marking</div>
  </section>
  `;

  const $section = createElementFromHTML(template);

  const { $label: $labelNone, $input: $labelNoneInput } = createLabelWith({
    title: "None",
    $input: createRadioButton({ name: InputName }),
  });

  const { $label: $labelR, $input: $labelRInput } = createLabelWith({
    title: "R",
    $input: createRadioButton({ name: InputName }),
  });

  const { $label: $labelL, $input: $labelLInput } = createLabelWith({
    title: "L",
    $input: createRadioButton({ name: InputName }),
  });

  const {
    $label: $labelDirect,
    $radio: $radioDirect,
    $input: $inputDirect,
  } = createRadioWithLabelWithTextField({
    name: InputName,
  });

  $section.append(...[$labelNone, $labelR, $labelL, $labelDirect]);

  return { $section };
};

const createRadioWithLabelWithTextField = ({ name }) => {
  const $labelDirect = createElementFromHTML(`<label></label>`);
  const $radioDirect = createRadioButton({ name });
  const $inputDirect = createTextInput();

  $labelDirect.append(...[$radioDirect, $inputDirect]);

  return {
    $label: $labelDirect,
    $radio: $radioDirect,
    $input: $inputDirect,
  };
};
