const { test, expect } = require("@playwright/test");
const { AuthPage } = require("../../pages/AuthPage");
const { ProductPage } = require("../../pages/ProductPage");

test.describe("Main Features: Products", () => {
  let authPage, productPage;

  test.beforeEach(async ({ page }) => {
    authPage = new AuthPage(page);
    productPage = new ProductPage(page);
    await productPage.goto();
  });

  test("TC-06 user mencari produk dengan kata kunci yang tersedia", async ({
    page,
  }) => {
    await productPage.fillSearchProduct("dress");
    await expect(productPage.headingText).toBeVisible();
    const productCount = await productPage.cardProducts.count();
    expect(productCount).toBeGreaterThan(0);
  });

  test("TC-07 user mencari produk dengan kata kunci yang tidak tersedia", async ({
    page,
  }) => {
    await productPage.fillSearchProduct("apache");
    await expect(productPage.headingText).toBeVisible();
    const productCount = await productPage.cardProducts.count();
    expect(productCount).toBe(0);
  });
});
