const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test.describe('Checkout Feature', () => {
  let loginPage, productsPage, cartPage, checkoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await productsPage.addProductToCart('Sauce Labs Backpack');
    await productsPage.goToCart();
    await cartPage.checkout();
  });

  test('TC-09 checkout gagal jika form kosong', async () => {
    await checkoutPage.continueButton.click();
    await expect(checkoutPage.errorMessage).toBeVisible();
    await expect(checkoutPage.errorMessage).toContainText('First Name is required');
  });

  test('TC-10 checkout berhasil dengan data valid, order complete', async ({ page }) => {
    await checkoutPage.fillInfo('Budi', 'Santoso', '65145');
    await expect(checkoutPage.summaryTotal).toBeVisible();

    await checkoutPage.finishOrder();
    await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
  });

  test('TC-11 total price di summary sesuai (subtotal + tax)', async ({ page }) => {
    await checkoutPage.fillInfo('Budi', 'Santoso', '65145');

    const subtotalText = await page.locator('.summary_subtotal_label').innerText();
    const taxText = await page.locator('.summary_tax_label').innerText();
    const totalText = await page.locator('.summary_total_label').innerText();

    const subtotal = parseFloat(subtotalText.replace('Item total: $', ''));
    const tax = parseFloat(taxText.replace('Tax: $', ''));
    const total = parseFloat(totalText.replace('Total: $', ''));

    expect(total).toBeCloseTo(subtotal + tax, 2);
  });
});
