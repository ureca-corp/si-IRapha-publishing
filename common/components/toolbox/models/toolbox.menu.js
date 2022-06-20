// 툴박스 - 메뉴 컨테이너
export class ToolboxMenu {
  constructor(element) {
    this._element = element;
  }

  getDomElement() {
    return this._element;
  }

  visible() {
    this._element.classList.remove("--hide");
  }

  hide() {
    this._element.classList.add("--hide");
  }

  setContainerTypeColumn() {
    document.querySelectorAll(".irm-toolbox__menu").forEach((it) => {
      it.classList.add("--column-two");
    });
  }

  removeContainerTypeColumn() {
    document.querySelectorAll(".irm-toolbox__menu").forEach((it) => {
      it.classList.remove("--column-two");
    });
  }

  initMenu() {
    document.querySelectorAll(".irm-toolbox__menu").forEach((menu) => {
      menu.querySelectorAll(".irm-toolbox__item").forEach(($li) => {
        const $content = $li.querySelector(".irm-toolbox__item__content");
        const $popup = $li.querySelector(".irm-toolbox__popup");

        if (!$content) return;

        if (!!$popup) {
          $content.classList.add("--more");
          $content.classList.add("uk-button-default");
        } else {
          $content.classList.remove("--more");
          $content.classList.remove("uk-button-default");
        }
      });
    });

    this.initPopups();
  }

  initPopups() {
    const $toolboxPopups = document.querySelectorAll(".irm-toolbox__popup");
    $toolboxPopups.forEach((it) => it.setAttribute("uk-drop", "mode:click"));
  }
}
