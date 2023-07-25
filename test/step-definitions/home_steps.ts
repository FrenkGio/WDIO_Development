import { Given, When, Then } from "@wdio/cucumber-framework";
import HomePage from "../pageobjects/homePage.js";

const homePage = new HomePage()

Given(/^The user is on the homepage$/, async () => {
  await homePage.openValoriWebshop();
  await homePage.checkTitle();
  await homePage.clickClothesButton();
  // await homePage.waitButKeepTheTestAlive(); 
});
