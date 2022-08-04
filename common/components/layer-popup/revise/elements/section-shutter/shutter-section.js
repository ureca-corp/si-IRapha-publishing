import { createElementFromHTML } from "../../../../../utils/dom/index.js";
import {
  createRadioButton,
  createRangeBar,
  createCheckBox,
} from "../../../../kit/index.js";
import { Selectors } from "../../common/index.js";

export const createShutterSection = () => {
  const $section = createElementFromHTML(`
  <section class="${Selectors.ContentSection}">
    <div class="${Selectors.ContentTitle}">Shutter</div>
  </section>
  `);

  $section.appendChild(createContentInner());

  return {
    $section,
  };
};

const createContentInner = () => {
  const $inner = createElementFromHTML(
    `<div class="${Selectors.ContentInner}"></div>`
  );

  const $shutterLabel = createLabel({
    title: "Shutter",
    $input: createCheckBox({}),
  });

  const $shutterItemContainer = createElementFromHTML(
    `<div class="${Selectors.ContentShutterRow}"></div>`
  );

  const {
    $label: $circleLabel,
    $radioInput: $circleRadioInput,
    $rangeInput: $circleRangeInput,
  } = createRangeBarLabel({ title: "Circle" });
  const {
    $label: $rectLabel,
    $radioInput: $rectRadioInput,
    $rangeInput: $rectRangeInput,
  } = createRangeBarLabel({ title: "Rect" });

  $shutterItemContainer.append(...[$circleLabel, $rectLabel]);

  $inner.append(...[$shutterLabel, $shutterItemContainer]);

  return $inner;
};

const createLabel = ({ title, $input }) => {
  const $label = document.createElement("label");
  const $title = document.createElement("span");
  $title.innerHTML = title;

  $label.append(...[$input, $title]);

  return $label;
};

const createRangeBarLabel = ({ title }) => {
  const InputName = "shutter";

  const $label = document.createElement("label");
  const $radioInput = createRadioButton({ name: InputName });
  const $rangeInput = createRangeBar({ name: InputName });
  const $title = document.createElement("span");
  $title.innerHTML = title;

  $label.append(...[$radioInput, $title, $rangeInput]);

  return {
    $label,
    $radioInput,
    $title,
    $rangeInput,
  };
};
