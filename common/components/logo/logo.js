const $logo = document.querySelector(".irm-logo__logo");
const $maximizeBtn = document.querySelector(".irm-logo__maximize-icon-wrapper");
const $networkStatus = document.querySelector(
  ".irm-logo__network-status-wrapper"
);

// 최대화/최소화 토글
const toggleFullScreen = () => {
  if (!document.fullscreenElement)
    return document.documentElement.requestFullscreen();

  if (document.exitFullscreen) return document.exitFullscreen();
};

// Events
$logo.addEventListener("click", () => {
  alert("logo click");
});

$maximizeBtn.addEventListener("click", toggleFullScreen);
