export const getOffset = (el) => {
  const bodyRect = document.body.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();

  return {
    top: elRect.top - bodyRect.top,
    left: elRect.left - bodyRect.left,
  };
};
