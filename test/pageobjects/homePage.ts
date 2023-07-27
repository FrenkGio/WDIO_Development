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
    const expected = [
        "shirt", 
        "mug"
    ]
    
    // await expect(category).toContain(expected) ASK ICO DIT OOK, is dit omdat je zegt, ik verwacht dat shirt , de array contained ? terwijl andersom is het ik verwacht dat de array, iig category contained
    await expect(expected).toContain(category) 
    await (await this.searchCatalogField).click();
    await (await this.searchCatalogField).addValue(category);
    await browser.keys([Key.Enter])
  }

  async clickClothesButton() {
    await (await this.clothesButton).click();
  }
}
