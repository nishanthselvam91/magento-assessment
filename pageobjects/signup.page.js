const Page = require('./page');
const { $ } = require('@wdio/globals');

class SignupPage extends Page {
    get inputFirstName() { return $('#firstname'); }
    get inputLastName() { return $('#lastname'); }
    get inputEmail() { return $('#email_address'); }
    get inputPassword() { return $('#password'); }
    get inputConfirmPassword() { return $('#password-confirmation'); }
    get btnCreateAccount() { return $('button[title="Create an Account"]'); }

    get successMessage() { return $('.message-success.success.message'); }

    open() {
        return super.open('customer/account/create');
    }

    async fillSignupForm({ firstName, lastName, email, password }) {
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.inputConfirmPassword.setValue(password);
        await this.btnCreateAccount.click();
    }
}

module.exports = new SignupPage();
