const { BehaviorSubject } = rxjs;

// Global State Store
const store = {};

/**
 * Context Menu Popup
 * 컨텍스트 메뉴 오픈 상태
 * type of ({ x: number, y: number } || null)
 */
store.thumbnailContextMenuOpen$ = new BehaviorSubject(false);
store.tabsContextMenuOpen$ = new BehaviorSubject(false);
store.viewboxContextMenuOpen$ = new BehaviorSubject(false);
store.annotationContextMenuOpen$ = new BehaviorSubject(false);

/**
 * Layer Popup
 * 레이어 팝업 오픈 상태
 * type of ({ x: number, y: number } || null)
 */
store.relatedStudyOpen$ = new BehaviorSubject(false);
store.exportDicomOpen$ = new BehaviorSubject(false);
store.reviseOpen$ = new BehaviorSubject(false);
store.dicomInformationsOpen$ = new BehaviorSubject(false);

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

// Cid Window Popup 오픈
window.openCidWindow = () =>
  window.open("./cid.html", "", "width=800, height=800");

//
window.store = store;

//
export default {};
