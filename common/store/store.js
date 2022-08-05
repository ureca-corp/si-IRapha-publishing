const { BehaviorSubject } = rxjs;

// Global State Store
const store = {};

/**
 * Context Menu Popup
 * type of ({ x: number, y: number } || null)
 */
store.thumbnailContextMenuOpen$ = new BehaviorSubject();
store.tabsContextMenuOpen$ = new BehaviorSubject();
store.viewboxContextMenuOpen$ = new BehaviorSubject();
store.annotationContextMenuOpen$ = new BehaviorSubject();

/**
 * Layer Popup
 * type of ({ x: number, y: number } || null)
 */
store.relatedStudyOpen$ = new BehaviorSubject();
store.exportDicomOpen$ = new BehaviorSubject();
store.reviseOpen$ = new BehaviorSubject();
store.dicomInformationsOpen$ = new BehaviorSubject();

/**
 * DicomWindow Layout Mode
 * type of (
 *   {
 *     layout: DicomWindow/LayoutAttributeType,
 *     grid: { row: number, col: number} || null
 *   } || null
 * )
 */
store.dicomWindowLayoutMode$ = new BehaviorSubject({ layout: "1:1" });

/**
 * Cine Play Controller - Hide Mode
 * type of boolean
 */
store.cinePlayControllerHide$ = new BehaviorSubject(false);

/**
 * Virtual Layout Mode
 * type of ({ layout: VirtualLayout/LayoutAttributeType } || null)
 */
store.virtualLayoutMode$ = new BehaviorSubject({ layout: "normal" });

//
window.store = store;

//
window.openCidWindow = () =>
  window.open("./cid.html", "", "width=800, height=800");
export default {};
