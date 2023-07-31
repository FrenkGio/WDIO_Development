import { Given, When, Then } from "@wdio/cucumber-framework";
import HomePage from "../pageobjects/homePage.js";

const homePage = new HomePage()

Given(/^The user is on the homepage$/, async () => {
  await homePage.openValoriWebshop();
  await homePage.checkTitle();
  // await homePage.clickClothesButton();
  // await homePage.waitButKeepTheTestAlive(); 
});


When(/^The user searches for "(.*?)" as a product$/, async (category: string) => {
	await homePage.clickSearchCatalog(category);
  await homePage.validateSearchResult(category);
  // await homePage.waitButKeepTheTestAlive(); 
});
