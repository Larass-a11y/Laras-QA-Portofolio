const { test, expect } = require("@playwright/test");
const { AuthPage } = require("../../pages/AuthPage");

test.describe("Login Feature", () => {
  let authPage;

  test.beforeEach(async ({ page }) => {
    authPage = new AuthPage(page);
    await authPage.goto();
    await authPage.registerButton.click();
  });

  test("TC-03 user login dengan data yang sudah didaftarkan", async ({
    page,
  }) => {
    await authPage.login("erwita.larasati334@gmail.com", "qaTest123");
    await expect(page).toHaveURL("https://automationexercise.com/");
    await expect(page.getByText("Logged in as testin")).toBeVisible();
  });

  test("TC-04 user login menggunakan email yang tidak terdaftar", async ({
    page,
  }) => {
    await authPage.login("testaku123@gmail.com", "qaTest123");
    await expect(authPage.loginErrorMessage).toBeVisible();
  });

  test("TC-05 user login menggunakan password yang salah", async ({ page }) => {
    await authPage.login("erwita.larasati334@gmail.com", "asdfghjkl");
    await expect(authPage.loginErrorMessage).toBeVisible();
  });
});
