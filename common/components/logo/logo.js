const $maximizeBtn = document.querySelector(".irm-logo__maximize-icon-wrapper");

// 최대화/최소화 토글
const toggleFullScreen = () => {
  if (!document.fullscreenElement)
    return document.documentElement.requestFullscreen();

  if (document.exitFullscreen) return document.exitFullscreen();
};

$maximizeBtn.addEventListener("click", toggleFullScreen);
