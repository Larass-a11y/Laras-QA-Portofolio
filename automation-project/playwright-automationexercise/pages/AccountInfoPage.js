class AccountInfoPage {
  constructor(page) {
    this.page = page;
    this.titleMr = page.locator("#id_gender1");
    this.titleMrs = page.locator("#id_gender2");
    this.nameAccInformation = page.locator('[data-qa="name"]');
    this.passwordAccInformation = page.locator('[data-qa="password"]');
    this.dayOfBirthAccInformation = page.locator('[data-qa="days"]');
    this.monthOfBirthAccInformation = page.locator('[data-qa="months"]');
    this.yearOfBirthAccInformation = page.locator('[data-qa="years"]');
  }

  async fillAccountInfo(genderTitle, name, password) {
    await genderTitle.check();
    await this.nameAccInformation.fill(name);
    await this.passwordAccInformation.fill(password);
  }

  async addSelectOption(day, month, year) {
    await this.dayOfBirthAccInformation.selectOption(day);
    await this.monthOfBirthAccInformation.selectOption(month);
    await this.yearOfBirthAccInformation.selectOption(year);
  }
}
module.exports = { AccountInfoPage };
