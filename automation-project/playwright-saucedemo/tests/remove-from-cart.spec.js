const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");
const { ProductsPage } = require("../pages/ProductsPage");
const { CartPage } = require("../pages/CartPage");

test("TC-12 pengurangan badge cart ketika item dihapus", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();
  await loginPage.login("standard_user", "secret_sauce");
  await productsPage.addProductToCart("Sauce Labs Backpack");
  await productsPage.goToCart();
  await cartPage.removeProduct("Sauce Labs Backpack");
  await expect(productsPage.cartBadge).toHaveCount(0);
});
