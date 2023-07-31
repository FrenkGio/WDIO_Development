import BasePage from "./_basePage.js";
import { accountPageSelectors, homePageSelectors } from "../../params.js";
import { Key } from "webdriverio";
import { loginData, signUpData } from "../../test-data/testData_account.js";
import { test } from "node:test";

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

  private get signOutButton(): Promise<WebdriverIO.Element> {
    return $(accountPageSelectors.signOutButton);
  }

  private get createNewAccountLink(): Promise<WebdriverIO.Element> {
    return $(accountPageSelectors.createNewAccountLink);
  }
  private get selectSocialTitle(): Promise<WebdriverIO.Element> {
    return $(accountPageSelectors.createAccount.socialTitleButton);
  }
  private get fillInFirstName(): Promise<WebdriverIO.Element> {
    return $(accountPageSelectors.createAccount.firstNameField);
  }
  private get fillInLastName(): Promise<WebdriverIO.Element> {
    return $(accountPageSelectors.createAccount.lastNameField);
  }
  private get fillInEmail(): Promise<WebdriverIO.Element> {
    return $(accountPageSelectors.createAccount.emailField);
  }
  private get fillInPassword(): Promise<WebdriverIO.Element> {
    return $(accountPageSelectors.createAccount.passwordField);
  }
  private get fillInDOB(): Promise<WebdriverIO.Element> {
    return $(accountPageSelectors.createAccount.DOBField);
  }
  private get signUpForNewsletter(): Promise<WebdriverIO.Element> {
    return $(accountPageSelectors.createAccount.signUpForNewsletterButton);
  }
  private get saveAndSubmit(): Promise<WebdriverIO.Element> {
    return $(accountPageSelectors.createAccount.saveButton);
  }

  async fillInAccountDetails() {
    await (await this.emailInputField).addValue(loginData.email);
    await (await this.passwordInputField).addValue(loginData.password);
    await (await this.signInButton).click();
  }

  async verifyUserIsLoggedIn(){
    await (await this.signOutButton).waitForDisplayed({timeout:5000, timeoutMsg:"Expected to see the sign out button"})
  }

  async createNewAccount() {
    await (await this.createNewAccountLink).click()
    await (await this.selectSocialTitle).click()
    await (await this.fillInFirstName).addValue(signUpData.firstName);
    await (await this.fillInLastName).addValue(signUpData.lastName);
    await (await this.fillInEmail).addValue(signUpData.email);
    await (await this.fillInPassword).addValue(signUpData.password);
    await (await this.fillInDOB).addValue(signUpData.DOB);
    await (await this.signUpForNewsletter).click();
    await (await this.saveAndSubmit).click();
  }

}
