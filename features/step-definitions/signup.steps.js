console.log('Signup steps are being loaded');
const { Given, When, Then } = require('@wdio/cucumber-framework');
const SignupPage = require('../../pageobjects/signup.page');
const { expect } = require('@wdio/globals');

Given('I am on the signup page', async () => {
    console.log('Navigating to signup page...');
    await SignupPage.open();
});

When(/^I enter account details with random email$/, async () => {
    console.log('Filling the signup form...');
    const randomEmail = `testuser_${Date.now()}@example.com`;
    await SignupPage.fillSignupForm({
        firstName: 'John',
        lastName: 'Doe',
        email: randomEmail,
        password: 'Password123!',
    });
});

Then(/^I should see account creation success message$/, async () => {
    console.log('Verifying success message...');
    await expect(SignupPage.successMessage).toBeExisting();
    await expect(SignupPage.successMessage).toHaveTextContaining('Thank you for registering');
});
