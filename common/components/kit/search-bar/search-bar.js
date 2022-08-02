import { createElementFromHTML } from "../../../utils/dom/CreateElementFromHTML.js";
import { SearchIcon } from "../../icons/index.js";

const rx = rxjs;

const Template = `
  <form 
    class="irapha-search-container" 
    onsubmit="return false"
  >
  </form>
  `;

export const createSearchBar = (options) => {
  const { onSubmit, onChange } = options;

  const $searchContainer = createElementFromHTML(Template);
  const searchIcon = new SearchIcon({
    options: { events: { onClick: onSubmit } },
  });
  const $searchIcon = searchIcon.getEl();
  const $searchInput = createElementFromHTML(
    `<input 
      class="irapha-search__input uk-search-input" 
      type="search" 
      placeholder="Search"
    >`
  );
  $searchContainer.append(...[$searchIcon, $searchInput]);

  rx.fromEvent($searchInput, "change").subscribe((e) => onChange(e));

  return $searchContainer;
};
