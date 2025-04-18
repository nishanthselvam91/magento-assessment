const Page = require('./page');
const { $ } = require('@wdio/globals');

class AccountPage extends Page {
    get accountWelcomeText() { return $('.greet.welcome'); }
}

module.exports = new AccountPage();