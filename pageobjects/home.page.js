const { expect } = require('@wdio/globals');
const Page = require('./page');

class HomePage extends Page {
    get hotSellersSection() {
        return $('#hot-sellers');
    }

    productByName(name) {
        return $(`//a[contains(text(), "Hero Hoodie")]`);
    }

    async selectProductFromHotSellers(name) {
        const product = await this.productByName(name);
        await product.waitForExist({ timeout: 10000 });
        await product.waitForDisplayed({ timeout: 10000 });
        await product.scrollIntoView();
        await product.click();
    }

    open() {
        return super.open('');
    }
}

module.exports = new HomePage();