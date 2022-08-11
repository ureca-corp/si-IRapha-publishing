import { MenuIcon } from "../../../components/icons/index.js";
import { MobileAppbar } from "./appbar.js";

export function MobileAppbarWithMenu({ title }) {
  return new MobileAppbar({
    title,
    $left: new MenuIcon({
      options: {
        events: {
          onClick: (e) => {
            e.preventDefault();
            e.stopPropagation();

            window.store.appbarContextMenuOpen$.next({
              x: e.clientX,
              y: e.clientY,
            });
          },
        },
      },
    }).getEl(),
  }).getEl();
}
