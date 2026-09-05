const { test, expect } = require("@playwright/test");
const { SignupPage } = require("../../pages/SignupPage");
const { AccountInfoPage } = require("../../pages/AccountInfoPage");
const { AddressInfoPage } = require("../../pages/AddressInfoPage");
const { AuthPage } = require("../../pages/AuthPage");

const genderVariation = [
  { scenario: "Mr.", titleKey: "titleMr" },
  { scenario: "Mrs.", titleKey: "titleMrs" },
];

test.describe("SignUp Feature", () => {
  let signupPage, accountInfoPage, addressInfoPage, authPage;

  test.beforeEach(async ({ page }) => {
    signupPage = new SignupPage(page);
    accountInfoPage = new AccountInfoPage(page);
    addressInfoPage = new AddressInfoPage(page);
    authPage = new AuthPage(page);
    const uniqueEmail = `cobates${Date.now().toString().slice(-4)}@gmail.com`;
    await signupPage.goto();
    await authPage.registerButton.click();
    await signupPage.register("cobates", uniqueEmail);
  });

  test("TC-01 user berhasil register dengan data valid", async ({ page }) => {
    await expect(page).toHaveURL(/.*signup/);
    await expect(page.getByText("Enter Account Information")).toBeVisible();
  });

  for (const data of genderVariation) {
    test(`TC-02 user mengisi form informasi terkait akun dan alamat (${data.scenario})`, async ({
      page,
    }) => {
      const selectedTitleLocator = accountInfoPage[data.titleKey];
      await accountInfoPage.fillAccountInfo(
        selectedTitleLocator,
        "cobates",
        "456@mail",
      );
      await accountInfoPage.addSelectOption("12", "September", "2000");
      await addressInfoPage.fillAddressInfo(
        "cobates",
        "tes dulu",
        "jl.menuju bug test",
        "India",
        "Maharastra",
        "Mughal",
        "4000002",
        "0283619372648",
      );
      await expect(page).toHaveURL(/.*account_created/);
      await expect(page.getByText("Account Created!")).toBeVisible();
    });
  }
});
