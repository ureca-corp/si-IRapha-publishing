import { createElementFromHTML } from "../../../utils/dom/index.js";
import { BaseElement } from "../../../components/base/base-element.js";
import { Button } from "../../../components/kit/index.js";

const Selectors = {
  Root: "irapha-mobile__login-page",
  LogoWrapper: "irapha-mobile__login-page__logo-wrapper",
  Logo: "irapha-mobile__login-page__logo",
  LoginButtonWrapper: "irapha-mobile__login-page__login-button-wrapper",
};

export class MobileLoginPage extends BaseElement {
  constructor() {
    super({ $element: new MobileLoginPageComp() });

    this.#initLoginButton();
  }

  #initLoginButton() {
    const { $loginButtonWrapper } = this.#getElements();

    $loginButtonWrapper.appendChild(
      new Button({
        label: "Login",
        variant: "contained",
      })
    );
  }

  #getElements() {
    const $loginButtonWrapper = this.getElementByClassName(
      Selectors.LoginButtonWrapper
    );

    return {
      $loginButtonWrapper,
    };
  }
}

function MobileLoginPageComp() {
  const LogoPath = "../../assets/images/logo.svg";
  const NextDestinationPath = "./study-list.html";

  return createElementFromHTML(`
  <div class="${Selectors.Root}">
    <div class="${Selectors.LogoWrapper}">
      <img 
        class="${Selectors.Logo}"
        src="${LogoPath}" 
        alt="Logo" 
      />
    </div>
    <a 
      class="${Selectors.LoginButtonWrapper}"
      href="${NextDestinationPath}"
    ></a>
  </div>
  `);
}
