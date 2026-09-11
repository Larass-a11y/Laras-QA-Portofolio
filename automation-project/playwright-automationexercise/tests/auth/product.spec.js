const { test, expect } = require("@playwright/test");
const { AuthPage } = require("../../pages/AuthPage");
const { ProductPage } = require("../../pages/ProductPage");
const { ProductDetailPage } = require("../../pages/ProductDetailPage");

test.describe("Main Features: Products", () => {
  let authPage, productPage, productDetailPage;

  test.beforeEach(async ({ page }) => {
    authPage = new AuthPage(page);
    productPage = new ProductPage(page);
    productDetailPage = new ProductDetailPage(page);
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

  test("TC-08 menampilkan informasi detail terkait produk yang dipilih user", async ({
    page,
  }) => {
    await productDetailPage.goto(1);
    await expect(productDetailPage.nameOfProduct).toHaveText("Blue Top");
    await expect(productDetailPage.categoryProduct).toContainText(
      "Women > Tops",
    );
    await expect(productDetailPage.priceProduct).toHaveText("Rs. 500");
    await expect(productDetailPage.quantityOfProduct).toHaveValue("1");
    await expect(productDetailPage.addToCartButton).toHaveText("Add to cart");
    await expect(productDetailPage.availableProduct).toContainText(
      "Availability",
    );
    await expect(productDetailPage.conditionProduct).toContainText("Condition");
    await expect(productDetailPage.brandProduct).toContainText("Brand");
  });

  test("tc-09", async ({ page }) => {});
});
