const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../../pageobjects/login.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with email "([^"]*)" and password "([^"]*)"$/, async (email, password) => {
    await LoginPage.login({ email, password });
});

Then(/^I should see the user dashboard$/, async () => {
    await expect(LoginPage.dashboardHeader).toBeDisplayed();
});

Then(/^I should see an error message$/, async () => {
    await expect(LoginPage.errorMessage).toBeDisplayed();
    await expect(LoginPage.errorMessage).toHaveText('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.');

});


