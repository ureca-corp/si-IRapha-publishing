import { createElementFromHTML } from "../../../../utils/dom/CreateElementFromHTML.js";
import { BaseElement } from "../../../base/base-element.js";
import { LayoutAttr, PositionAttr, Selectors } from "../../common/index.js";
import { Dropzone } from "./dropzone.js";

const { BehaviorSubject, fromEvent, tap, map, filter, of } = rxjs;

/**
 * Constructor types
 *
 * @type dropCallback: ({
 *  isVertical: boolean,
 *  hasElement: (id: string) => boolean
 * }) => boolean
 */

export class StickyMenu extends BaseElement {
  #activeDropzonesDummy$ = new BehaviorSubject(false);

  $top;
  $left;
  $right;
  $bottom;
  $content;

  #dropCallback;

  constructor({ dropCallback, $top, $left, $right, $bottom, $content }) {
    super({ $element: new StickyMenuComp() });

    this.$top = $top;
    this.$left = $left;
    this.$right = $right;
    this.$bottom = $bottom;
    this.$content = $content;
    this.#dropCallback = dropCallback;

    this.#init();
  }

  // private
  #init() {
    this.#initChilds();
    this.#initEvents();
    this.#initDropzones();
  }

  #initChilds() {
    const { $top, $left, $right, $bottom, $content } = this;
    const {
      $dropzoneTop,
      $dropzoneLeft,
      $dropzoneRight,
      $dropzoneBottom,
      $contentWrapper,
    } = this.#getElements();

    $top && $dropzoneTop.appendChild($top);
    $left && $dropzoneLeft.appendChild($left);
    $right && $dropzoneRight.appendChild($right);
    $bottom && $dropzoneBottom.appendChild($bottom);
    $content && $contentWrapper.appendChild($content);
  }

  #initEvents() {
    const $root = this.getEl();

    let $draggedTargetTemp;
    let $oldTargetParentDropzone;

    const isTargetIncludedDropzoneDummy = (target) => {
      const targetClassList = [...target.classList];
      return targetClassList.find((it) => it === Selectors.DropzoneDummy);
    };

    const activeDragMode = () => {
      $draggedTargetTemp.style.opacity = 0.5;
      $oldTargetParentDropzone.style.zIndex = 10;
    };

    const inactiveDragMode = () => {
      $draggedTargetTemp.style.opacity = null;
      $oldTargetParentDropzone.style.zIndex = null;
    };

    const findTargetInDraggableRootEls = ($target) =>
      [...document.querySelectorAll("[draggable-root]")].find(($el) =>
        $el.contains($target)
      );

    // 드래그 시작시
    fromEvent($root, "dragstart", false)
      .pipe(
        tap(() => this.#activeDropzonesDummy$.next(true)),
        map((e) => findTargetInDraggableRootEls(e.target)),
        tap(($draggedTarget) => {
          $draggedTargetTemp = $draggedTarget;
          $oldTargetParentDropzone = $draggedTarget.parentNode;
        }),
        tap(() => activeDragMode())
      )
      .subscribe();

    // 드래그 종료시
    fromEvent($root, "dragend", false)
      .pipe(
        tap(() => this.#activeDropzonesDummy$.next(false)),
        tap(() => inactiveDragMode())
      )
      .subscribe();

    // 드롭 대상에서 이벤트 발생시
    fromEvent($root, "dragover", false).subscribe((e) => e.preventDefault());

    // 드래그 대상이 드랍존에 진입시
    fromEvent($root, "dragenter", false)
      .pipe(
        map((e) => e.target),
        filter(($dummyDropzone) =>
          isTargetIncludedDropzoneDummy($dummyDropzone)
        ),
        tap(({ style }) => (style.background = "#eeeeee33"))
      )
      .subscribe();

    // 드래그 대상이 드랍존에서 탈출 시
    fromEvent($root, "dragleave", false)
      .pipe(
        map((e) => e.target),
        filter(($dummyDropzone) =>
          isTargetIncludedDropzoneDummy($dummyDropzone)
        ),
        tap(({ style }) => (style.background = ""))
      )
      .subscribe();

    // 드래그 대상을 드랍존에 드랍 시
    fromEvent($root, "drop", false)
      .pipe(
        tap((e) => e.preventDefault()),
        map((e) => e.target),
        filter(($dummyDropzone) =>
          isTargetIncludedDropzoneDummy($dummyDropzone)
        ),
        map(({ parentNode }) => new Dropzone({ $element: parentNode })),
        tap((dropzone) =>
          dropzone.drop({
            target: $draggedTargetTemp,
            dropCallback: this.#dropCallback,
          })
        ),
        tap((dropzone) => this.#updateGridLayoutMode({ dropzone }))
      )
      .subscribe();
  }

  #updateGridLayoutMode({ dropzone }) {
    const $root = this.getEl();

    const removeLayoutAttr = () => $root.removeAttribute(LayoutAttr.Key);
    const setLayoutRowFirstAttr = () =>
      $root.setAttribute(LayoutAttr.Key, LayoutAttr.RowFirst);

    of(dropzone)
      .pipe(filter((dropzone) => dropzone.hasHighPriorityChild()))
      .subscribe((dropzone) =>
        dropzone.isTypeVertical() ? setLayoutRowFirstAttr() : removeLayoutAttr()
      );
  }

  #initDropzones() {
    const { $dropzones } = this.#getElements();
    $dropzones.forEach(
      ($element) =>
        new Dropzone({
          $element,
          activeDummy$: this.#activeDropzonesDummy$,
        })
    );
  }

  #getElements() {
    const $root = this.getEl();

    const $dropzoneTop = $root.querySelector(
      `[${PositionAttr.Key}='${PositionAttr.Top}']`
    );
    const $dropzoneLeft = $root.querySelector(
      `[${PositionAttr.Key}='${PositionAttr.Left}']`
    );
    const $dropzoneRight = $root.querySelector(
      `[${PositionAttr.Key}='${PositionAttr.Right}']`
    );
    const $dropzoneBottom = $root.querySelector(
      `[${PositionAttr.Key}='${PositionAttr.Bottom}']`
    );
    const $dropzones = [
      $dropzoneTop,
      $dropzoneLeft,
      $dropzoneRight,
      $dropzoneBottom,
    ];

    const $contentWrapper = this.getElementByClassName(Selectors.Content);

    return {
      $dropzoneTop,
      $dropzoneLeft,
      $dropzoneRight,
      $dropzoneBottom,
      $dropzones,
      $contentWrapper,
    };
  }
}

function StickyMenuComp() {
  return createElementFromHTML(`
  <div class="${Selectors.StickyMenu}">
    <div class="${Selectors.Dropzone}" ${PositionAttr.Key}="${PositionAttr.Top}"></div>

    <div class="${Selectors.Dropzone}" ${PositionAttr.Key}="${PositionAttr.Left}"></div>
    <div class="${Selectors.Dropzone}" ${PositionAttr.Key}="${PositionAttr.Right}"></div>
    <div class="${Selectors.Dropzone}" ${PositionAttr.Key}="${PositionAttr.Bottom}"></div>
    <div class="${Selectors.Content}"></div>
  </div>
  `);
}
