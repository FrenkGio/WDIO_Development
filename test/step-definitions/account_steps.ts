import { Given, When, Then } from "@wdio/cucumber-framework";
import HomePage from "../pageobjects/homePage.js";
import AccountPage from "../pageobjects/accountPage.js";

const homePage = new HomePage()
const accountPage = new AccountPage()


When(/^The user signs in$/, async () => {
	await homePage.clickSignIn();
	await accountPage.fillInAccountDetails();
});

Then(/^The user is signed in$/, async () => {
	await accountPage.verifyUserIsLoggedIn();
});

When(/^Then user creates an account$/, async () => {
	await homePage.clickSignIn();
	await accountPage.createNewAccount()
});
