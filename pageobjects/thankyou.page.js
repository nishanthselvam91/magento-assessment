const Page = require('./page');

class ThankYouPage extends Page {
    get confirmationMessage() {
        return $('div.checkout-success p'); // Adjust based on actual DOM
    }
}

module.exports = new ThankYouPage();
