export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.bestechparts.ae/sitemap.xml",
    host: "https://www.bestechparts.ae",
  };
}
