import { createElementFromHTML } from "../../../../../../utils/dom/index.js";
import { Selectors } from "../../common/index.js";
import { createCheckBox } from "../../../../../kit/index.js";
import { getViewModel } from "../../revise-popup.vm.js";

const { fromEvent, tap } = rxjs;

export const createTransformSection = () => {
  const { transformReverseChecked$, transformFlipChecked$ } = getViewModel();

  const $section = createElementFromHTML(`
  <div class="${Selectors.ContentSection}">
    <div class="${Selectors.ContentTitle}">Transform</div>
  </div>
  `);

  const { $label: $reverseLabel } = createTransformLabel({
    title: "Reverse",
    $input: createCheckBox({
      checked: transformReverseChecked$.getValue(),
      onChange: (e) => transformReverseChecked$.next(e.target.checked),
    }),
  });

  const { $label: $flipLabel } = createTransformLabel({
    title: "Flip",
    $input: createCheckBox({
      checked: transformFlipChecked$.getValue(),
      onChange: (e) => transformFlipChecked$.next(e.target.checked),
    }),
  });

  const $transformRotateRoot = createTransformRotate();

  $section.append(...[$reverseLabel, $flipLabel, $transformRotateRoot]);

  return {
    $section,
  };
};

const createTransformRotate = () => {
  const InputName = "rotate";

  const { transfromRotateChecked$, rotateValue$ } = getViewModel();

  const $root = createElementFromHTML(`
  <div class="${Selectors.ContentRotateRoot}">
    <label>
      <input class="uk-checkbox" type="checkbox" />
      Rotate (CW)
    </label>

    <div class="${Selectors.ContentRotateRow}">
      <label>
        <input class="uk-radio" type="radio" value="90" name="${InputName}" checked/>
        90°
      </label>

      <label>
        <input class="uk-radio" type="radio" value="180" name="${InputName}" />
        180°
      </label>

      <label>
        <input class="uk-radio" type="radio" value="270" name="${InputName}" />
        270°
      </label>
    </div>
  </div>
  `);

  const $checkbox = $root.querySelector("[type='checkbox']");
  const $rotateOption1 = $root.querySelector("[type='radio'][value='90']");
  const $rotateOption2 = $root.querySelector("[type='radio'][value='180']");
  const $rotateOption3 = $root.querySelector("[type='radio'][value='270']");

  fromEvent($checkbox, "change").subscribe((e) =>
    transfromRotateChecked$.next(e.target.checked)
  );

  fromEvent($rotateOption1, "change")
    .pipe(tap(() => ($checkbox.checked = true)))
    .subscribe((e) => rotateValue$.next(e.target.value));

  fromEvent($rotateOption2, "change")
    .pipe(tap(() => ($checkbox.checked = true)))
    .subscribe((e) => rotateValue$.next(e.target.value));

  fromEvent($rotateOption3, "change")
    .pipe(tap(() => ($checkbox.checked = true)))
    .subscribe((e) => rotateValue$.next(e.target.value));

  return $root;
};

const createTransformLabel = ({ title, $input }) => {
  const $label = document.createElement("label");
  const $title = document.createElement("span");
  $title.innerHTML = title;

  $label.append(...[$input, $title]);

  return { $label, $input };
};
