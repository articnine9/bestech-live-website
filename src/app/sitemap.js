// app/sitemap.js
import { products } from "@/lib/products";
import { getAllBrands } from "@/lib/brands";

export default async function sitemap() {
  const baseUrl = "https://www.bestechparts.ae";

  const urls = [];

  // 1️⃣ Static pages
  const staticPages = [
    { url: `${baseUrl}/`, lastModified: new Date().toISOString() }, // Home
    { url: `${baseUrl}/about-us`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/blog`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/contact`, lastModified: new Date().toISOString() },
  ];

  urls.push(...staticPages);

  // 2️⃣ Products
  products.forEach((category) => {
    urls.push({
      url: category.canonical,
      lastModified: new Date().toISOString(),
    });

    category.items.forEach((item) => {
      urls.push({
        url: `${baseUrl}${item.url}`,
        lastModified: new Date().toISOString(),
      });
    });
  });

  // 3️⃣ Brands
  const brands = await getAllBrands();
  brands.forEach((brand) => {
    urls.push({
      url: `${baseUrl}/brands/${brand.slug}`,
      lastModified: new Date().toISOString(),
    });
  });

  return urls;
}
