class ProductsPage {
  constructor(page) {
    this.page = page;
    this.pageTitle = page.locator(".title");
    this.cartBadge = page.locator(".shopping_cart_badge");
    this.cartIcon = page.locator(".shopping_cart_link");
    this.badgeMenu = page.locator("#react-burger-menu-btn");
    this.allItemMenu = page.locator('[data-test="inventory-sidebar-link"]');
    this.logOutMenu = page.locator('[data-test="logout-sidebar-link"]');
    this.resetAppMenu = page.locator('[data-test="reset-sidebar-link"]');
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
    this.productPrices = page.locator('[data-test="inventory-item-price"]');
    this.productNames = page.locator('[data-test="inventory-item-name"]');
    this.addBtnCart = page.locator('[data-test="add-to-cart"]');
  }

  addProductToCart(productName) {
    const slug = productName.toLowerCase().replace(/\s+/g, "-");
    return this.page.locator(`[data-test="add-to-cart-${slug}"]`).click();
  }

  removeProductFromCart(productName) {
    const slug = productName.toLowerCase().replace(/\s+/g, "-");
    return this.page.locator(`[data-test="remove-${slug}"]`).click();
  }

  async sortBy(option) {
    // option value contoh: "lohi" (low-high), "hilo" (high-low), "az", "za"
    await this.sortDropdown.selectOption(option);
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}

module.exports = { ProductsPage };
