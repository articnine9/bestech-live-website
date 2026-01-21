export default function robots() {
  console.log("Robots file generated for bestechparts.ae");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.bestechparts.ae/sitemap.xml",
  };
}
