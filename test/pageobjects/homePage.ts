import BasePage from "./_basePage.js";
import { homePageSelectors } from "../../params.js";




export default class HomePage extends BasePage{

    private get clothesButton(): Promise<WebdriverIO.Element> {
        return $(homePageSelectors.clothesButton)
    }
   
    async clickClothesButton() {
        (await this.clothesButton).click()
    }
    
}
