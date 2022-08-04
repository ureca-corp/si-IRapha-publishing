import { createElementFromHTML } from "../../../../../utils/dom/index.js";
import {
  createLabelWith,
  createRadioButton,
  createTextInput,
} from "../../../../kit/index.js";
import { Selectors } from "../../common/index.js";
import { getViewModel } from "../../revise-popup.vm.js";

const { fromEvent, tap } = rxjs;
const InputName = "marking";

export const createMarkingSection = () => {
  const { markingValue$ } = getViewModel();

  const $section = createElementFromHTML(`
  <section class="${Selectors.ContentSection}">
    <div class="${Selectors.ContentTitle}">Marking</div>
  </section>
  `);

  const handleValueChange = (value) => markingValue$.next(value);

  const { $label: $labelNone } = createLabelWith({
    title: "None",
    $input: createRadioButton({
      name: InputName,
      value: "None",
      onChange: (e) => handleValueChange(e.target.value),
    }),
  });

  const { $label: $labelR } = createLabelWith({
    title: "R",
    $input: createRadioButton({
      name: InputName,
      value: "R",
      onChange: (e) => handleValueChange(e.target.value),
    }),
  });

  const { $label: $labelL } = createLabelWith({
    title: "L",
    $input: createRadioButton({
      name: InputName,
      value: "L",
      onChange: (e) => handleValueChange(e.target.value),
    }),
  });

  const $labelDirect = createRadioWithLabelWithTextField({
    name: InputName,
    onTextChange: handleValueChange,
  });

  $section.append(...[$labelNone, $labelR, $labelL, $labelDirect]);

  return { $section };
};

const createRadioWithLabelWithTextField = ({ name, onTextChange }) => {
  const $labelDirect = createElementFromHTML(`<label></label>`);
  const $radioDirect = createRadioButton({ name });
  const $inputDirect = createTextInput({
    onChange: (e) => onTextChange(e.target.value),
  });

  fromEvent($labelDirect, "click")
    .pipe(tap(() => $radioDirect.click()))
    .subscribe(() => onTextChange($inputDirect.value));

  $labelDirect.append(...[$radioDirect, $inputDirect]);

  return $labelDirect;
};
