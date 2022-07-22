const rx = rxjs;

export const useCustomContextMenu = ({ $emitter, contextMenuOpen$ }) => {
  const openCustomContextMenu = ({ x, y }) => contextMenuOpen$.next({ x, y });

  rx.fromEvent($emitter, "contextmenu", false).subscribe((e) => {
    e.preventDefault();
    openCustomContextMenu({ x: e.clientX, y: e.clientY });
  });
};
