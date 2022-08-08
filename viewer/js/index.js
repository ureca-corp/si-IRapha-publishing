import "../../common/store/store.js";
import "../../libs/index.js";

import { App } from "../../common/components/app/app.js";

new App({ $element: document.querySelector("#irapha-app") });

// =================================================================
// 테마 변경 테스트
import { ThemeAttr, useTheme } from "../../common/hooks/index.js";

const { setTheme } = useTheme();
// ThemeAttr.Rose

// 테스트 (동작 확인 후 삭제하기)
(() => {
  // 팝업 오픈 테스트
  document
    .querySelector("#test-annotation-cm")
    .addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      window.store.annotationContextMenuOpen$.next({ x: 400, y: 200 });
    });

  document
    .querySelector("#test-dicom-info-cm")
    .addEventListener("click", () =>
      window.store.dicomInformationsOpen$.next({ x: 400, y: 600 })
    );

  document
    .querySelector("#test-theme-default")
    .addEventListener("click", () => setTheme(null));

  document
    .querySelector("#test-theme-light-blue")
    .addEventListener("click", () => setTheme(ThemeAttr.LightBlue));

  document
    .querySelector("#test-theme-rose")
    .addEventListener("click", () => setTheme(ThemeAttr.Rose));

  document
    .querySelector("#test-theme-sea-foam")
    .addEventListener("click", () => setTheme(ThemeAttr.SeaFoam));
})();
