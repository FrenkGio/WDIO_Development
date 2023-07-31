import { Given, When, Then } from "@wdio/cucumber-framework";
import HomePage from "../pageobjects/homePage.js";

const homePage = new HomePage()

Given(/^The user is on the homepage$/, async () => {
  await homePage.openValoriWebshop();
  await homePage.checkTitle();
});


When(/^The user searches for "(.*?)" as a product$/, async (category: string) => {
	await homePage.searchForCatalogProduct(category);
  await homePage.validateSearchResult(category);
});


