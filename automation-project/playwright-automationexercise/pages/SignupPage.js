class SignupPage {
  constructor(page) {
    this.page = page;
    this.signupNameInput = page.locator('[data-qa="signup-name"]');
    this.signupEmailInput = page.locator('[data-qa="signup-email"]');
    this.signupButton = page.locator('[data-qa="signup-button"]');
    this.errorMessage = page.getByText("Email Address already exist!");
  }

  async goto() {
    await this.page.goto("/", {
      waitUntil: "domcontentloaded",
    });
  }

  async register(name, email) {
    await this.signupNameInput.fill(name);
    await this.signupEmailInput.fill(email);
    await this.signupButton.click();
  }
}
module.exports = { SignupPage };
