import BasePage from "./_basePage.js";
import { homePageSelectors } from "../../params.js";
import { Key } from "webdriverio";


export default class HomePage extends BasePage {
  private get clothesButton(): Promise<WebdriverIO.Element> {
    return $(homePageSelectors.clothesButton);
  }

  private get searchCatalogField(): Promise<WebdriverIO.Element> {
    return $(homePageSelectors.searchCatalaogInputField);
  }

  async clickSearchCatalog(category: string) {
    // await expect(category).toContain(["shirt" , "mug"]) ASK ICO
    const expectedProducts = [
        "shirt", 
        "mug"
    ]
    await expect(expectedProducts).toContain(category) 
    await (await this.searchCatalogField).click();
    await (await this.searchCatalogField).addValue(category);
    await browser.keys([Key.Enter])
  }

  async validateSearchResult(category: string) {
    const results = await $$("a.product-thumbnail img")
    const attributeText = await results[0].getAttribute("alt")
    await expect(attributeText).toContain(category)
  }

  async clickClothesButton() {
    await (await this.clothesButton).click();
  }
}
