class ProductPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator("#search_product");
    this.searchButton = page.locator("#submit_search");
    this.headingText = page.getByText("Searched Products", { exact: true });
    this.cardProducts = page.locator("div.features_items .single-products");
  }

  async goto() {
    await this.page.goto("/products", { waitUntil: "domcontentloaded" });
  }

  async fillSearchProduct(keyword) {
    await this.searchInput.fill(keyword);
    await this.searchButton.click();
    await this.headingText.waitFor({ state: "visible" });
  }
}
module.exports = { ProductPage };
