class AuthPage {
  constructor(page) {
    this.page = page;
    this.registerButton = page.getByRole("link", { name: "Signup / Login" });
    this.loginEmailInput = page.locator('[data-qa="login-email"]');
    this.loginPasswordInput = page.locator('[data-qa="login-password"]');
    this.loginButton = page.locator('[data-qa="login-button"]');
  }
}
module.exports = { AuthPage };
