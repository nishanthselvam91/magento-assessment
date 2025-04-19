const { expect } = require('@wdio/globals');
const Page = require('./page');

class ProductPage extends Page {
    get sizeOption() {
        return (size) => $(`//div[contains(@class, 'swatch-attribute size')]//div[@option-label='${size}']`);
    }

    get colorOption() {
        return (color) => $(`//div[contains(@class, 'swatch-attribute color')]//div[@option-label='${color}']`);
    }

    get quantityInput() {
        return $('input[name="qty"]');
    }

    get addToCartButton() {
        return $('#product-addtocart-button');
    }

    get successMessage() {
        return $('.message-success');
    }

    get cartIcon() {
        return $('.action.showcart');
    }

    get viewAndEditCart() {
        return $('a=View and Edit Cart');
    }

    async selectSize(size) {
        const sizeSwatch = await $(`//div[contains(@class, 'swatch-attribute size')]//div[@option-label='${size}']`);
        await sizeSwatch.waitForDisplayed({ timeout: 10000 });
        await sizeSwatch.click();
    }

    async selectColor(color) {
        const colorSwatch = await $(`//div[contains(@class, 'swatch-attribute color')]//div[@option-label='${color}']`);
        await colorSwatch.waitForDisplayed({ timeout: 10000 });
        await colorSwatch.click();
    }

    async setQuantity(quantity) {
        const qtyInput = await $('#qty');
        await qtyInput.waitForExist({ timeout: 10000 });
        await qtyInput.setValue(quantity);
    }



    async addToCart() {
        await this.addToCartButton.waitForClickable({ timeout: 10000 });
        await this.addToCartButton.click();
    }

    get addToCartButton() {
        return $('button#product-addtocart-button');
    }

    async goToCart() {
        await this.cartIcon.click();
        await this.viewAndEditCart.click();
    }
}

module.exports = new ProductPage();
