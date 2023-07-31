import BasePage from "./_basePage.js";
import { accountPageSelectors, homePageSelectors } from "../../params.js";
import { Key } from "webdriverio";
import { loginData } from "../../test-data/testData_account.js";

export default class AccountPage extends BasePage {
  private get emailInputField(): Promise<WebdriverIO.Element> {
    return $(accountPageSelectors.emailField);
  }
  
  private get passwordInputField(): Promise<WebdriverIO.Element> {
    return $(accountPageSelectors.passwordField);
  }

  private get signInButton(): Promise<WebdriverIO.Element> {
    return $(accountPageSelectors.signInButton);
  }

  async fillInAccountDetails() {
    await (await this.emailInputField).addValue(loginData.email);
    await (await this.passwordInputField).addValue(loginData.password);
    await (await this.signInButton).click();
  }
}
