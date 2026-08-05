const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");
const { ProductsPage } = require("../pages/ProductsPage");

test("TC-13 sorting produk berdasarkan huruf A-Z", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductsPage(page);

  await loginPage.goto();
  await loginPage.login("standard_user", "secret_sauce");
  await productPage.sortBy("az");

  const allProductNames = await productPage.productNames.allTextContents();
  const sortedProduct = [...allProductNames];
  sortedProduct.sort();
  expect(allProductNames).toEqual(sortedProduct);
});

test("TC-14 sorting produk berdasarkan huruf Z-A", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductsPage(page);

  await loginPage.goto();
  await loginPage.login("standard_user", "secret_sauce");
  await productPage.sortBy("za");

  const allProductNames = await productPage.productNames.allTextContents();
  const sortedProduct = [...allProductNames];
  sortedProduct.sort();
  sortedProduct.reverse();
  expect(allProductNames).toEqual(sortedProduct);
});

test("TC-15 sorting produk berdasarkan harga tertinggi ke terendah", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductsPage(page);

  await loginPage.goto();
  await loginPage.login("standard_user", "secret_sauce");
  await productPage.sortBy("hilo");

  const allProductNames = await productPage.productPrices.allTextContents();
  const sortedProduct = [...allProductNames];
  sortedProduct.sort();
  expect(allProductNames).toEqual(sortedProduct);
});

test("TC-15 sorting produk berdasarkan harga terendah ke tertinggi", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductsPage(page);

  await loginPage.goto();
  await loginPage.login("standard_user", "secret_sauce");
  await productPage.sortBy("lohi");

  const allProductNames = await productPage.productPrices.allTextContents();
  const sortedProduct = [...allProductNames];
  sortedProduct.sort();
  sortedProduct.reverse();
  expect(allProductNames).toEqual(sortedProduct);
});
