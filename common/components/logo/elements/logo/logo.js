import { createElementFromHTML } from "../../../../utils/dom/CreateElementFromHTML.js";
import { BaseElement } from "../../../base/base-element.js";
import { PinIcon2 } from "../../../icons/pin.icon.js";
import { Selectors, ShrinkClassType, ShrinkType } from "../../common/index.js";
import { FullScreenToggleButton } from "../fullscreen-toggle-button/fullscreen-toggle-button.js";
import { NetworkStatus } from "../network-status/network-status.js";

const rx = rxjs;

/**
 * Constructor types
 *
 * @type states: {
 *   shrinkDirection$: BehaviorSubject<ShrinkType>
 * }
 *
 * @type events: {
 *   onPinClick: () => void
 * }
 */
export class Logo extends BaseElement {
  static template = `
  <div class="${Selectors.Logo}">
    <div class="${Selectors.LogoContainer}">
      <div class="${Selectors.LogoWrapper}"></div>

      <ul class="${Selectors.LogoMenus}"></ul>
    </div>
  </div>
  `;

  #states;
  #events;

  constructor({ states, events }) {
    super({ $element: createElementFromHTML(Logo.template) });

    this.#states = states;
    this.#events = events;
    this.#init();
  }

  // private
  #init() {
    this.#initStates();

    this.#initLogoImage();
    this.#initMenus();
  }

  #initStates() {
    const { shrinkDirection$ } = this.#states;

    shrinkDirection$.subscribe((shrinkDirection) =>
      this.#handleShrinkChange(shrinkDirection)
    );
  }

  #initLogoImage() {
    this.#getLogoWrapper().appendChild(createLogoImage());
  }

  #initMenus() {
    const { onPinClick } = this.#events;

    const pinIcon = new PinIcon2({
      states: { isActive$: new rx.BehaviorSubject(true) },
      options: { events: { onClick: onPinClick } },
    });

    const $pinIcon = pinIcon.getRootElement();
    const $fullscreenToggleButton =
      new FullScreenToggleButton().getRootElement();
    const $networkStatus = new NetworkStatus().getRootElement();

    this.#getElementOfMenus().append(
      ...[$pinIcon, $fullscreenToggleButton, $networkStatus]
    );
  }

  #getLogoWrapper() {
    return this.getRootElement().querySelector(`.${Selectors.LogoWrapper}`);
  }

  #getElementOfMenus() {
    return this.getRootElement().querySelector(`.${Selectors.LogoMenus}`);
  }

  #removeAllShrink() {
    const rootClassList = this.getRootElement().classList;

    rootClassList.remove(ShrinkClassType.Column);
    rootClassList.remove(ShrinkClassType.Row);
  }

  // handler
  #handleShrinkChange(shrinkDirection) {
    const rootClassList = this.getRootElement().classList;

    this.#removeAllShrink();

    if (shrinkDirection === ShrinkType.Vertical)
      return rootClassList.add(ShrinkClassType.Column);

    if (shrinkDirection === ShrinkType.Horizontal)
      return rootClassList.add(ShrinkClassType.Row);
  }
}

// =========================================================================
const createLogoImage = () => {
  const template = `
  <img
    class="${Selectors.LogoImage} ${Selectors.UkButton}"
    src="../../assets/images/logo.svg"
    alt="logo"
    uk-toggle="target: #irapha-viewer-info-popup"
  />
  `;

  return createElementFromHTML(template);
};
