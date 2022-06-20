import {
  ToolboxContainer,
  ToolboxMenu,
  ToolboxFoldingIcon,
} from "/common/components/toolbox/models/index.js";

const toolbox = new ToolboxContainer(document.querySelector(".irm-toolbox"));
const toolboxMenu = new ToolboxMenu(
  document.querySelector(".irm-toolbox__menu-wrapper")
);
const foldingIcon = new ToolboxFoldingIcon(
  document.querySelector(".irm-toolbox__folding-icon")
);

// init
toolboxMenu.initMenu();
foldingIcon.shrink();

// 툴 박스 - 레이아웃 타입 처리.
if (toolbox.isTypeColumn()) {
  toolbox.setDirectionColumn();
  toolboxMenu.setContainerTypeColumn();
} else {
  toolbox.removeDirectionColumn();
  toolboxMenu.removeContainerTypeColumn();
}

// 폴딩 아이콘 이벤트 처리.
foldingIcon.getDomElement().addEventListener("click", () => {
  const isExpand = foldingIcon.isExpand();

  if (isExpand) {
    foldingIcon.shrink();
    toolboxMenu.visible();
  } else {
    foldingIcon.expand();
    toolboxMenu.hide();
  }
});
