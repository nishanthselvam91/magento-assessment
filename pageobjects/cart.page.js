const Page = require('./page');

class CartPage extends Page {
    get proceedToCheckoutButton() {
        return $('button.checkout');
    }
}

module.exports = new CartPage();
