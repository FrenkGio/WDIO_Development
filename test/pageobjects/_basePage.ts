import logger from "@wdio/logger";
import { homePageSelectors } from "../../params.js";
export default class BasePage {
  public log = logger("test-framework");

  private get searchResults(): Promise<WebdriverIO.Element[]> {
    return $$(homePageSelectors.searchResults);
  }

  public unitLogTest() {
    console.log("Console log fubar ");
    this.log.info("WDIO LOG LEVEL info log fubar");
  }

  public openValoriWebshop() {
    return browser.url("https://webshop.mobiletestautomation.nl/");
  }

  async checkTitle() {
    const title = (await browser.getTitle());
    this.log.info("This is the title of the URL:", title);
  }

  async waitForPageToLoad() {
    await browser.waitUntil(
      async () =>
        await browser.execute(
          async () => (await document.readyState) === "complete"
        ),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Oops! Page is not loaded. ",
      }
    );
  }

  async delay(ms: number) {
    return await new Promise(async (resolve) => await setTimeout(resolve, ms));
  }

  async waitButKeepTheTestAlive(): Promise<void> {
    await this.waitForXSeconds(30, 3000);
  }

  async waitForXSeconds(seconds: number, interval: number = 3000) {
    let i: number = 0;
    do {
      await browser.getTitle();
      await this.delay(interval);
      console.log(
        `Test is still alive, ${
          seconds * (interval / 1000) - i * (interval / 1000)
        } seconds remaining for this wait step`
      );
      i++;
    } while (i < seconds);
  }

  async validateSearchResult(category: string) {
    const attributeText = await this.searchResults[0].getAttribute("alt")
    await expect(attributeText).toContain(category)
  }

  async generateRandomEmail(): Promise<string> {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const randomInt = Math.floor(Math.random() * 1000);
    const randomLetter1 = letters.charAt(Math.floor(Math.random() * letters.length));
    const randomLetter2 = letters.charAt(Math.floor(Math.random() * letters.length));
  
    const randomEmail = `user${randomLetter1}${randomLetter2}${randomInt}@example.com`;
    return randomEmail;
    
  }
  async logRandomEmail(){
  const randomEmail = await this.generateRandomEmail();
  this.log.info("The random email generated is: ", randomEmail)
  }
}
