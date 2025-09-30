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
      images: [
        {
          url: `${baseUrl}/images/home-hero.jpg`,
          title: "Best Tech Parts",
          caption: "High-quality computer parts and accessories",
        },
      ],
    },
    { url: `${baseUrl}/about-us`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/blog`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/contact`, lastModified: new Date().toISOString() },
  ];
  urls.push(...staticPages);

  console.log("Static pages added:", staticPages);

  // 2️⃣ Products
  products.forEach((category) => {
    // Category page
    urls.push({
      url: category.canonical,
      lastModified: new Date().toISOString(),
    });

    console.log(`Category added: ${category.canonical}`);

    // Individual product pages
    category.items.forEach((item) => {
      const imagesArray = [];
      if (item.image && typeof item.image === "string") {
        imagesArray.push({
          url: `${baseUrl}/products${item.image}`,
          title: item.name || undefined,
          caption: item.description || undefined,
        });
      }

      const productUrlObj = {
        url: `${baseUrl}/products${item.url}`,
        lastModified: new Date().toISOString(),
        images: [`${baseUrl}${item.image}`],
      };

      urls.push(productUrlObj);

      console.log("Product added:", productUrlObj);
    });
  });

  // 3️⃣ Brands
  const brands = await getAllBrands();
  brands.forEach((brand) => {
    const brandUrlObj = {
      url: `${baseUrl}/brands/${brand.slug}`,
      lastModified: new Date().toISOString(),
    };
    urls.push(brandUrlObj);

    console.log("Brand added:", brandUrlObj);
  });

  // 4️⃣ Blog posts
  const blogs = await getAllBlogPosts();
  blogs.forEach((post) => {
    const imagesArray = [];
    if (post.image) {
      imagesArray.push({
        url: `${baseUrl}${post.image}`,
        title: post.title,
      });
    }

    const blogUrlObj = {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date().toISOString(),
      // images: imagesArray.length ? imagesArray : undefined,
    };

    urls.push(blogUrlObj);

    console.log("Blog post added:", blogUrlObj);
  });

  console.log("Sitemap generation complete. Total URLs:", urls.length);
  // Optional: print full sitemap
  // console.log(JSON.stringify(urls, null, 2));

  return urls;
}
