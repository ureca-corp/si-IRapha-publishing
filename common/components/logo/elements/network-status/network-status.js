import { createElementFromHTML } from "../../../../utils/dom/index.js";
import { BaseElement } from "../../../base/index.js";

const { BehaviorSubject } = rxjs;

const Selectors = {
  Root: "irapha-network-status",
  Icon: "irapha-network-status__icon",
};

function NetworkStatusComp() {
  return createElementFromHTML(`
  <div class="${Selectors.Root}">
    <div class="${Selectors.Icon}"></div>
  </div>
  `);
}

const StatusType = {
  Green: "green",
  Warning: "warning",
  Danger: "danger",
};

const Unit = "msec";

export class NetworkStatus extends BaseElement {
  #tooltip$ = new BehaviorSubject(`20${Unit}`);
  #status$ = new BehaviorSubject(StatusType.Green);

  constructor() {
    super({ $element: new NetworkStatusComp() });

    this.#init();
  }

  // private
  #init() {
    this.#initStates();
  }

  #initStates() {
    this.#tooltip$.subscribe((tooltip) => this.#handleTooltipChange(tooltip));
    this.#status$.subscribe((status) => this.#handleStatusChange(status));
  }

  #handleTooltipChange(tooltip) {
    const $root = this.getEl();
    $root.setAttribute("title", tooltip);
  }

  #handleStatusChange(status) {
    const { $icon } = this.#getElements();
    $icon.setAttribute("status", status);
  }

  #getElements() {
    const $root = this.getEl();

    const $icon = $root.querySelector(`.${Selectors.Icon}`);

    return {
      $icon,
    };
  }
}
