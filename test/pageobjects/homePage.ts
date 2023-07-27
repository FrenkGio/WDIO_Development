import BasePage from "./_basePage.js";
import { homePageSelectors } from "../../params.js";


export default class HomePage extends BasePage {
  private get clothesButton(): Promise<WebdriverIO.Element> {
    return $(homePageSelectors.clothesButton);
  }

  private get searchCatalogField(): Promise<WebdriverIO.Element> {
    return $(homePageSelectors.searchCatalaogInputField);
  }

  async clickSearchCatalog(category: string) {
    // this.expect(category).to.be.oneOf(["Sunglasses", "Contact-lenses", "Frames", "Solutions"], "input not correct, please check the feature file")
    await (await this.searchCatalogField).click();
  }

  async clickClothesButton() {
    await (await this.clothesButton).click();
  }
}
