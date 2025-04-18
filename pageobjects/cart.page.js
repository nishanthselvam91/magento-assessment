const { $ } = require('@wdio/globals');
const Page = require('./page');

class CartPage extends Page {
    get productName() {
        return $('.product-item-name a');
    }
}

module.exports = new CartPage();