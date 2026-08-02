// app/sitemap.js
import { products } from "@/lib/products";
import { getAllBrands } from "@/lib/brands";
import { getAllBlogPosts } from "@/lib/blog";

// URLs removed from the site (trademark takedown). The pages themselves 404 via
// their data being deleted; this belt-and-suspenders filter guarantees they are
// never emitted to Google even though lib/products.js and lib/brands.js still
// list them. Keep in sync with the removed data; do not re-add without sign-off.
const REMOVED_PATHS = new Set([
  "/products/switches/escalator-switch-5791-3864-tayee",
  "/products/door-locks/elevator-door-triangle-lock-s",
  "/products/door-sliders/door-slider-white-18mmx25mm-s",
  "/products/signalization/white-lop-full-set",
  "/products/signalization/white-lop-full-set-without-display",
  "/blog/top-elevator-spare-parts-for-leading-brands-in-the-uae-hyundai-kone-otis-mitsubishi-schindler-thyssenkrupp",
]);

// The whole Schindler brand tree (/brands/schindler and every group under it) was
// removed; lib/brands.js still lists it, so exclude the entire prefix here.
const REMOVED_PREFIXES = ["/brands/schindler"];

const isRemoved = (url) => {
  try {
    const { pathname } = new URL(url);
    if (REMOVED_PATHS.has(pathname)) return true;
    return REMOVED_PREFIXES.some(
      (prefix) => pathname === prefix || pathname.startsWith(prefix + "/")
    );
  } catch {
    return false;
  }
};

export default async function sitemap() {
  const baseUrl = "https://www.bestechparts.ae";
  const urls = [];

  console.log("Starting sitemap generation...");

  // 1️⃣ Static pages
  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
      images: [`${baseUrl}/images/home-hero.jpg`],
    },
    { url: `${baseUrl}/about`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/products`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/blog`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/contact`, lastModified: new Date().toISOString() },
  ];

  urls.push(...staticPages);
  console.log("Static pages added:", staticPages);

  // 2️⃣ Products
  products.forEach((category) => {
    // Add category page if it has a valid URL
    if (category?.canonical) {
      urls.push({
        url: category.canonical.startsWith("http")
          ? category.canonical
          : `${baseUrl}/products${category.canonical}`,
        lastModified: new Date().toISOString(),
      });
      console.log(`Category added: ${category.canonical}`);
    }

    // Add individual product pages
    if (Array.isArray(category.items)) {
      category.items.forEach((item) => {
        if (!item?.url) return;

        const imageUrl =
          typeof item.image === "string" && item.image
            ? `${baseUrl}${item.image}`
            : undefined;

        const productUrlObj = {
          url: item.url.startsWith("http")
            ? item.url
            : `${baseUrl}/products${item.url}`,
          lastModified: new Date().toISOString(),
        };

        // Only add image if it’s valid
        if (imageUrl) {
          productUrlObj.images = [imageUrl];
        }

        urls.push(productUrlObj);
        console.log("Product added:", productUrlObj);
      });
    }
  });

  // 3️⃣ Brands + Brand Groups
  const brands = await getAllBrands();

  brands.forEach((brand) => {
    if (!brand?.slug) return;

    // Brand main page
    const brandUrl = `${baseUrl}/brands/${brand.slug}`;
    urls.push({
      url: brandUrl,
      lastModified: new Date().toISOString(),
    });
    console.log("Brand added:", brandUrl);

    // Brand group pages (IMPORTANT PART)
    if (Array.isArray(brand.groups)) {
      brand.groups.forEach((group) => {
        if (!group?.slug) return;

        const groupUrl = `${baseUrl}/brands/${brand.slug}/${group.slug}`;
        urls.push({
          url: groupUrl,
          lastModified: new Date().toISOString(),
        });

        console.log("Brand group added:", groupUrl);
      });
    }
  });

  // 4️⃣ Blog posts
  const blogs = await getAllBlogPosts();
  blogs.forEach((post) => {
    if (!post?.slug) return;

    const blogUrl = `${baseUrl}/blog/${post.slug}`;
    const blogUrlObj = {
      url: blogUrl,
      lastModified: new Date().toISOString(),
    };

    // Only include valid image URL
    if (typeof post.image === "string" && post.image) {
      blogUrlObj.images = [`${baseUrl}${post.image}`];
    }

    urls.push(blogUrlObj);
    console.log("Blog post added:", blogUrlObj);
  });

  const filtered = urls.filter((entry) => !isRemoved(entry.url));
  console.log(
    "Sitemap generation complete. Total URLs:",
    filtered.length,
    "| removed (takedown):",
    urls.length - filtered.length
  );
  return filtered;
}
