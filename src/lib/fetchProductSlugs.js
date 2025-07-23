const fs = require("fs");
const path = require("path");

function fetchProductUrls() {
  const filePath = path.join(__dirname, "db/products.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const products = JSON.parse(fileContent);

  const urls = [];

  for (const product of products) {
    urls.push(`/product/${product.slug}`);

    if (product.items?.length) {
      product.items.forEach((item) => {
        if (item.url) urls.push(item.url);
      });
    }
  }

  return urls;
}

module.exports = { fetchProductUrls };
