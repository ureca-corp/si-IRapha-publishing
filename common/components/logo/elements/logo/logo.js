import { createElementFromHTML } from "../../../../utils/dom/index.js";
import { BaseElement } from "../../../base/base-element.js";
import { PinIcon2 } from "../../../icons/pin.icon.js";
import { Selectors, ShrinkType } from "../../common/index.js";
import { FullScreenToggleButton } from "../fullscreen-toggle-button/fullscreen-toggle-button.js";
import { NetworkStatus } from "../network-status/network-status.js";

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
  #states;
  #events;

  constructor({ states, events }) {
    super({ $element: new LogoComp() });

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
    const { $logoWrapper } = this.#getElements();

    $logoWrapper.appendChild(new LogoImage());
  }

  #initMenus() {
    const { onPinClick } = this.#events;
    const { $logoMenus } = this.#getElements();

    const $pinIcon = new PinIcon2({
      options: { events: { onClick: onPinClick } },
    }).getEl();

    const $fullscreenToggleButton = new FullScreenToggleButton().getEl();
    const $networkStatus = new NetworkStatus().getEl();

    $logoMenus.append(...[$pinIcon, $fullscreenToggleButton, $networkStatus]);
  }

  // handlers
  #handleShrinkChange(shrinkDirection) {
    const $root = this.getEl();
    const { Key, Vertical, Horizontal } = ShrinkType;

    switch (shrinkDirection) {
      case Vertical.value:
        return $root.setAttribute(Key, Vertical.value);
      case Horizontal.value:
        return $root.setAttribute(Key, Horizontal.value);
      default:
        return $root.removeAttribute(Key);
    }
  }

  #getElements() {
    const $root = this.getEl();

    const $logoWrapper = $root.querySelector(`.${Selectors.LogoWrapper}`);
    const $logoMenus = $root.querySelector(`.${Selectors.LogoMenus}`);

    return {
      $logoWrapper,
      $logoMenus,
    };
  }
}

// =========================================================================
function LogoComp() {
  return createElementFromHTML(`
  <div class="${Selectors.Logo}">
    <div class="${Selectors.LogoContainer}">
      <div class="${Selectors.LogoWrapper}"></div>

      <ul class="${Selectors.LogoMenus}"></ul>
    </div>
  </div>
  `);
}

function LogoImage() {
  const logoImagePath = "../../assets/images/logo.svg";

  return createElementFromHTML(`
  <img
    class="${Selectors.LogoImage} ${Selectors.UkButton}"
    src="${logoImagePath}"
    alt="logo"
    uk-toggle="target: #irapha-viewer-info-popup"
  />
  `);
}
