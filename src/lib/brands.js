// lib/brands.js

// Example brand data (replace with DB/API)
const brands = [
  {
    slug: "schindler",
    name: "Schindler",
    description: "Schindler elevator products",
  },
  { slug: "otis", name: "Otis", description: "Otis elevator products" },
  { slug: "kone", name: "KONE", description: "KONE elevator products" },
];

export async function getBrandBySlug(slug) {
  return brands.find((b) => b.slug === slug);
}

// Optional: return all brands for sitemap
export async function getAllBrands() {
  return brands;
}
