import BasePage from "./_basePage.js";
import { homePageSelectors } from "../../params.js";
import { Key } from "webdriverio";
import { loginData } from "../../test-data/testData_account.js";


export default class HomePage extends BasePage {
  private get clothesButton(): Promise<WebdriverIO.Element> {
    return $(homePageSelectors.clothesButton);
  }

  private get searchCatalogField(): Promise<WebdriverIO.Element> {
    return $(homePageSelectors.searchCatalaogInputField);
  }

  private get signInButton(): Promise<WebdriverIO.Element> {
    return $(homePageSelectors.signInButton);
  }

  async searchForCatalogProduct(category: string) {
    const expectedProducts = [
        "shirt", 
        "mug"
    ]
    await expect(expectedProducts).toContain(category) 
    await (await this.searchCatalogField).click();
    await (await this.searchCatalogField).addValue(category);
    await browser.keys([Key.Enter]);
  }

  async clickClothesButton() {
    await (await this.clothesButton).click();
  }

  async clickSignIn() {
       await (await this.signInButton).click();
  }
}
