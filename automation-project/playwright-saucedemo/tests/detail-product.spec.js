const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");
const { ProductsPage } = require("../pages/ProductsPage");

test("TC-20 user menambahkan produk langsung pada halaman detail produk tersebut", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await loginPage.goto();
  await loginPage.login("standard_user", "secret_sauce");

  await productsPage.productNames.first().click();
  await productsPage.addBtnCart.click();
  await expect(productsPage.cartBadge).toHaveText("1");
});
