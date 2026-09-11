class ProductDetailPage {
  constructor(page) {
    this.page = page;
    this.nameOfProduct = page.locator("div.product-information h2");
    this.categoryProduct = page
      .locator("div.product-information p")
      .filter({ hasText: "Category" });
    this.priceProduct = page
      .locator("div.product-information span")
      .filter({ hasText: /^Rs\. 500$/ });
    this.quantityOfProduct = page.locator("#quantity");
    this.addToCartButton = page.getByRole("button", { name: "Add to cart" });
    this.availableProduct = page
      .locator("div.product-information p")
      .filter({ hasText: "In Stock" });
    this.conditionProduct = page
      .locator("div.product-information p")
      .filter({ hasText: "New" });
    this.brandProduct = page
      .locator("div.product-information p")
      .filter({ hasText: "Brand:" });
  }

  async goto(productId) {
    await this.page.goto(`/product_details/${productId}`);
  }
}
module.exports = { ProductDetailPage };
