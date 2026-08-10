class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = page.locator(".cart_item");
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.continueShoppingButton = page.locator(
      '[data-test="continue-shopping"]',
    );
  }

  removeProduct(productName) {
    const slug = productName.toLowerCase().replace(/\s+/g, "-");
    return this.page.locator(`[data-test="remove-${slug}"]`).click();
  }

  async checkout() {
    await this.checkoutButton.click();
  }

  async itemCount() {
    return this.cartItems.count();
  }
}

module.exports = { CartPage };
