class AddressInfoPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.locator('[data-qa="first_name"]');
    this.lastNameInput = page.locator('[data-qa="last_name"]');
    this.addressInput = page.locator('[data-qa="address"]');
    this.countryInput = page.locator('[data-qa="country"]');
    this.stateInput = page.locator('[data-qa="state"]');
    this.cityInput = page.locator('[data-qa="city"]');
    this.zipcodeInput = page.locator('[data-qa="zipcode"]');
    this.mobileNumberInput = page.locator('[data-qa="mobile_number"]');
    this.createAccButton = page.locator('[data-qa="create-account"]');
  }

  async fillAddressInfo(
    firstname,
    lastname,
    address,
    country,
    state,
    city,
    zipcode,
    mobilenumber,
  ) {
    await this.firstNameInput.fill(firstname);
    await this.lastNameInput.fill(lastname);
    await this.addressInput.fill(address);
    await this.countryInput.selectOption(country);
    await this.stateInput.fill(state);
    await this.cityInput.fill(city);
    await this.zipcodeInput.fill(zipcode);
    await this.mobileNumberInput.fill(mobilenumber);
    await this.createAccButton.click();
  }
}
module.exports = { AddressInfoPage };
