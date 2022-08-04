import { setOnMouseDragListener } from "../utils/events/EventListener.js";

const handleMouseTracking = (event, $target) => {
  const rect = $target.getBoundingClientRect();
  const style = $target.style;

  style.top = `${rect.top + event.movementY}px`;
  style.bottom = "unset";
  style.left = `${rect.left + event.movementX}px`;
  style.right = "unset";
};

export const useMouseDragTracking = ({ $emitter, $target }) => {
  setOnMouseDragListener({
    emitter: $emitter,
    dragCallback: ({ event }) => handleMouseTracking(event, $target),
  });
};
