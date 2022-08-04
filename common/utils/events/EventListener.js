const { fromEvent, merge, scan } = rxjs;

//
const setOnMouseDragListener = ({ emitter, dragCallback }) => {
  const events = ["mousemove", "mousedown", "mouseup"].map((it) =>
    fromEvent(emitter, it)
  );

  const scanMouseDownEvent = scan(
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

  merge(...events)
    .pipe(scanMouseDownEvent)
    .subscribe(({ dragable, event }) => {
      if (dragable) return dragCallback({ event });
    });
};

//
export { setOnMouseDragListener };
