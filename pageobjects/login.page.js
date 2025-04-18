const {$} = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    get inputEmail() {
        return $('#email');
    }

    get inputPassword() {
        return $('#pass');
    }

    get btnSubmit() {
        return $('#send2');
    }

    get errorMessage() {
        return $('.message-error');
    }

    get dashboardHeader() {
        return $('#maincontent > div.columns > div.column.main > div.page-title-wrapper > h1 > span');
    }


    async login({email, password}) {
        console.log('Trying to login with:', email, password);
        if (typeof email !== 'string' || typeof password !== 'string') {
            throw new Error('Email and password must be strings');
        }
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }


    open() {
        return super.open('customer/account/login');
    }
}

module.exports = new LoginPage();
