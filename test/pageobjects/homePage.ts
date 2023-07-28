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
    
    const fruit = {
         banaan: {lekker: true, vies: false}  // ASK ICO waarom [] niet mag, en dan als voorbeeld .toContainEqual(item , omdat {} een object literal is ? in TS dus
    }
    
    const objValues = Object.keys(fruit).map(key => fruit[key].value)
    // await expect(category).toContain(expected) ASK ICO DIT OOK, is dit omdat je zegt, ik verwacht dat shirt , de array contained ? terwijl andersom is het ik verwacht dat de array, iig category contained
    await expect(expectedProducts).toContain(category) 
    await (await this.searchCatalogField).click();
    await (await this.searchCatalogField).addValue(category);
    await browser.keys([Key.Enter])
  }

  async validateSearchResult() {
    const results = await $$("a.product-thumbnail img")
    const test = await results[0].getAttribute("alt")
    
    const normaleText = await results[0].getText()
    console.log("ik log nu de attribute " , test)
    // console.log("ik log nu de normale getText " , normaleText)


    const altText =  await results[0].getAttribute('alt')
    console.log("ik log nu de ALT text, niet de beste validatie", altText)

    await expect(altText).toContain("t-shirt")


    const deeperInDom =  await $$('[alt*="shirt"]')
    const textVan = await deeperInDom[0].getAttribute('alt')
    console.log("Ik log nu de constante deeperInDom", textVan)


    await results[0].click()
    
    const productTitle = await $("h1.h1")
    const textProductTitle = await productTitle.getText()

    console.log("this is the productTitle: ", textProductTitle)
    
    
    

  }

  async clickClothesButton() {
    await (await this.clothesButton).click();
  }
}
