import { createElementFromHTML } from "../../../../../utils/dom/index.js";
import { BaseElement } from "../../../../base/index.js";
import { CustomContextMenu } from "../../../custom-context-menu/index.js";
import { Selectors as CustomContextMenuSelectors } from "../../../custom-context-menu/index.js";
import { Selectors } from "../../common/index.js";

const rx = rxjs;

const HelpText = `
- label은 쉼표(,)로 구분하며 복수로 표기 가능합니다.\n
- Label 내용에 쉼표(,)가 포함되지 않도록 주의해주세요.\n
- Enter 키를 누르면 작성한 내용이 적용됩니다.
`;

const PlaceHolder = "Label";

const Template = `
<div 
  id="${Selectors.RootId}" 
  class="${Selectors.Root} ${CustomContextMenuSelectors.ContextMenu}">
</div>
`;

export class AnnotationContextMenu extends BaseElement {
  constructor() {
    super({ $element: createElementFromHTML(Template) });

    this.#init();
  }

  #init() {
    const open$ = window.store.annotationContextMenuOpen$;

    new CustomContextMenu({
      $element: this.getEl(),
      open$,
      autoClose: false,
    });

    this.#initInput();
    this.#initMenus();
  }

  #initInput() {
    const template = `
    <div class="${Selectors.InputWrapper}">
      <input 
        class="${Selectors.Input} ${Selectors.UkInput}"
        placeholder="${PlaceHolder}"
      >
      <div title="${HelpText}" style="cursor: help">
      ${svgIcon}
      </div>
    </div>
    `;

    const $template = createElementFromHTML(template);

    this.getEl().append($template);
  }

  #initMenus() {
    const $items = [
      createMenuItem("Delete", {
        onClick: (e) => {
          alert("Todo Delete");
        },
      }),
      createMenuItem("Modify", {
        onClick: (e) => {
          alert("Todo Modify");
        },
      }),
      createMenuItem("Pause", {
        onClick: (e) => {
          alert("Todo Pause");
        },
      }),
    ];

    this.getEl().append(...$items);
  }
}

// =================================================================
const createMenuItem = (label, options) => {
  const template = `
  <div class="${CustomContextMenuSelectors.ContextMenuItem}">${label}</div>
  `;
  const $template = createElementFromHTML(template);

  //
  if (options) {
    const { onClick } = options;

    rx.fromEvent($template, "click").subscribe((e) => onClick(e));
  }

  return $template;
};

const svgIcon = `
<svg 
  width="24" 
  height="24" 
  viewBox="0 0 24 24"
>
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75-.9.92c-.5.51-.86.97-1.04 1.69-.08.32-.13.68-.13 1.14h-2v-.5c0-.46.08-.9.22-1.31.2-.58.53-1.1.95-1.52l1.24-1.26c.46-.44.68-1.1.55-1.8-.13-.72-.69-1.33-1.39-1.53-1.11-.31-2.14.32-2.47 1.27-.12.37-.43.65-.82.65h-.3C8.4 9 8 8.44 8.16 7.88c.43-1.47 1.68-2.59 3.23-2.83 1.52-.24 2.97.55 3.87 1.8 1.18 1.63.83 3.38-.19 4.4z"></path>
</svg>
`;
