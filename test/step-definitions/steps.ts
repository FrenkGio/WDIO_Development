import { Given, When, Then } from '@wdio/cucumber-framework';
// import chai, {expect, assert, should} from "chai"

import LoginPage from '../pageobjects/exampleTests/login.page.js';
import SecurePage from '../pageobjects/exampleTests/secure.page.js';
import loginPage from '../pageobjects/exampleTests/login.page.js';


const pages = {
    login: LoginPage
}

Given(/^I am on the "(\w+)" page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
    await browser.saveScreenshot("./test.png")
    
});






