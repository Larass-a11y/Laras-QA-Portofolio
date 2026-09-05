const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");

test.describe("Login Feature", () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test("TC-01 login berhasil dengan standard_user", async ({ page }) => {
    await loginPage.login("standard_user", "secret_sauce");
    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.locator(".title")).toHaveText("Products");
  });

  test("TC-02 login gagal dengan locked_out_user", async ({ page }) => {
    await loginPage.login("locked_out_user", "secret_sauce");
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText("locked out");
  });

  test("TC-03 login gagal dengan password salah", async ({ page }) => {
    await loginPage.login("standard_user", "wrong_password");
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText("do not match");
  });

  test("TC-04 login gagal dengan field kosong", async ({ page }) => {
    await loginPage.loginButton.click();
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText("Username is required");
  });
});
