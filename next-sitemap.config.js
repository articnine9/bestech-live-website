const { fetchProductUrls } = require("./lib/fetchProductSlugs");

module.exports = {
  siteUrl: "https://bestechparts.ae",
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.7,

  additionalPaths: async (config) => {
    const slugs = fetchProductUrls();

    return slugs.map((slug) => ({
      loc: `/products/${slug}`,
      changefreq: "weekly",
      priority: 0.8,
    }));
  },
};
