const rx = rxjs;

//
const setOnMouseDragListener = ({ emitter, dragCallback }) => {
  const events = ["mousemove", "mousedown", "mouseup"].map((it) =>
    rx.fromEvent(emitter, it)
  );

  const scanMouseDownEvent = rx.scan(
    (old, event) => {
      switch (event.type) {
        case "mouseup":
          return { dragable: false, event };

        case "mousemove":
          return { dragable: old.dragable, event };

        default:
          return {
            dragable: event.type === "mousedown",
            event,
          };
      }
    },
    { dragable: false, event: undefined }
  );

  rx.merge(...events)
    .pipe(scanMouseDownEvent)
    .subscribe(({ dragable, event }) => {
      if (dragable) return dragCallback({ event });
    });
};

//
export { setOnMouseDragListener };
