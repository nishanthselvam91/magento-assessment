const Page = require('./page');

class CheckoutPage extends Page {
    get firstNameInput() { return $('[name="firstname"]'); }
    get lastNameInput() { return $('[name="lastname"]'); }
    get streetInputs() { return $$('[name^="street"]'); }
    get cityInput() { return $('[name="city"]'); }
    get stateDropdown() { return $('[name="region_id"]'); }
    get zipInput() { return $('[name="postcode"]'); }
    get countryDropdown() { return $('[name="country_id"]'); }
    get phoneInput() { return $('[name="telephone"]'); }

    get shippingMethods() { return $$('[name="ko_unique_1"]'); } // Or adjust name
    get nextButton() { return $('button.continue'); }
    get placeOrderButton() { return $('button[title="Place Order"]'); }
    get newAddressButton() { return $('//span[contains(text(), "New Address")]'); }

    get shipHereButton() { return $('//button[contains(@class, "action-save-address") and span[text()="Ship here"]]'); }


    get existingAddressBlock() {
        console.log("inside existingAddressBlock")
        return $('div.shipping-address-item selected-item');
    }

    async fillShippingDetails({ firstName, lastName, street, city, state, zip, country, phone }) {
        await this.firstNameInput.waitForDisplayed({ timeout: 10000 });

        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);

        for (let i = 0; i < street.length; i++) {
            if (street[i]) {
                await this.streetInputs[i].setValue(street[i]);
            }
        }

        await this.cityInput.setValue(city);
        await this.stateDropdown.selectByVisibleText(state);
        await this.zipInput.setValue(zip);
        await this.countryDropdown.selectByVisibleText(country);
        await this.phoneInput.setValue(phone);

        // ✅ Look for and click the "Ship Here" or "Next" button if available
        const shipHereButton = await $('button.action.primary');
        if (await shipHereButton.isDisplayed() && await shipHereButton.isClickable()) {
            await shipHereButton.click();
        }

        // ✅ Wait for shipping method section to appear
        const shippingMethodSection = await $('#checkout-shipping-method-load');
        await shippingMethodSection.waitForDisplayed({ timeout: 10000 });

        console.log('✅ New address filled and confirmed');
    }


    async selectShippingMethod(amountText) {
        const methods = await this.shippingMethods;  // Get all shipping methods

        for (const method of methods) {
            // Find the corresponding method price text and match it with the amount
            const methodPriceText = await method.parentElement().$('td.col.col-price span.price').getText();

            if (methodPriceText.includes(amountText)) {
                // Find the radio button in the same row and click it
                const radioButton = await method.parentElement().$('input[type="radio"]');

                // Wait for the radio button to be clickable, then click it
                await radioButton.waitForClickable({ timeout: 5000 });
                await radioButton.click();
                break;
            }
        }
    }



}

module.exports = new CheckoutPage();
