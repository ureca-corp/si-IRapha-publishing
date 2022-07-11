const rx = rxjs;

// Global State Store
const store = {};

/**
 * Context Menu Popup
 * type of ({x: number, y: number} || null)
 */
store.thumbnailContextMenuOpen$ = new rx.BehaviorSubject();
store.tabsContextMenuOpen$ = new rx.BehaviorSubject();

/**
 * Layer Popup
 * type of ({x: number, y: number} || null)
 */
store.relatedStudyOpen$ = new rx.BehaviorSubject();

//
window.store = store;
export default {};
