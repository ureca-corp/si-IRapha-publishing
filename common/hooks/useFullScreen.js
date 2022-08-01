export const useFullScreen = () => {
  const fullScreen = () => document.documentElement.requestFullscreen();
  const exitFullscreen = () => document.exitFullscreen();

  const toggle = () => {
    if (!document.fullscreenElement) return fullScreen();

    if (document.exitFullscreen) return exitFullscreen();
  };

  return {
    fullScreen,
    exitFullscreen,
    toggle,
  };
};
