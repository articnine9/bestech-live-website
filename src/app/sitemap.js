// app/sitemap.js
import { products } from "@/lib/products";
import { getAllBrands } from "@/lib/brands";
import { getAllBlogPosts } from "@/lib/blog";

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
    { url: `${baseUrl}/about-us`, lastModified: new Date().toISOString() },
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
          : `${baseUrl}${category.canonical}`,
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
          url: item.url.startsWith("http") ? item.url : `${baseUrl}${item.url}`,
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

  // 3️⃣ Brands
  const brands = await getAllBrands();
  brands.forEach((brand) => {
    if (brand?.slug) {
      const brandUrl = `${baseUrl}/brands/${brand.slug}`;
      urls.push({
        url: brandUrl,
        lastModified: new Date().toISOString(),
      });
      console.log("Brand added:", brandUrl);
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

  console.log("Sitemap generation complete. Total URLs:", urls.length);
  return urls;
}
