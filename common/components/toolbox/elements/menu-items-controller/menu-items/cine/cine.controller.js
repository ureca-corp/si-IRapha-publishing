const rx = rxjs;

const Selectors = {
  CineMenu: "irapha-menu__cine",
};

export class CineController {
  constructor() {
    const root = document.querySelector(`#${Selectors.CineMenu}`);

    rx.fromEvent(root, "click").subscribe((e) => this.#handleOnClick(e));
  }

  #handleOnClick() {
    const obs$ = window.store.cinePlayControllerHide$;

    const old = obs$.getValue();
    obs$.next(!old);
  }
}
