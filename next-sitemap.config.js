module.exports = {
  siteUrl: "https://bestechparts.ae",
  generateRobotsTxt: true, // Adds robots.txt automatically
  sitemapSize: 5000, // Split sitemap if >5k URLs
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/secret-page", "/admin/*"], // Optional excludes
};
