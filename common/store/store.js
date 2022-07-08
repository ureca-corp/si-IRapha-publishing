const rx = rxjs;

// Global State Store
const store = {};

// type of ({x: number, y: number} || null)
store.thumbnailContextMenuOpen$ = new rx.BehaviorSubject();
store.tabsContextMenuOpen$ = new rx.BehaviorSubject();

//
window.store = store;
export default {};
