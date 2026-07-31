const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');

test.describe('Cart Feature', () => {
  let loginPage, productsPage, cartPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    cartPage = new CartPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('TC-05 tambah 1 produk ke cart, badge counter update', async () => {
    await productsPage.addProductToCart('Sauce Labs Backpack');
    await expect(productsPage.cartBadge).toHaveText('1');
  });

  test('TC-06 tambah lebih dari 1 produk, badge counter sesuai jumlah', async () => {
    await productsPage.addProductToCart('Sauce Labs Backpack');
    await productsPage.addProductToCart('Sauce Labs Bike Light');
    await expect(productsPage.cartBadge).toHaveText('2');
  });

  test('TC-07 hapus produk dari halaman produk, badge hilang', async () => {
    await productsPage.addProductToCart('Sauce Labs Backpack');
    await productsPage.removeProductFromCart('Sauce Labs Backpack');
    await expect(productsPage.cartBadge).toHaveCount(0);
  });

  test('TC-08 item yang ditambahkan muncul di halaman cart', async ({ page }) => {
    await productsPage.addProductToCart('Sauce Labs Backpack');
    await productsPage.goToCart();
    await expect(page.locator('.cart_item')).toHaveCount(1);
    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
  });
});
