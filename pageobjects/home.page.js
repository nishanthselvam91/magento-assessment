const { expect } = require('@wdio/globals');
const Page = require('./page');

class HomePage extends Page {
    get cartIcon() {
        return $('a.showcart');
    }

    async signOut() {
        const accountToggle = await $('button[aria-label="Account"]');
        await accountToggle.click();
        const signOutLink = await $('=Sign Out');
        await signOutLink.click();
    }


    async selectProductFromHotSellers(productName) {
        // Scroll to Hot Sellers section
        const hotSellersTitle = await $(`//h2[normalize-space(.)='Hot Sellers']`);
        await hotSellersTitle.waitForExist({ timeout: 10000 });
        await hotSellersTitle.scrollIntoView();

        // Wait for the product container to load after scrolling
        const productContainer = await $(`//a[@class='product-item-link' and normalize-space(text())='${productName}']/ancestor::div[contains(@class, 'product-item-info')]`);
        await productContainer.waitForExist({ timeout: 10000 });

        // Scroll the product container into view just in case
        await productContainer.scrollIntoView();

        // Locate the image inside the product container
        const productImage = await productContainer.$(`.product-image-photo`);
        await productImage.waitForDisplayed({ timeout: 10000 });

        // Optional: Log the image status
        const isDisplayed = await productImage.isDisplayed();
        console.log(`⏺ Product image displayed: ${isDisplayed}`);

        try {
            // JS click as a fallback for reliability
            await browser.execute(el => el.click(), productImage);
            console.log(`✅ Clicked on product: ${productName}`);
        } catch (err) {
            console.error(`❌ Failed to click on product image for ${productName}:`, err);
            throw err;
        }
    }

    open() {
        return super.open('');
    }
}

module.exports = new HomePage();