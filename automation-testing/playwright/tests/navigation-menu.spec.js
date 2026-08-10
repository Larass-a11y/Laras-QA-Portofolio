const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");
const { ProductsPage } = require("../pages/ProductsPage");

test("TC-17 user logout dari halaman utama", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await loginPage.goto();
  await loginPage.login("standard_user", "secret_sauce");

  await productsPage.badgeMenu.click();
  await productsPage.logOutMenu.click();
  await expect(page).toHaveURL("https://www.saucedemo.com/");
});

test("TC-18 user kembali ke halaman produk melalui menu All Items", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await loginPage.goto();
  await loginPage.login("standard_user", "secret_sauce");

  await productsPage.productNames.first().click();
  await productsPage.badgeMenu.click();
  await productsPage.allItemMenu.click();
  await expect(page).toHaveURL(/inventory.html/);
});

test("TC-19 cart kembali kosong setelah klik Reset App State", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await loginPage.goto();
  await loginPage.login("standard_user", "secret_sauce");

  const products = [
    "Sauce Labs Backpack",
    "Sauce Labs Bike Light",
    "Sauce Labs Bolt T-Shirt",
    "Sauce Labs Onesie",
  ];
  for (const productName of products) {
    await productsPage.addProductToCart(productName);
  }
  await productsPage.badgeMenu.click();
  await productsPage.resetAppMenu.click();
  await expect(productsPage.cartBadge).toHaveCount(0);
});
