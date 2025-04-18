const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../../pageobjects/login.page');
const HomePage = require('../../pageobjects/home.page');
const ProductPage = require('../../pageobjects/product.page');
const CartPage = require('../../pageobjects/cart.page');
const { expect } = require('@wdio/globals');

Given(/^I am logged into the website$/, async () => {
    await LoginPage.open();
    await LoginPage.login({ 
        email: 'testautomation@domain.com', 
        password: 'Welcome@123' 
    });
});

Given(/^I navigate to the homepage$/, async () => {
    await HomePage.open();
});

When(
    /^I add "([^"]*)" from Hot Sellers to the cart with size "([^"]*)", color "([^"]*)", and quantity "([^"]*)"$/,
    async (productName, size, color, quantity) => {
      await HomePage.selectProductFromHotSellers(productName);
      await ProductPage.selectSize(size);
      await ProductPage.selectColor(color);
      await expect(ProductPage.addToCartButton).toBeDisplayed(); 
      await ProductPage.setQuantity(quantity);
      await ProductPage.addToCart();
    }
  );
  

  Then(/^I should see a success message confirming the product was added$/, async () => {
    await expect(ProductPage.successMessage).toBeDisplayed();
    const successText = await ProductPage.successMessage.getText();
    expect(successText).toContain('You added Hero Hoodie to your shopping cart.');
});

Then(/^I should see the item in the shopping cart$/, async () => {
    await CartPage.open();
    await expect(CartPage.productTitle).toHaveTextContaining('Hero Hoodie');
});
