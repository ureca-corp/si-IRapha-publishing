const rx = rxjs;

// Global State Store
const store = {};

/**
 * Context Menu Popup
 * type of ({ x: number, y: number } || null)
 */
store.thumbnailContextMenuOpen$ = new rx.BehaviorSubject();
store.tabsContextMenuOpen$ = new rx.BehaviorSubject();
store.viewboxContextMenuOpen$ = new rx.BehaviorSubject();
store.annotationContextMenuOpen$ = new rx.BehaviorSubject();

/**
 * Layer Popup
 * type of ({ x: number, y: number } || null)
 */
store.relatedStudyOpen$ = new rx.BehaviorSubject();
store.exportDicomOpen$ = new rx.BehaviorSubject();
store.reviseOpen$ = new rx.BehaviorSubject();

/**
 * DicomWindow Layout Mode
 * type of (
 *   {
 *     layout: DicomWindow/LayoutAttributeType,
 *     grid: { row: number, col: number} || null
 *   } || null
 * )
 */
store.dicomWindowLayout$ = new rx.BehaviorSubject({ layout: "1:1" });

/**
 * Cine Play Controller - Hide Mode
 * type of boolean
 */
store.cinePlayControllerHide$ = new rx.BehaviorSubject(false);

/**
 * Virtual Layout Mode
 * type of ({ layout: VirtualLayout/LayoutAttributeType } || null)
 */
store.virtualLayoutMode$ = new rx.BehaviorSubject({ layout: "normal" });

//
window.store = store;
export default {};
