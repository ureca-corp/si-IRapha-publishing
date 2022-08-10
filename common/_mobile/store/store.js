const { BehaviorSubject } = rxjs;

// Mobile Global State Store
const store = {};

/**
 * Context Menu Popup
 * 컨텍스트 메뉴 오픈 상태
 * type of ({ x: number, y: number } || null)
 */
store.appbarContextMenuOpen$ = new BehaviorSubject(null);

//
window.store = store;

//
export default {};
