import { createElementFromHTML } from "../../../utils/dom/index.js";

const { fromEvent } = rxjs;

export function SelectInput({ items, onChange }) {
  const $select = createElementFromHTML(`
  <select class="irapha-select uk-select"></select>
  `);

  const $options = items.map((it) => createSelectorItem(it));

  $select.append(...$options);

  fromEvent($select, "change").subscribe((e) => onChange(e));

  return $select;
}

const createSelectorItem = (children) => {
  return createElementFromHTML(`<option>${children}</option>`);
};
