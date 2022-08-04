import { createElementFromHTML } from "../../../utils/dom/index.js";
import { SearchIcon } from "../../icons/index.js";

const { fromEvent } = rxjs;

export const createSearchBar = (options) => {
  const { onSubmit, onChange } = options;

  const $searchContainer = createElementFromHTML(
    `<form class="irapha-search-container"></form>`
  );

  const $searchIcon = new SearchIcon({
    options: { events: { onClick: onSubmit } },
  }).getEl();

  const $searchInput = createElementFromHTML(
    `<input 
      class="irapha-search__input uk-search-input" 
      type="search" 
      placeholder="Search"
    >`
  );

  $searchContainer.append(...[$searchIcon, $searchInput]);

  fromEvent($searchInput, "change").subscribe((e) => onChange(e));

  return $searchContainer;
};
