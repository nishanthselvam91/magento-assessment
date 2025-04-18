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
        await this.sizeOption(size).click();
    }

    async selectColor(color) {
        await this.colorOption(color).click();
    }

    async setQuantity(quantity) {
        const qtyInput = await this.quantityInput;
    
        console.log('Waiting for quantity input to be available...');
        await browser.pause(500); // Small delay before checks
    
        await browser.waitUntil(async () => {
            const exists = await qtyInput.isExisting();
            const displayed = await qtyInput.isDisplayed();
            console.log(`Quantity input exists: ${exists}, displayed: ${displayed}`);
            return exists && displayed;
            await browser.saveScreenshot('./screenshots/quantity_input_issue.png');
        }, {
            timeout: 10000,
            timeoutMsg: 'Quantity input not found or not visible after 10s'
        });
    
        await qtyInput.scrollIntoView();
        await qtyInput.click(); // Focus the input before typing
        await qtyInput.clearValue(); // Optional: clear default value
        await qtyInput.setValue(quantity);
        await browser.pause(500); // Small delay after typing
    }
    

    async addToCart() {
        const btn = await this.addToCartButton;
        await btn.waitForDisplayed({ timeout: 5000 });
        await btn.click();
    }    

    async goToCart() {
        await this.cartIcon.click();
        await this.viewAndEditCart.click();
    }
}

module.exports = new ProductPage();
