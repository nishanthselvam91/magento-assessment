const {Given, When, Then} = require('@wdio/cucumber-framework');
const HomePage = require('../../pageobjects/home.page');
const CartPage = require('../../pageobjects/cart.page');
const CheckoutPage = require('../../pageobjects/checkout.page');
const ThankYouPage = require('../../pageobjects/thankyou.page');
const {browser} = require("@wdio/globals");

Given(/^I click on the cart icon$/, async () => {
    await browser.pause(10000);
    await HomePage.cartIcon.click();
});

Given(/^I click on the "Proceed to Checkout" button$/, async () => {
    await browser.pause(6000);
    await CartPage.proceedToCheckoutButton.click();
});

When(/^I fill in the new shipping address details$/, async () => {
    await browser.pause(10000);
    console.log('✍️ No existing address. Filling in new shipping address...');
    await CheckoutPage.newAddressButton.click();
    await CheckoutPage.fillShippingDetails({
        firstName: 'John',
        lastName: 'Doe',
        street: ['123 Main St', 'Apt 4B', ''],
        city: 'New York',
        state: 'New York',
        zip: '10001',
        country: 'United States',
        phone: '1234567890'
    });
    await CheckoutPage.shipHereButton.click();
});


When(/^I select the shipping method$/, async () => {
    await  browser.pause(9000);
    await CheckoutPage.selectShippingMethod('$5.00');
});

When(/^I proceed to payment$/, async () => {
    await CheckoutPage.nextButton.click();
});

When(/^I place the order$/, async () => {
    await CheckoutPage.placeOrderButton.click();
});

Then(/^I should see a confirmation message "([^"]*)"$/, async (message) => {
    await expect(ThankYouPage.confirmationMessage).toHaveTextContaining(message);
});

Then(/^I sign out$/, async () => {
    await HomePage.signOut();
});
