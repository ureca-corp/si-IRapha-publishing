import { createElementFromHTML } from "../../../../utils/dom/CreateElementFromHTML.js";
import { BaseElement } from "../../../base/index.js";

const Selectors = {
  Root: "irapha-network-status",
  Icon: "irapha-network-status__icon",
};

const StatusType = {
  Green: { className: "--status-green", value: "green" },
  Warning: { className: "--status-warning", value: "warning" },
  Danger: { className: "--status-danger", value: "danger" },
};

const rx = rxjs;

const Unit = "msec";

export class NetworkStatus extends BaseElement {
  static template = `
  <div class="${Selectors.Root}">
    <div class="${Selectors.Icon}"></div>
  </div>
  `;

  #tooltip$ = new rx.BehaviorSubject(`20${Unit}`);
  #status$ = new rx.BehaviorSubject(StatusType.Green);

  constructor() {
    super({ $element: createElementFromHTML(NetworkStatus.template) });

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
    const $iconClassList = this.#getIcon().classList;
    $iconClassList.add(status.className);
  }

  #getIcon() {
    return this.getEl().querySelector(`.${Selectors.Icon}`);
  }
}
