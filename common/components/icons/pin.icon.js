import { BaseIcon2 } from "./base/icon.js";

export class PinIcon extends BaseIcon2 {
  constructor({ states, options }) {
    super({ states, options });

    const $root = this.getEl();

    $root.innerHTML = svgIcon;

    const { isActive$ } = states;
    isActive$?.subscribe((isActive) => {
      isActive
        ? ($root.style.transform = "rotate(-45deg)")
        : ($root.style.transform = "unset");
    });

    const { draggable } = options;
    if (draggable) $root.setAttribute("draggable", draggable);
  }
}

const svgIcon = `
<svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    baseProfile="tiny"
    version="1.2"
    viewBox="0 0 24 24"
    transform="scale(0.8)"
>
    <path
        d="M16.729 4.271a1 1 0 0 0-1.414-.004 1.004 1.004 0 0 0-.225.355c-.832 1.736-1.748 2.715-2.904 3.293C10.889 8.555 9.4 9 7 9a1.006 1.006 0 0 0-.923.617 1.001 1.001 0 0 0 .217 1.09l3.243 3.243L5 20l6.05-4.537 3.242 3.242a.975.975 0 0 0 .326.217c.122.051.252.078.382.078s.26-.027.382-.078A.996.996 0 0 0 16 18c0-2.4.444-3.889 1.083-5.166.577-1.156 1.556-2.072 3.293-2.904a.983.983 0 0 0 .354-.225 1 1 0 0 0-.004-1.414l-3.997-4.02z"
    />
</svg>
`;
